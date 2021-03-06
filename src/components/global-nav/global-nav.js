import './scss/global-nav.scss';
import GlobalNavStaticTpl from './tpl/global-nav-static.hbs';

/**
 * APP: All
 * renders global nav
 * @export
 * @class GlobalNav
 */
export default class GlobalNav {
  /**
   * @param {*} options contains data to render component.
   */
  constructor() {
    let template = GlobalNavStaticTpl();

    this.globalNav = document.getElementById('GlobalNav');

    this.globalNav.innerHTML = template;

    this.globalNavBtn = document.querySelector('.global-nav-button');
    this.hamburgerMenu = document.querySelector('.hamburger-menu');

    this.globalNavBtn.addEventListener('click', evt =>
      this.onGlobalNavCtaClick(evt)
    );
  }

  /**
   * open/close hamburger menu
   * @param {*} evt
   */
  onGlobalNavCtaClick() {
    this.globalNavBtn.classList.toggle('active');
    this.hamburgerMenu.classList.toggle('active');

    if (this.hamburgerMenu.classList.contains('active')) {
      document.body.classList.add('globalnav-open');
    } else {
      document.body.classList.remove('globalnav-open');
    }
  }
}
