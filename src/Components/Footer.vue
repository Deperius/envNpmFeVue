<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <h3 class="footer__title">CoSh Coffee</h3>
        <p class="footer__desc">
          Small-batch roast, big flavor. Stop by for espresso, pastries, and good vibes.
        </p>
      </div>

      <nav class="footer__nav" aria-label="Footer navigation">
        <h4 class="footer__heading">Navigate</h4>
        <ul class="footer__list">
          <li><a href="#/" class="footer__link">Home</a></li>
          <li><a href="#/menu" class="footer__link">Menu</a></li>
          <li><a href="#/about" class="footer__link">About</a></li>
          <li><a href="#/contact" class="footer__link">Contact</a></li>
        </ul>
      </nav>

      <div class="footer__contact">
        <h4 class="footer__heading">Contact</h4>
        <address class="footer__address">
          123 Roast Ave.<br />
          Brewtown, BT 45678<br />
          <a href="tel:+1234567890" class="footer__link">+1 (234) 567-890</a><br />
          <a href="mailto:hello@coshcoffee.example" class="footer__link"
            >hello@coshcoffee.example</a
          >
        </address>
      </div>

      <div class="footer__social">
        <h4 class="footer__heading">Follow</h4>
        <div class="footer__icons">
          <a
            aria-label="Instagram"
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            class="icon"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM18.5 6a.75.75 0 1 1 0 1.5A.75.75 0 0 1 18.5 6z"
              />
            </svg>
          </a>
          <a
            aria-label="Facebook"
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            class="icon"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                d="M22 12a10 10 0 1 0-11.5 9.9v-7H8.5v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.3V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z"
              />
            </svg>
          </a>
          <a
            aria-label="Twitter"
            href="https://twitter.com"
            target="_blank"
            rel="noopener"
            class="icon"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                d="M22 5.9c-.6.3-1.2.5-1.8.6.6-.4 1-1 1.2-1.7-.6.4-1.3.7-2 .8A3.2 3.2 0 0 0 16.4 5c-1.7 0-3 1.5-2.6 3.2A9 9 0 0 1 3.2 4.3a3.2 3.2 0 0 0 1 4.2c-.5 0-1-.2-1.5-.4 0 1.6 1.1 3 2.6 3.3-.5.1-1 .1-1.6.1-.4 0-.8 0-1.2-.1.8 2.3 3 3.9 5.6 4A6.5 6.5 0 0 1 2 18c.8.6 1.8 1 2.8 1 6.8 0 10.6-5.8 10.6-10.8v-.5c.7-.5 1.3-1.1 1.8-1.9z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <small>© {{ new Date().getFullYear() }} CoSh Coffee — All rights reserved.</small>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, #2b2b2b 0%, #1f1f1f 100%);
  color: #f5f5f5;
  padding: 28px 16px 14px;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial;
}
.footer__inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 0.9fr;
  gap: 20px;
  align-items: start;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.footer__title {
  margin: 0 0 6px;
  font-size: 20px;
  letter-spacing: 0.4px;
}
.footer__desc {
  margin: 0;
  color: #d6d6d6;
  font-size: 14px;
  line-height: 1.4;
}
.footer__heading {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 600;
}
.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer__link {
  color: #d6d6d6;
  text-decoration: none;
  display: inline-block;
  margin: 6px 0;
  font-size: 14px;
}
.footer__link:hover {
  color: #ffffff;
  text-decoration: underline;
}
.footer__address {
  font-style: normal;
  color: #d6d6d6;
  font-size: 14px;
  line-height: 1.5;
}
.footer__icons {
  display: flex;
  gap: 10px;
}
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #d6d6d6;
  background: rgba(255, 255, 255, 0.03);
  width: 36px;
  height: 36px;
  border-radius: 6px;
  text-decoration: none;
}
.icon:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}
.footer__bottom {
  max-width: 1100px;
  margin: 12px auto 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
}

/* Responsive */
@media (max-width: 860px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr;
  }
  .footer__brand {
    grid-column: 1 / -1;
  }
}
@media (max-width: 520px) {
  .footer__inner {
    grid-template-columns: 1fr;
  }
  .footer__bottom {
    font-size: 12px;
  }
}
</style>
