import { LitElement, html, customElement, property } from 'lit-element';
import { User } from '@/User';
@customElement('my-client')
export class Client extends LitElement {


  @property()
  object!:any;

  render(){
    this.object=JSON.parse(this.object);
    const utente=this.object.utente;
    const image=this.object.image;
    return html`
      <style>
        .Client{
          background:white;
          margin: 32px 80px;
          display:flex;
          align-items:center;
        }
        .Client__photo{
          height:100px;
        }
        .Client__photo > img {
          border-radius:100%;
          max-height:70px;
        }
        .Client__name{
          font-family:Arial, Helvetica, sans-serif;
          font-weight:bold;
        }
        .Client__chevron{
          margin-left:auto;
          margin-right:24px;
          justify-self:flex-end;
          color:rgba(0,0,0,0.3);
        }
      </style>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
      <div class="Client">
        <div @click="${() => {console.log(this.object)}}" class="Client__photo">
          <img src="${image}">
        </div>
        <div class="Client__name">
          ${utente.name}
        </div>
        <div class="Client__chevron">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
      
    `;
  }
}