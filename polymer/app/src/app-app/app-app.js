import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../my-el/my-el';
import '../_element/_element.js';
import '@polymer/paper-button/paper-button.js';


/**
 * @customElement
 * @polymer
 */
class AppApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'app-app'
      }
    };
  }
}

window.customElements.define('app-app', AppApp);
