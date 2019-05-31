import { LitElement, html, customElement, property } from 'lit-element';

@customElement('label-count')
export class LabelCount extends LitElement {
    @property()
    value!:number;
    
    _alert(e){
        console.log(e);
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
            <div class="LabelWrapepr__Label"> VALORE: </div>
            <div class="LabelWrapper__value"> ${this.value}
            <select class="LabelWrapper__select" name="currency">
            <option value="Euro" selected >EUR</option>
            <option value="Dollaro" >USD</option>
            <option value="BrithisPound">GBP</option>
            <option value="CanadianDollar">CAD</option>
            </select>
            
            </div>
        </div>
        `
    }
}