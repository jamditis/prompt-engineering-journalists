/* ask-ai.js -- self-contained "Ask an AI about this" dropdown */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var title = ((document.querySelector('h1') || {}).textContent || document.title).trim();
        var url = window.location.href;

        // Build context from page content
        var contextParts = [];
        var meta = document.querySelector('meta[name="description"]');
        if (meta && meta.content) contextParts.push(meta.content.trim());

        var headings = mainEl.querySelectorAll('h2, h3');
        if (headings.length) {
            var outline = [];
            for (var i = 0; i < headings.length && i < 10; i++) {
                var hText = headings[i].textContent.trim();
                if (hText) outline.push('- ' + hText);
            }
            if (outline.length) contextParts.push('Sections covered:\n' + outline.join('\n'));
        }

        var firstP = mainEl.querySelector('p');
        if (firstP && firstP.textContent.trim()) {
            var pText = firstP.textContent.trim();
            if (pText.length > 400) pText = pText.substring(0, 400) + '...';
            contextParts.push('Intro: ' + pText);
        }

        var prompt = 'I\'m learning about "' + title + '".';
        if (contextParts.length) prompt += '\n\nHere\'s what the page covers:\n\n' + contextParts.join('\n\n');
        prompt += '\n\nCan you explain the key concepts and help me understand how to apply them?';

        var encodedPrompt = encodeURIComponent(prompt);

        // -- Determine injection point: first child of <main> --
        var mainEl = document.querySelector('main');
        if (!mainEl) return;

        // -- Build the component --
        // No wrapper div — container is injected directly into an existing layout row
        var container = document.createElement('div');
        container.setAttribute('data-ask-ai', 'true');
        container.style.cssText = 'position:relative;display:inline-block;';

        // Trigger button
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Ask an AI about this page');
        btn.title = 'Ask an AI about this page';
        btn.style.cssText = 'background:#334155;color:#a3e635;border:none;border-radius:50%;' +
            'width:2rem;height:2rem;padding:0;cursor:pointer;display:inline-flex;align-items:center;' +
            'justify-content:center;transition:opacity 0.15s,transform 0.15s;flex-shrink:0;';

        // Sparkle icon (static SVG constant — no user input)
        btn.appendChild(createSvg('M12 2 L14 8 L20 10 L14 12 L12 18 L10 12 L4 10 L10 8 Z', '#a3e635'));

        btn.addEventListener('mouseenter', function () { btn.style.opacity = '0.85'; btn.style.transform = 'scale(1.1)'; });
        btn.addEventListener('mouseleave', function () { btn.style.opacity = '1'; btn.style.transform = 'scale(1)'; });

        // Dropdown panel
        var dropdown = document.createElement('div');
        dropdown.style.cssText = 'display:none;position:absolute;top:calc(100% + 0.375rem);right:0;' +
            'background:#1e293b;color:#f1f5f9;border:1px solid #334155;border-radius:0.75rem;' +
            'box-shadow:0 10px 25px rgba(0,0,0,0.3);min-width:14rem;padding:0.375rem 0;' +
            'font-family:Inter,sans-serif;z-index:41;';

        // Menu items config
        var items = [
            {
                label: 'Ask Claude',
                href: 'https://claude.ai/new?q=' + encodedPrompt,
                iconPath: 'M12 2 L14 8 L20 10 L14 12 L12 18 L10 12 L4 10 L10 8 Z',
                iconType: 'path'
            },
            {
                label: 'Ask ChatGPT',
                href: 'https://chatgpt.com/?q=' + encodedPrompt,
                iconPath: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
                iconType: 'path'
            },
            {
                label: 'Ask Gemini',
                href: 'https://gemini.google.com/app?q=' + encodedPrompt,
                iconType: 'diamond'
            },
            {
                label: 'Download as markdown',
                action: 'download',
                iconType: 'download'
            }
        ];

        items.forEach(function (item) {
            var menuItem;
            var baseStyle = 'display:flex;align-items:center;gap:0.625rem;padding:0.5rem 1rem;' +
                'color:#f1f5f9;font-size:0.8125rem;cursor:pointer;transition:background 0.12s;';

            if (item.action === 'download') {
                menuItem = document.createElement('button');
                menuItem.type = 'button';
                menuItem.style.cssText = baseStyle +
                    'background:transparent;border:none;width:100%;font-family:inherit;text-align:left;';
                menuItem.addEventListener('click', function () {
                    closeDropdown();
                    downloadMarkdown(title.trim(), url);
                });
            } else {
                menuItem = document.createElement('a');
                menuItem.style.cssText = baseStyle + 'text-decoration:none;';
                menuItem.href = item.href;
                menuItem.target = '_blank';
                menuItem.rel = 'noopener noreferrer';
                menuItem.addEventListener('click', function () {
                    closeDropdown();
                });
            }

            menuItem.addEventListener('mouseenter', function () { menuItem.style.background = '#334155'; });
            menuItem.addEventListener('mouseleave', function () { menuItem.style.background = 'transparent'; });

            // Build icon with DOM methods
            var icon;
            if (item.iconType === 'diamond') {
                icon = createDiamondSvg('#67e8f9');
            } else if (item.iconType === 'download') {
                icon = createDownloadSvg('#67e8f9');
            } else {
                icon = createSvg(item.iconPath, '#67e8f9');
            }

            menuItem.appendChild(icon);
            menuItem.appendChild(document.createTextNode(item.label));
            dropdown.appendChild(menuItem);
        });

        // -- Toggle logic --
        var isOpen = false;

        function openDropdown() {
            isOpen = true;
            dropdown.style.display = 'block';
            btn.setAttribute('aria-expanded', 'true');

            // Prevent overflow on small screens
            requestAnimationFrame(function () {
                var rect = dropdown.getBoundingClientRect();
                if (rect.right > window.innerWidth - 8) {
                    dropdown.style.left = 'auto';
                    dropdown.style.right = '0';
                }
            });
        }

        function closeDropdown() {
            isOpen = false;
            dropdown.style.display = 'none';
            btn.setAttribute('aria-expanded', 'false');
            dropdown.style.left = '0';
            dropdown.style.right = 'auto';
        }

        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (isOpen) { closeDropdown(); } else { openDropdown(); }
        });

        document.addEventListener('click', function (e) {
            if (isOpen && !container.contains(e.target)) { closeDropdown(); }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && isOpen) { closeDropdown(); btn.focus(); }
        });

        // -- Assemble --
        container.appendChild(btn);
        container.appendChild(dropdown);

        // Inject into the header nav alongside existing nav links
        var headerNav = document.querySelector('header nav');
        if (headerNav) {
            headerNav.appendChild(container);
        } else {
            var header = document.querySelector('header');
            if (header) {
                var headerFlex = header.querySelector('[class*="flex"][class*="items-center"]');
                if (headerFlex) headerFlex.appendChild(container);
            }
        }
    });

    // -- SVG helper: single path icon --
    function createSvg(pathD, color) {
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
        path.setAttribute('d', pathD);
        svg.appendChild(path);
        return svg;
    }

    // -- SVG helper: chevron down --
    function createChevronSvg(color) {
        var NS = 'http://www.w3.org/2000/svg';
        var svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('width', '14');
        svg.setAttribute('height', '14');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', color);
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        var polyline = document.createElementNS(NS, 'polyline');
        polyline.setAttribute('points', '6 9 12 15 18 9');
        svg.appendChild(polyline);
        return svg;
    }

    // -- SVG helper: diamond (rotated rect) --
    function createDiamondSvg(color) {
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

    // -- SVG helper: download arrow --
    function createDownloadSvg(color) {
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
        line.setAttribute('x1', '12');
        line.setAttribute('y1', '15');
        line.setAttribute('x2', '12');
        line.setAttribute('y2', '3');
        svg.appendChild(line);
        return svg;
    }

    // -- Download as markdown --
    function downloadMarkdown(title, url) {
        var source = document.querySelector('main') || document.body;
        var sourceHtml = source.cloneNode(true);
        // Remove the ask-ai widget from the clone so it doesn't appear in the download
        var widget = sourceHtml.querySelector('[data-ask-ai]');
        if (widget) widget.remove();

        // Slug from URL path
        var slug = window.location.pathname.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'page';

        function doConvert(el, title, url, slug) {
            var td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
            var md = '# ' + title + '\n\nSource: ' + url + '\n\n' + td.turndown(el);

            triggerDownload(md, slug);
        }

        function triggerDownload(content, slug) {
            var blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
            var a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = slug + '.md';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(a.href);
        }

        if (typeof TurndownService !== 'undefined') {
            doConvert(sourceHtml, title, url, slug);
        } else {
            var script = document.createElement('script');
            script.src = 'https://unpkg.com/turndown@7.2.0/dist/turndown.js';
            script.onload = function () { doConvert(sourceHtml, title, url, slug); };
            script.onerror = function () {
                // Fallback: plain text extraction (uses pre-cloned sourceHtml without widget)
                var text = sourceHtml.textContent || '';
                var md = '# ' + title + '\n\nSource: ' + url + '\n\n' + text.trim();
                triggerDownload(md, slug);
            };
            document.head.appendChild(script);
        }
    }
})();
