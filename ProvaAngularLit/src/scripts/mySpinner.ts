// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
export class Spinner extends LitElement {

  render(){
    return html`
      <p>A paragraph</p>
    `;
  }
}
// Register the new element with the browser.