/* Shared chrome: footer injection, active nav state.
   No build step — kept tiny on purpose. */

const FOOTER_HTML = `
<div class="ft-inner">
  <div class="ft-top">
    <div class="ft-col"><h4>Product</h4><ul>
      <li><a href="index.html#download">Download iOS</a></li>
      <li class="ft-coming"><a aria-disabled="true">Download Android <span class="soon">· soon</span></a></li>
    </ul></div>
    <div class="ft-col"><h4>About</h4><ul>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="privacy-terms.html">Privacy &amp; terms</a></li>
    </ul></div>
  </div>
  <div class="ft-bottom">
    <span class="wm mono-ink"><span class="word">HOW</span><span><span class="brace">{</span><span class="slot">things</span><span class="brace">}</span></span><span class="word">WORK</span></span>
    <div class="ft-end">
      <span>© 2026 · howthingswork.app</span>
    </div>
  </div>`;

const footerSlot = document.querySelector('[data-site-footer]');
if (footerSlot) footerSlot.innerHTML = FOOTER_HTML;

const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
});
