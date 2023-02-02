import {LitElement, html} from 'lit-element';
import { estilosGenerales } from './estilos';

class Testimonio extends LitElement {
    static get properties() {
        return {

        }
    }

    constructor() {
        super();
    }

    static get styles() {
        return [estilosGenerales];
    }

    get btnArrow(){
        const sliders = [...this.renderRoot.querySelectorAll(".testimony__body")];
    const btnNext = this.renderRoot.querySelector("#next");
    const btnBack = this.renderRoot.querySelector("#before");
    let value;

    btnNext.addEventListener('click',()=>{
        changePosition(1);
    });

    btnBack.addEventListener('click',()=>{
        changePosition(-1);
    });
    const changePosition = (add) =>{
        const currenTestimony = this.renderRoot.querySelector(".testimony__body--show").dataset.id;
        value = Number(currenTestimony);
        value+= add;

        sliders[Number(currenTestimony)-1].classList.remove('testimony__body--show');
        if (value === sliders.length + 1 || value === 0){ 
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('testimony__body--show');
    }
    }
    arrow(){
        this.btnArrow;
    }

    render() {
        return html`
        <section class="testimony">
            <div class="testimony__container container">
                <img src="images/leftarrow.svg" @click="${this.arrow}" class="testimony__arrow" id="before">

                <section class="testimony__body testimony__body--show" data-id="1">
                    <div class="testimony__texts">
                        <h2 class="subtitle">Softtek - <span class="testimony__course">Empresa de Desarollo</span></h2>
                        <p class="testimony__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at,
                            sequi veritatis blanditiis nesciunt nobis distinctio nam pariatur incidunt consequuntur
                            veniam sint vel, asperiores dolore, quas nulla quae commodi natus?</p>
                    </div>
                    <figure class="testimony__picture">
                        <img src="images/face.jpg" class="testimony__img">
                    </figure>
                </section>
                <section class="testimony__body" data-id="2">
                    <div class="testimony__texts">
                        <h2 class="subtitle">BBVA - <span class="testimony__course">Empresa de Desarollo</span></h2>
                        <p class="testimony__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at,
                            sequi veritatis blanditiis nesciunt nobis distinctio nam pariatur incidunt consequuntur
                            veniam sint vel, asperiores dolore, quas nulla quae commodi natus?</p>
                    </div>
                    <figure class="testimony__picture">
                        <img src="images/face2.jpg" class="testimony__img">
                    </figure>
                </section>
                <section class="testimony__body" data-id="3">
                    <div class="testimony__texts">
                        <h2 class="subtitle">TESVG - <span class="testimony__course">Empresa de Desarollo</span></h2>
                        <p class="testimony__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at,
                            sequi veritatis blanditiis nesciunt nobis distinctio nam pariatur incidunt consequuntur
                            veniam sint vel, asperiores dolore, quas nulla quae commodi natus?</p>
                    </div>
                    <figure class="testimony__picture">
                        <img src="images/face3.jpg" class="testimony__img">
                    </figure>
                </section>
                <img src="images/rightarrow.svg" @click="${this.arrow}" class="testimony__arrow" id="next">
            </div>
        </section>
        `;
    }

}

customElements.define('wc-testimonio', Testimonio);