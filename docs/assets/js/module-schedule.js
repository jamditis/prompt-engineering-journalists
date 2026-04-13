/*
 * module-schedule.js — client-side time-gate for mooc.amditis.tech modules 2, 3, 4.
 *
 * Loaded SYNCHRONOUSLY (no defer, no async) in the <head> of every gated page.
 * Phase 1 runs immediately, before <body> parses, and adds lock classes to
 * <html> so CSS can apply locked-state styles from first paint.
 * Phase 2 runs on DOMContentLoaded and binds preventDefault handlers to
 * locked anchors so clicks and keyboard activation don't navigate.
 *
 * Matching spec: docs/superpowers/specs/2026-04-13-mooc-module-gating-design.md
 *
 * Schedule lives in exactly one place: this file. Do not duplicate it in
 * inline <script> blocks.
 */
(function () {
  'use strict';

  // Release moments in UTC. All three dates fall inside US EDT (-04:00)
  // because DST runs 2026-03-08 through 2026-11-01. If the course is ever
  // rescheduled past DST end, these strings must change.
  var MODULE_SCHEDULE = {
    'module-2': '2026-04-19T21:00:00Z', // Sun Apr 19, 5:00 PM EDT
    'module-3': '2026-04-26T21:00:00Z', // Sun Apr 26, 5:00 PM EDT
    'module-4': '2026-05-03T21:00:00Z', // Sun May 3,  5:00 PM EDT
  };

  // Visible/accessible unlock labels. Used by phase 2 when appending an
  // sr-only span to inline locked links. Card CTAs and placeholder screens
  // hard-code their own shorter label text in the HTML.
  var UNLOCK_LABELS = {
    'module-2': 'Sunday, April 19 at 5:00 PM ET',
    'module-3': 'Sunday, April 26 at 5:00 PM ET',
    'module-4': 'Sunday, May 3 at 5:00 PM ET',
  };

  // Precompute release timestamps once at script load. Saves repeated
  // Date.parse() calls when gateInlineLinks() evaluates isLocked() once
  // per anchor on pages with many module references (e.g. syllabus).
  var MODULE_RELEASE_MS = {};
  for (var _k in MODULE_SCHEDULE) {
    if (Object.prototype.hasOwnProperty.call(MODULE_SCHEDULE, _k)) {
      MODULE_RELEASE_MS[_k] = Date.parse(MODULE_SCHEDULE[_k]);
    }
  }

  function releaseFor(key) {
    return Object.prototype.hasOwnProperty.call(MODULE_RELEASE_MS, key)
      ? MODULE_RELEASE_MS[key]
      : null;
  }

  function isLocked(key, now) {
    var release = releaseFor(key);
    return release !== null && (now || Date.now()) < release;
  }

  function unlockLabel(key) {
    return UNLOCK_LABELS[key] || '';
  }

  function moduleKeyForHref(href) {
    if (!href) return null;
    var m = href.match(/\/?module-([234])\//);
    return m ? 'module-' + m[1] : null;
  }

  // Resolve a click/keydown target to its locked module key, or null if
  // the activation should be allowed through. Used by the delegated
  // document-level handlers installed in phase 1.
  function lockedKeyForActivation(target) {
    var a = target && target.closest ? target.closest('a[href]') : null;
    if (!a) return null;
    var cardKey = a.getAttribute('data-module-card');
    if (cardKey) {
      return isLocked(cardKey) ? cardKey : null;
    }
    var href = a.getAttribute('href');
    var key = moduleKeyForHref(href);
    return key && isLocked(key) ? key : null;
  }

  function handleLockedClickCapture(e) {
    if (lockedKeyForActivation(e.target)) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  function handleLockedKeydownCapture(e) {
    if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
    if (lockedKeyForActivation(e.target)) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  // Phase 1 — synchronous, pre-body-parse. Wrapped in try/catch so a runtime
  // error fails open (site still loads, gate just doesn't apply) rather than
  // freezing body parse on a bug. Installs delegated capturing click and
  // keydown listeners on `document` so locked anchors become inert from the
  // moment they appear in the DOM, not just after DOMContentLoaded — this
  // kills the click window that would otherwise exist between first paint
  // and phase-2 handler binding.
  try {
    var html = document.documentElement;
    var now = Date.now();

    for (var key in MODULE_SCHEDULE) {
      if (Object.prototype.hasOwnProperty.call(MODULE_SCHEDULE, key) && isLocked(key, now)) {
        html.classList.add('mooc-locked-' + key.replace('module-', 'm'));
      }
    }

    var pathMatch = location.pathname.match(/\/module-([234])(?:\/|$)/);
    if (pathMatch) {
      var currentKey = 'module-' + pathMatch[1];
      if (isLocked(currentKey, now)) {
        html.classList.add('mooc-locked-here');
      }
    }

    document.addEventListener('click', handleLockedClickCapture, true);
    document.addEventListener('keydown', handleLockedKeydownCapture, true);
  } catch (e) {
    if (window.console && window.console.error) {
      window.console.error('[module-schedule] phase 1 failed:', e);
    }
  }

  // Expose helpers for phase 2 and for any other scripts that want them.
  window.MOOCSchedule = {
    isLocked: isLocked,
    releaseFor: releaseFor,
    unlockLabel: unlockLabel,
    schedule: MODULE_SCHEDULE,
  };

  // Phase 2 — DOMContentLoaded. Decorates locked anchors with aria state,
  // the .module-locked-link class, and a visually-hidden unlock label.
  // Click and keydown blocking is NOT done here — the phase-1 delegated
  // capturing listener on `document` already prevents activation.

  function appendSrOnlyUnlockLabel(anchor, key) {
    var label = unlockLabel(key);
    if (!label) return;
    // Idempotent: don't double-append if phase 2 runs twice.
    if (anchor.querySelector('.sr-only[data-mooc-unlock]')) return;
    var span = document.createElement('span');
    span.className = 'sr-only';
    span.setAttribute('data-mooc-unlock', key);
    span.textContent = ' (locked, unlocks ' + label + ')';
    anchor.appendChild(span);
  }

  function gateCards() {
    var cards = document.querySelectorAll('a[data-module-card]');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var key = card.getAttribute('data-module-card');
      if (!isLocked(key)) continue;
      card.setAttribute('aria-disabled', 'true');
    }
  }

  function gateInlineLinks() {
    var links = document.querySelectorAll('a[href]:not([data-module-card])');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var href = link.getAttribute('href');
      var key = moduleKeyForHref(href);
      if (!key || !isLocked(key)) continue;
      link.classList.add('module-locked-link');
      link.setAttribute('aria-disabled', 'true');
      appendSrOnlyUnlockLabel(link, key);
    }
  }

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    try {
      gateCards();
      gateInlineLinks();
    } catch (e) {
      if (window.console && window.console.error) {
        window.console.error('[module-schedule] phase 2 failed:', e);
      }
    }
  });
})();
