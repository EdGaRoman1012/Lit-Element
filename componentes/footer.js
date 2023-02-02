import {LitElement, html} from 'lit-element';
import { estilosGenerales } from './estilos';

class Footer extends LitElement {
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
 <footer class="footer">
        <section class="footer__container container">
            <nav class="nav nav--footer">
                <h2 class="footer__title">Curso Lit Element</h2>
                <ul class="nav__link nav__link--footer">
                    <li class="nav__items"><a href="#" class="nav__links">Inicio</a></li>
                    <li class="nav__items"><a href="#" class="nav__links">Acerca de</a></li>
                    <li class="nav__items"><a href="#" class="nav__links">Contacto</a></li>
                    <li class="nav__items"><a href="#" class="nav__links">Blog</a></li>
                </ul>
            </nav>

            <form action="https://formspree.io/f/xrgverbn"
            method="POST" class="footer__form">
                <h2 class="footer__nawsletter">
                    Suscribete
                </h2>
                <div class="footer__inputs">
                    <input type="email" placeholder="Email:" class="footer__input" required name="email">
                    <input type="submit" value="Registrate" class="footer__submit">
                </div>
            </form>
        </section>

        <section class="footer__copy container">
            <div class="footer__social">
                <a href="#" class="footer__icons"><img src="images/facebook.svg" class="footer__img"></a>
                <a href="#" class="footer__icons"><img src="images/twitter.svg" class="footer__img"></a>
                <a href="#" class="footer__icons"><img src="images/youtube.svg" class="footer__img"></a>
            </div>
            <h3 class="footer__copyright">Derechos Reservados &copy; Edgar Román</h3>
        </section>
    </footer>
        `;
    }

}

customElements.define('wc-footer', Footer);