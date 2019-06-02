import { LitElement, html, customElement, property } from 'lit-element';


export class LabelCount extends LitElement {
    @property()
    value!:number;
    
    cambiovaluta(e){
        this.dispatchEvent(new CustomEvent('cambioValuta',{detail:e.target.value}))
    }

    render(){
        return html`
        <style>
            .LabelWrapper{
                display:flex;
            }
            .LabelWrapper__select{
                background:rgb(51, 107, 88);
                color:white;
            }
        </style>
        <div class="LabelWrapper" >
            <div class="LabelWrapper__Label"> VALORE: </div>
            <div class="LabelWrapper__value"> ${this.value}
            <select class="LabelWrapper__select" name="currency" @change="${e => this.cambiovaluta(e)}" >
            <option value="Euro" selected >EUR</option>
            <option value="Dollaro" >USD</option>
            <option value="BritishPound">GBP</option>
            <option value="CanadianDollar">CAD</option>
            </select>
            </div>
            <div class="LabelWrapper__annotation"> <-- Cambio valuta </div>
        </div>
        `
    }
}