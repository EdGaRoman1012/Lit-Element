import {LitElement, html} from 'lit-element';
import { estilosGenerales } from './estilos';

class conocimiento extends LitElement {
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
<section class="knowledge">
            <div class="knowledge__container container">
                <div class="knowledge__texts">
                    <h2 class="subtitle">Curso completo de CSS3. Dominando CSS de una vez</h2>
                    <p class="knowledge__paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste fugit voluptatum amet
                        animi, illum itaque laborum aliquid laboriosam consectetur ad, quia natus ipsam facilis nulla
                        placeat rem? Consequatur, sequi.
                    </p>
                    <a href="#" class="cta">Entra al curso</a>
                </div>
                <figure class="knowledge__picture">
                    <img src="images/macbook.png" alt="" class="knowledge__img">
                </figure>
            </div>
        </section>
        `;
    }

}

customElements.define('wc-conocimiento', conocimiento);