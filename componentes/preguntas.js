import { LitElement, html } from 'lit-element';
import { estilosGenerales } from './estilos';

class Preguntas extends LitElement {
    static get properties() {
        return {
            verInfo: {}
        }
    }

    constructor() {
        super();
    }

    static get styles() {
        return [estilosGenerales];
    }

    get verTexto(){
        
    }

    verOne(e) {
        const titleQues = this.renderRoot.querySelector('.question__title__one');

            let altura = 0;
            let answer = titleQues.nextElementSibling;
            let addPadding = titleQues.parentElement.parentElement;
            addPadding.classList.toggle('questions__padding--add');
            titleQues.children[0].classList.toggle('questions__arrow--rotate');
            if (answer.clientHeight === 0) {
                altura = answer.scrollHeight;
            }
            answer.style.height = `${altura}px`;
    }

    verTwo(e) {
        const titleQues = this.renderRoot.querySelector('.question__title__two');

            let altura = 0;
            let answer = titleQues.nextElementSibling;
            let addPadding = titleQues.parentElement.parentElement;
            addPadding.classList.toggle('questions__padding--add');
            titleQues.children[0].classList.toggle('questions__arrow--rotate');
            if (answer.clientHeight === 0) {
                altura = answer.scrollHeight;
            }
            answer.style.height = `${altura}px`;
    }

    verThree(e) {
        const titleQues = this.renderRoot.querySelector('.question__title__three');

            let altura = 0;
            let answer = titleQues.nextElementSibling;
            let addPadding = titleQues.parentElement.parentElement;
            addPadding.classList.toggle('questions__padding--add');
            titleQues.children[0].classList.toggle('questions__arrow--rotate');
            if (answer.clientHeight === 0) {
                altura = answer.scrollHeight;
            }
            answer.style.height = `${altura}px`;
    }

    render() {
        return html`
<section class="questions container">
    <h2 class="subtitle">Preguntas Frecuentes</h2>
    <p class="question__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde molestias labore,
        dolore impedit eos ut, maiores expedita nesciunt quidem ad commodi. Quas qui est dolorem nam, deleniti nostrum
        sed officiis.</p>
    <section class="questions__container">
        <article class="questions__padding">
            <div class="questions__answer">
                <h3 class="question__title__one" @click="${this.verOne}"> ¿Qué es Lit Element?<span
                        class="question__arrow">
                        <img src="../images/arrow.svg" alt="" class="questions__img">
                    </span></h3>
                <p class="question__show">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati magnam aperiam
                    consequuntur provident voluptas fugiat, eveniet soluta eligendi sit perspiciatis atque quaerat culpa
                    repellat libero rem possimus animi exercitationem.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quibusdam unde vero neque delectus
                    debitis nemo veniam voluptatibus ex impedit officia quia sequi iusto perspiciatis, ratione nesciunt
                    veritatis harum nobis.
                </p>
            </div>
        </article>
        <article class="questions__padding">
            <div class="questions__answer">
                <h3 class="question__title__two" @click="${this.verTwo}">¿Qué es Customs Elements?<span class="question__arrow">
                        <img src="images/arrow.svg" alt="" class="questions__img">
                    </span></h3>
                <p class="question__show">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati magnam aperiam
                    consequuntur provident voluptas fugiat, eveniet soluta eligendi sit perspiciatis atque quaerat culpa
                    repellat libero rem possimus animi exercitationem.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quibusdam unde vero neque delectus
                    debitis nemo veniam voluptatibus ex impedit officia quia sequi iusto perspiciatis, ratione nesciunt
                    veritatis harum nobis.
                </p>
            </div>
        </article>
        <article class="questions__padding">
            <div class="questions__answer">
                <h3 class="question__title__three" @click="${this.verThree}">¿Qué es un API?<span class="question__arrow">
                        <img src="images/arrow.svg" alt="" class="questions__img">
                    </span></h3>
                <p class="question__show">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati magnam aperiam
                    consequuntur provident voluptas fugiat, eveniet soluta eligendi sit perspiciatis atque quaerat culpa
                    repellat libero rem possimus animi exercitationem.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quibusdam unde vero neque delectus
                    debitis nemo veniam voluptatibus ex impedit officia quia sequi iusto perspiciatis, ratione nesciunt
                    veritatis harum nobis.
                </p>
            </div>
        </article>
    </section>

    <div class="questions__offer">
        <h2 class="subtitle">¿Estas listo para aprender Lit Element?</h2>
        <p class="questions__copy">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corrupti nesciunt debitis maxime nemo
            tempore aliquid minima dolor soluta, vel alias tenetur cupiditate vero quidem officiis libero perspiciatis
            non pariatur.
        </p>
        <a href="#" class="cta">Aprende Ahora</a>
    </div>
</section>
        `;
    }

}

customElements.define('wc-preguntas', Preguntas);