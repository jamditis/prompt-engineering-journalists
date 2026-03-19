/* ask-ai.js — "Ask an AI about this" dropdown for mooc.amditis.tech
 * Self-contained vanilla JS. No external CSS dependencies.
 * Injected as a text-style nav link in the header nav bar.
 */
(function () {
    'use strict';

    // -- Theme (dark mooc palette) --
    var COLORS = {
        triggerColor: '#9ca3af',    // gray-400 — matches nav link default
        triggerHover: '#a3e635',     // acid — matches nav link hover
        panelBg: '#1e293b',
        panelText: '#f1f5f9',
        panelBorder: '#334155',
        panelShadow: '0 10px 25px rgba(0,0,0,0.3)',
        itemHover: '#334155',
        iconColor: '#67e8f9',
    };

    // -- SVG helpers --

    function makeSvg(pathD, color, w) {
        var NS = 'http://www.w3.org/2000/svg';
        var s = String(w || 16);
        var svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('width', s);
        svg.setAttribute('height', s);
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', color);
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        var path = document.createElementNS(NS, 'path');
        path.setAttribute('d', pathD);
        svg.appendChild(path);
        return svg;
    }

    function makeDiamondSvg(color) {
        var NS = 'http://www.w3.org/2000/svg';
        var svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', color);
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        var rect = document.createElementNS(NS, 'rect');
        rect.setAttribute('x', '6');
        rect.setAttribute('y', '2');
        rect.setAttribute('width', '12');
        rect.setAttribute('height', '20');
        rect.setAttribute('rx', '2');
        rect.setAttribute('transform', 'rotate(45 12 12)');
        svg.appendChild(rect);
        return svg;
    }

    function makeDownloadSvg(color) {
        var NS = 'http://www.w3.org/2000/svg';
        var svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', color);
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        var path = document.createElementNS(NS, 'path');
        path.setAttribute('d', 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4');
        svg.appendChild(path);
        var polyline = document.createElementNS(NS, 'polyline');
        polyline.setAttribute('points', '7 10 12 15 17 10');
        svg.appendChild(polyline);
        var line = document.createElementNS(NS, 'line');
        line.setAttribute('x1', '12'); line.setAttribute('y1', '15');
        line.setAttribute('x2', '12'); line.setAttribute('y2', '3');
        svg.appendChild(line);
        return svg;
    }

    // -- Helpers --

    function getTitle() {
        return ((document.querySelector('h1') || {}).textContent || document.title).trim();
    }

    function getPageContext() {
        var root = document.querySelector('main') || document.body;
        var parts = [];

        var meta = document.querySelector('meta[name="description"]');
        if (meta && meta.content) parts.push(meta.content.trim());

        var headings = root.querySelectorAll('h2, h3');
        if (headings.length) {
            var outline = [];
            for (var i = 0; i < headings.length && i < 10; i++) {
                var t = headings[i].textContent.trim();
                if (t) outline.push('- ' + t);
            }
            if (outline.length) parts.push('Sections covered:\n' + outline.join('\n'));
        }

        var firstP = root.querySelector('p');
        if (firstP && firstP.textContent.trim()) {
            var pText = firstP.textContent.trim();
            if (pText.length > 400) pText = pText.substring(0, 400) + '...';
            parts.push('Intro: ' + pText);
        }

        return parts.join('\n\n');
    }

    function buildPrompt() {
        var title = getTitle();
        var context = getPageContext();
        var prompt = 'I\'m learning about "' + title + '".';
        if (context) prompt += '\n\nHere\'s what the page covers:\n\n' + context;
        prompt += '\n\nCan you explain the key concepts and help me understand how to apply them?';
        return prompt;
    }

    // -- Markdown download --

    function downloadMarkdown() {
        var title = getTitle();
        var url = window.location.href;
        var source = document.querySelector('main') || document.body;
        var clone = source.cloneNode(true);
        var widget = clone.querySelector('[data-ask-ai]');
        if (widget) widget.remove();
        var slug = window.location.pathname.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'page';

        function save(md) {
            var blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
            var a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = slug + '.md';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(a.href);
        }

        if (typeof TurndownService !== 'undefined') {
            var td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
            save('# ' + title + '\n\nSource: ' + url + '\n\n' + td.turndown(clone));
        } else {
            var script = document.createElement('script');
            script.src = 'https://unpkg.com/turndown@7.2.0/dist/turndown.js';
            script.onload = function () {
                var td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
                save('# ' + title + '\n\nSource: ' + url + '\n\n' + td.turndown(clone));
            };
            script.onerror = function () {
                save('# ' + title + '\n\nSource: ' + url + '\n\n' + (clone.textContent || '').trim());
            };
            document.head.appendChild(script);
        }
    }

    // -- Build and inject --

    function init() {
        var prompt = buildPrompt();
        var encoded = encodeURIComponent(prompt);

        // Container positions the dropdown
        var container = document.createElement('div');
        container.setAttribute('data-ask-ai', 'true');
        container.style.position = 'relative';

        // Trigger — styled as a nav text link with a small icon
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-haspopup', 'dialog');
        btn.title = 'Ask an AI about this page';

        var icon = makeSvg('M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', 'currentColor', 12);
        icon.setAttribute('aria-hidden', 'true');
        icon.setAttribute('focusable', 'false');
        btn.appendChild(icon);

        var label = document.createElement('span');
        label.textContent = 'ASK AI';
        btn.appendChild(label);

        btn.style.cssText = 'display:inline-flex;align-items:center;gap:0.25rem;' +
            'background:none;border:none;padding:0;cursor:pointer;' +
            'font:inherit;letter-spacing:inherit;text-transform:inherit;' +
            'color:' + COLORS.triggerColor + ';transition:color 0.15s;white-space:nowrap;';

        btn.addEventListener('mouseenter', function () { btn.style.color = COLORS.triggerHover; });
        btn.addEventListener('mouseleave', function () { btn.style.color = COLORS.triggerColor; });
        btn.addEventListener('focus', function () { btn.style.color = COLORS.triggerHover; });
        btn.addEventListener('blur', function () { btn.style.color = COLORS.triggerColor; });

        // Dropdown panel
        var panel = document.createElement('div');
        panel.style.cssText = 'display:none;position:absolute;top:calc(100% + 0.375rem);right:0;' +
            'background:' + COLORS.panelBg + ';color:' + COLORS.panelText + ';' +
            'border:1px solid ' + COLORS.panelBorder + ';border-radius:0.75rem;' +
            'box-shadow:' + COLORS.panelShadow + ';min-width:14rem;padding:0.375rem 0;' +
            'font-family:Inter,sans-serif;z-index:60;';

        // Menu items
        var items = [
            { label: 'Ask Claude', href: 'https://claude.ai/new?q=' + encoded, iconFn: function () { return makeSvg('M12 2 L14 8 L20 10 L14 12 L12 18 L10 12 L4 10 L10 8 Z', COLORS.iconColor); } },
            { label: 'Ask ChatGPT', href: 'https://chatgpt.com/?q=' + encoded, iconFn: function () { return makeSvg('M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', COLORS.iconColor); } },
            { label: 'Ask Gemini (copies prompt)', iconFn: function () { return makeDiamondSvg(COLORS.iconColor); }, action: function () {
                navigator.clipboard.writeText(prompt).then(function () {
                    window.open('https://gemini.google.com/app', '_blank', 'noopener,noreferrer');
                });
            }},
            { label: 'Download as markdown', iconFn: function () { return makeDownloadSvg(COLORS.iconColor); }, action: downloadMarkdown },
        ];

        var itemCss = 'display:flex;align-items:center;gap:0.625rem;padding:0.5rem 1rem;' +
            'color:' + COLORS.panelText + ';font-size:0.8125rem;cursor:pointer;' +
            'transition:background 0.12s;text-decoration:none;';

        items.forEach(function (item) {
            var el;
            if (item.href) {
                el = document.createElement('a');
                el.href = item.href;
                el.target = '_blank';
                el.rel = 'noopener noreferrer';
                el.style.cssText = itemCss;
                el.addEventListener('click', function () { closeDropdown(); });
            } else {
                el = document.createElement('button');
                el.type = 'button';
                el.style.cssText = itemCss + 'background:transparent;border:none;width:100%;font-family:inherit;text-align:left;';
                el.addEventListener('click', function () { closeDropdown(); item.action(); });
            }
            el.appendChild(item.iconFn());
            el.appendChild(document.createTextNode(item.label));
            el.addEventListener('mouseenter', function () { el.style.background = COLORS.itemHover; });
            el.addEventListener('mouseleave', function () { el.style.background = 'transparent'; });
            panel.appendChild(el);
        });

        // Toggle logic
        var isOpen = false;
        function openDropdown() {
            isOpen = true;
            panel.style.display = 'block';
            btn.setAttribute('aria-expanded', 'true');
        }
        function closeDropdown() {
            isOpen = false;
            panel.style.display = 'none';
            btn.setAttribute('aria-expanded', 'false');
        }
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (isOpen) { closeDropdown(); } else { openDropdown(); }
        });
        document.addEventListener('click', function (e) {
            if (isOpen && !container.contains(e.target)) closeDropdown();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && isOpen) { closeDropdown(); btn.focus(); }
        });

        container.appendChild(btn);
        container.appendChild(panel);

        // Inject into the desktop header nav (not mobile menu)
        var headerNav = document.querySelector('header nav:not(#mobile-menu)');
        if (headerNav) {
            headerNav.appendChild(container);
            // Derive trigger color from sibling link
            var sibling = headerNav.querySelector('a');
            if (sibling) {
                var c = window.getComputedStyle(sibling).color;
                btn.style.color = c;
                COLORS.triggerColor = c;
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
