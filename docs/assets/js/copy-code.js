/* Copy-to-clipboard for <pre> code blocks */
(function () {
    'use strict';

    document.querySelectorAll('pre').forEach(function (pre) {
        var wrapper = pre.parentElement;

        // Make the wrapper position:relative so the button can anchor to it.
        // All code blocks use a <div class="border ..."> wrapper around <pre>.
        if (wrapper && wrapper.tagName === 'DIV') {
            wrapper.style.position = 'relative';
        } else {
            pre.style.position = 'relative';
            wrapper = pre;
        }

        var btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Copy code to clipboard');
        btn.textContent = 'Copy';

        btn.addEventListener('click', function () {
            var code = pre.querySelector('code');
            var text = (code || pre).textContent;

            navigator.clipboard.writeText(text).then(function () {
                btn.textContent = 'Copied!';
                btn.classList.add('copied');
                setTimeout(function () {
                    btn.textContent = 'Copy';
                    btn.classList.remove('copied');
                }, 1500);
            }, function () {
                // Fallback for older browsers / insecure contexts
                var ta = document.createElement('textarea');
                ta.value = text;
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                try {
                    document.execCommand('copy');
                    btn.textContent = 'Copied!';
                    btn.classList.add('copied');
                    setTimeout(function () {
                        btn.textContent = 'Copy';
                        btn.classList.remove('copied');
                    }, 1500);
                } catch (_) { /* silent */ }
                document.body.removeChild(ta);
            });
        });

        wrapper.appendChild(btn);
    });
})();
