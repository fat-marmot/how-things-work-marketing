/* Shared chrome: footer injection, form handlers, active nav state.
   No build step — kept tiny on purpose. */

const FOOTER_HTML = `
<div class="ft-inner">
  <div class="ft-top">
    <div class="ft-news">
      <h3>One explainer a week.</h3>
      <p>A quiet newsletter — one topic, plainly explained, every Sunday. Unsubscribe in one tap.</p>
      <form class="newsletter-form" novalidate>
        <input type="email" placeholder="you@somewhere.com" aria-label="Email address" required/>
        <button type="submit">Subscribe</button>
      </form>
    </div>
    <div class="ft-col"><h4>Product</h4><ul>
      <li><a href="index.html#download">Download iOS</a></li>
      <li class="ft-coming"><a aria-disabled="true">Download Android <span class="soon">· soon</span></a></li>
      <li><a href="release-notes.html">Release notes</a></li>
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
      <div class="ft-socials">
        <a aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 3H22l-7.5 8.6L23 21h-6.8l-5.3-6.8L4.6 21H1.5l8-9.2L1 3h7l4.8 6.3L18.9 3zm-1.2 16h1.7L6.4 4.9H4.6z"/></svg></a>
        <a aria-label="RSS"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3a16 16 0 0116 16h-3a13 13 0 00-13-13V3zm0 6a10 10 0 0110 10h-3a7 7 0 00-7-7V9zm2 7a2 2 0 110 4 2 2 0 010-4z"/></svg></a>
        <a aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
      </div>
    </div>
  </div>`;

const footerSlot = document.querySelector('[data-site-footer]');
if (footerSlot) footerSlot.innerHTML = FOOTER_HTML;

const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
});

document.addEventListener('submit', e => {
  const form = e.target;
  if (form.matches('.newsletter-form')) {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.textContent = 'Subscribed ✓';
    btn.disabled = true;
  } else if (form.matches('.contact-form')) {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Sent ✓';
    btn.disabled = true;
  }
});
