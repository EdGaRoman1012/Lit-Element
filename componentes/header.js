import {LitElement, html, css} from 'lit-element';
import {estilosGenerales} from './estilos.js';

class header extends LitElement {
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

    menuHamburguesa(){
        const openBtn = this.renderRoot.querySelector(".nav__menu");
        const menu = this.renderRoot.querySelector(".nav__link");
        const close = this.renderRoot.querySelector(".nav__close");

        openBtn.addEventListener('click',()=>{
            menu.classList.add("nav__link--show");
        });

        close.addEventListener('click',()=>{
            menu.classList.remove("nav__link--show");
        });
    }

    render() {
        return html`
        <header class="hero">
        <nav class="nav container">
            <div class="nav__logo">
                <h2 class="nav__title">Curso Con Lit</h2>
            </div>
            <ul class="nav__link nav__link--menu">
                <li class="nav__items">
                    <a href="#" class="nav__links">Inicio</a>
                </li>
                <li class="nav__items">
                    <a href="#" class="nav__links">Acerca de</a>
                </li>
                <li class="nav__items">
                    <a href="#" class="nav__links">Contacto</a>
                </li>
                <li class="nav__items">
                    <a href="#" class="nav__links">Blog</a>
                </li>
                <img src="images/close.svg" alt="" class="nav__close">
            </ul>
            <div class="nav__menu" @click="${this.menuHamburguesa}">
                <img src="images/menu.svg" alt="" class="nav__img">
            </div>
        </nav>
        <section class="hero__container container">
            <h1 class="hero__title">Pagina Con Web Components</h1>
            <p class="hero__paragraph">Esta pagina se realizo con el fin de posteriormente hacerla con Web Components
                con la libreria Lit-Element</p>
            <a href="#" class="cta">Comienza ahora</a>
        </section>
    </header>
        `;
    }

}

customElements.define('wc-header', header);