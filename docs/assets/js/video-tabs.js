/* Video tab switcher — wires click + keyboard navigation for
   the .video-tabs containers used on module pages.
   Non-JS fallback: all panels visible, stacked. */
(function () {
    'use strict';

    function activate(container, targetTab) {
        var tabs = container.querySelectorAll('[role="tab"]');
        tabs.forEach(function (tab) {
            var isActive = tab === targetTab;
            tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
            tab.setAttribute('tabindex', isActive ? '0' : '-1');
            var panelId = tab.getAttribute('aria-controls');
            var panel = container.querySelector('#' + panelId);
            if (panel) {
                if (isActive) {
                    panel.removeAttribute('hidden');
                } else {
                    panel.setAttribute('hidden', '');
                }
            }
        });
    }

    function setupContainer(container) {
        var tabs = Array.from(container.querySelectorAll('[role="tab"]'));
        if (tabs.length === 0) return;

        // Activate the first tab on load; hide the rest.
        activate(container, tabs[0]);

        tabs.forEach(function (tab, index) {
            tab.addEventListener('click', function () {
                activate(container, tab);
            });

            tab.addEventListener('keydown', function (e) {
                var next = null;
                if (e.key === 'ArrowRight') {
                    next = tabs[(index + 1) % tabs.length];
                } else if (e.key === 'ArrowLeft') {
                    next = tabs[(index - 1 + tabs.length) % tabs.length];
                } else if (e.key === 'Home') {
                    next = tabs[0];
                } else if (e.key === 'End') {
                    next = tabs[tabs.length - 1];
                }
                if (next) {
                    e.preventDefault();
                    activate(container, next);
                    next.focus();
                }
            });
        });
    }

    function init() {
        document.querySelectorAll('.video-tabs').forEach(setupContainer);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
