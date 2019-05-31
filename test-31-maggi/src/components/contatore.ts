import { LitElement, html, customElement, property } from 'lit-element';
const increment = require("./add").default

@customElement('my-contatore')
export class Contatore extends LitElement {
  
    @property()
    public count:number=0;
    
    add(){
        this.count=increment(this.count)
        this._valueChanged();
    }
    sub(){
        this.count--;
        this._valueChanged();
    }
    _valueChanged(){
        this.dispatchEvent(new CustomEvent('valueChange',{detail:this.count}))
    }
    render(){
        return html`
        <style>
            .CounterWrapper{
                display:flex;
                flex-direction:column;
                align-items:center;
            }
            button{
                background:#42b983;
                border-color:#42b983;
            }
        </style>
        <div class="CounterWrapper">
            <button @click="${this.add}"> + </button>
            <div class="CounterWrapper__value"> ${this.count} </div>
            <button @click="${this.sub}" > - </button>
        </div>
        `
    }
}