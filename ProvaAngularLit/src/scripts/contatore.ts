import { LitElement, html, property } from 'lit-element';
const increment = require("./add").default
const sub = require("./sub").default
export class Contatore extends LitElement {
  
    @property()
    public count:number=0;
    
    add(){
        this.count=increment(this.count)
        this._valueChanged();
    }
    sub(){
        this.count=sub(this.count);
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
            <div class="CounterWrapper_title"> Modifica Importo </div>
            <button @click="${this.add}"> + </button>
            <div class="CounterWrapper__value"> ${this.count} </div>
            <button @click="${this.sub}" > - </button>
        </div>
        `
    }
}