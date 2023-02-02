import {LitElement, html} from 'lit-element';
import { estilosGenerales } from './estilos';

class about extends LitElement {
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

    render() {
        return html`
<section class="container about">
            <h2 class="subtitle">¿Que aprenderas?</h2>
            <p class="about__paragraph">
                Prueba de componentes sin Lit Element
            </p>
            <div class="about__main">
                <article class="about__icons">
                    <img src="images/shapes.svg" class="about__icon" alt="">
                    <h3 class="about__title">Css Layouts</h3>
                    <p class="about__paragrah">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo
                        pariatur debitis veniam?</p>
                </article>
                <article class="about__icons">
                    <img src="images/paint.svg" class="about__icon" alt="">
                    <h3 class="about__title">Animaciones</h3>
                    <p class="about__paragrah">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo
                        pariatur debitis veniam?</p>
                </article>
                <article class="about__icons">
                    <img src="images/code.svg" class="about__icon" alt="">
                    <h3 class="about__title">SASS</h3>
                    <p class="about__paragrah">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo
                        pariatur debitis veniam?</p>
                </article>
            </div>
        </section>
        `;
    }

}

customElements.define('wc-about', about);