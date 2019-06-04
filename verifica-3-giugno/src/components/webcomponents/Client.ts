import { LitElement, html, customElement, property } from 'lit-element';
import { User } from '@/User';
@customElement('my-client')
export class Client extends LitElement {


  @property()
  object!:any;
  image!:string;
  getImagefromUser(utente,photoList){
  photoList.forEach(element => {
      if(utente.id==element.id){
        this.image=(element.thumbnailUrl)
      }
    });
  }
  render(){
    this.object=JSON.parse(this.object);
    const utente=this.object.utente;
    const photoList=this.object.photoList;
    this.getImagefromUser(utente,photoList);
    return html`
      <style>
        .Client{
          background:white;
          margin: 16px 80px;
          display:flex;
          align-items:center;
        }
        .Client__photo{
          height:100px;
          display:flex;
          align-items:center;
        }
        .Client__photo > img {
          border-radius:100%;
          max-height:70px;
          margin-left:16px;
        }
        .Client__name{
          font-family:Arial, Helvetica, sans-serif;
          font-weight:bold;
          margin-left:16px;
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
          <img src="${this.image}">
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