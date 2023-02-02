import {LitElement, html} from 'lit-element';
import { estilosGenerales } from './estilos';

class Precio extends LitElement {
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
        <section class="price container">
            <h2 class="subtitle">Obten el plan perfecto para aprender</h2>
            <div class="price__table">
                <div class="price__element">
                    <p class="price__name">FlexBox</p>
                    <h3 class="price__price">Free</h3>
                    <div class="price__items">
                        <p class="price__features">FlexBox</p>
                        <p class="price__features">Layouts</p>
                        <p class="price__features">Reponsive</p>
                    </div>
                    <a href="#" class="price__cta">Empieza ahora</a>
                </div>
                <div class="price__element price__element--best">
                    <p class="price__name">Grid</p>
                    <h3 class="price__price">$30/mes</h3>
                    <div class="price__items">
                        <p class="price__features">Grid</p>
                        <p class="price__features">Implicit Grid</p>
                        <p class="price__features">Reponsive</p>
                    </div>
                    <a href="#" class="price__cta">Empieza ahora</a>
                </div>
                <div class="price__element">
                    <p class="price__name">Animaciones</p>
                    <h3 class="price__price">$40/mes</h3>
                    <div class="price__items">
                        <p class="price__features">Animation</p>
                        <p class="price__features">Transition</p>
                        <p class="price__features">Render Website</p>
                    </div>
                    <a href="#" class="price__cta">Empieza ahora</a>
                </div>
            </div>
        </section>
        `;
    }

}

customElements.define('wc-precio', Precio);