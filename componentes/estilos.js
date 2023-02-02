import { css } from 'lit-element';

export const estilosGenerales = css `

*{
    margin: 0;
    box-sizing: border-box;
}
 html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  body{
    font-family: 'Poppins', sans-serif;
  }
¿
  body {
    margin: 0;
  }

  main {
    display: block;
  }

h1 {
    font-size: 2em;
    margin: 0;
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  a {
    background-color: transparent;
  }
  
  
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  
  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  button,
  input { /* 1 */
    overflow: visible;
  }

  button,
  select { /* 1 */
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
 
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  progress {
    vertical-align: baseline;
  }
  
  textarea {
    overflow: auto;
  }
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  details {
    display: block;
  }
  
  summary {
    display: list-item;
  }
  
  template {
    display: none;
  }
  
  [hidden] {
    display: none;
  }

:host{
    --pading-container: 100px 0;
    --color-title: #001a49;
}


.container{
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding: var(--pading-container);
}
.hero{
    width: 100%;
    height: 100vh;
    min-height: 600px;
    max-height: 800px;
    position: relative;
    display: grid;
    grid-template-rows: 100px 1fr;
    color: #fff;
}
.hero::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, #0000008c 0%, #0000008c 100% ), url("../images/computer.jpg");
    background-size: cover;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 95%, 0 80%);
    z-index: -1;
}
/* Nav */

.nav{
    --pading-container: 0;
    height: 100%;
    display: flex;
    align-items: center;
}
.nav__title{
    font-weight: 300;
}
.nav__items{
    list-style: none;
}
.nav__link{
    margin-left: auto;
    padding: 0;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 2em;
}
.nav__links{
    color: #fff;
    text-decoration: none;
}
.nav__img{
    display: block;
    width: 30px;
}
.nav__menu{
    margin-left: auto;
    cursor: pointer;
    display: none;
}
.nav__close{
    display: var(--show, none);
}

/* Hero container */
.hero__container{
    max-width: 800px;
    --padding-container:0;
    display: grid;
    grid-auto-rows: max-content;
    align-content: center;
    gap:1em;
    padding-bottom: 100px;
    text-align: center;
}
.hero__title{
    font-size: 3rem;
}
.hero__paragraph{
    margin-bottom: 20px;
}
.cta{
    display: inline-block;
    background-color: #2091f9;
    justify-self: center;
    color: #fff;
    text-decoration: none;
    padding: 13px 30px;
    border-radius: 32px;
}
/*  About */
.about{
    text-align: center; 
}
.subtitle{
    color: var(--color-title);
    font-size: 2rem;
    margin-bottom: 25px;
}
.about__paragraph{
    line-height: 1.7;
}
.about__main{
    padding-top: 80px;
    display: grid;
    width: 90%;
    margin: 0 auto;
    gap:1em;
    overflow: hidden;
    grid-template-columns: repeat(auto-fit, minmax(260px, auto));
}
.about__icons{
    display: grid;
    gap: 1em;
    justify-items: center;
    width: 260px;
    overflow: hidden;
    margin: 0 auto;
}
.about__icon{
    width: 40px;
}

/* Knowledge */

.knowledge{
    background-color: #e5e5f7;
background-image:  radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
background-size: 20px 20px;
background-position: 0 0,10px 10px;
overflow: hidden;
}
.knowledge__container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    align-items: center;
}
.knowledge__picture{
    max-width: 500px;
}
.knowledge__paragraph{
    line-height: 1.7;
    margin-bottom: 15px;
    text-align: justify;
}
.knowledge__img{
    width: 100%;
    display: block;
}
/* Price */
.price{
    text-align: center;
}
.price__table{
    padding-top: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5em;
    justify-content: space-evenly;
    align-items: center;

}
.price__element{
    background-color: #e5e5f7;
    text-align: center;
    border-radius: 10px;
    width: 330px;
    padding: 40px;
    --color-plan: #696871;
    --color-price: #1d293f;
    --bg-cta: #fff;
    --color-cta: #5454d4;
    --color-items: #696871;
}
.price__name{
color: var(--color-plan);
margin-bottom: 15px;
font-weight: 300;
}
.price__price{
    font-size: 2.5rem;
    color:var(--color-price);
}
.price__items{
    margin-top: 35px;
    display: grid;
    gap: 1em;
    font-weight: 300;
    font-size: 1.2rem;
    margin-bottom: 50px;
    color: var(--color-items);
}
.price__cta{
    background-color: var(--bg-cta);
    display: block;
    padding: 20px 0;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    box-shadow: 0 0 1px rgba(0,0,0,.5);
    color: var(--color-cta);
}
.price__element--best{
    width: 370px;
    padding: 60px 40px;
    background-color: #ff7143;
    --color-plan: rgb(255 255 255 / 75%);
    --color-price: #fff;
    --bg-cta: #9f3919;
    --color-cta: #fff;
    --color-items: #fff;
}

/* testimony */

.testimony{
    background-color: #e5e5f7;
}

.testimony__container{
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    gap: 1em;
    align-items: center;
}
.testimony__body{
    display: grid;
    grid-template-columns: 1fr max-content;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
    grid-column: 2/3;
    grid-row: 1/2;
    opacity: 0;
    pointer-events: none;
}
.testimony__body--show{
    pointer-events: unset;
    opacity: 1;
    transition: opacity 1.5s ease-in-out;
} 

.testimony__img{
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 30%;
}
.testimony__texts{
    max-width: 700px;
}
 .testimony__arrow{
    width: 90%;
    cursor: pointer;
 }
 .testimony__course{
    background-color: royalblue;
    color: #fff;
    display: inline-block;
    padding: 5px;
 }

 /* Questions */
 .questions{
    text-align: center;  
 }
 .questions__container{
    display: grid;
    gap: 2em;
    padding-top: 50px;
    padding-bottom: 100px;
 }
 .questions__padding{
    padding: 0;
    transition: padding .3s;
    border:1px solid #0000008c;
    border-radius: 6px;
 }
 .questions__padding--add{
    padding-bottom: 30px;
 }
 .questions__answer{
    padding: 0 30px 0;
    overflow: hidden;
 }

 .question__title__one, .question__title__two, .question__title__three{
    display: flex;
    padding: 30px 0 30px;
    font-size: 20px;
    cursor: pointer;
    color: var(--color-title);
    justify-content: space-between;
    text-align: left;
 }
 .question__arrow{
    border-radius: 50%;
    background-color: var(--color-title);
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    margin-left: 10px;
    transition: transform .3s;
 }
 .questions__arrow--rotate{
    transform: rotate(180deg);
 }
 .question__show{
    text-align: left;
    height: 0;
    transition: height .3s;
 }
 .questions__img{
    display: block;
 }

 .questions__copy{
    width: 60%;
    margin: 0 auto;    
    margin-bottom: 30px;
 }
 /* Footer */

 .footer{
    background-color: #1d293f;
 }
 .footer__title{
    font-weight: 300;
    font-size: 2rem;
    margin-bottom: 30px;
 }
 .footer__title, .footer__nawsletter{
    color: #ffffff;
 }
 .footer__container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding-bottom: 60px;
 }
 .nav--footer{
    padding-bottom: 20px;
    display: grid;
    gap: 1em;
    grid-auto-flow: row;
    height: 100%;
 }
 .nav__links--footer{
    display: flex;
    margin: 0;
    margin-right: 20px;
    flex-wrap: wrap;
 }

 .footer__inputs{
    margin-top: 10px;
    display: flex;
    overflow: hidden;
 }
 .footer__input{
    background-color: #fff;
    height: 50px;
    display: block;
    padding-left: 10px;
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
    border: none;
    margin-right: 16px;
 }

 .footer__submit{
    margin-left: auto;
    display: inline-block;
    height: 50px;
    padding: 0 20px;
    background-color: #2091f9;
    border: none;
    font-size: 1rem;
    color: #fff;
    border-radius: 6px;
    cursor: pointer;
 }
 .footer__copy{
    --padding-container:30px 0;
    text-align: center;
    color: #fff;
 }
 .footer__copyright{
    font-weight: 300;
 }
 .footer__icons{
    /* display: inline-flex; */
    margin-bottom: 10px;
}
.footer__img{
    width: 30px;
}

/* Media Queries */
@media (max-width:800px) {
    .nav__menu{
        display: block;
    }
    .nav__link--menu{
        position: fixed;
        background-color: #000;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        z-index: 100;
        opacity: 0;
        pointer-events: none;
        transition: .7s opacity;
    }
    .nav__link--show{
        --show: block;
        opacity: 1;
        pointer-events: unset;
    }
    .nav__close{
        position: absolute;
        top: 30px;
        right: 30px;
        width: 30px;
        cursor: pointer;
    }
    .hero__title{
        font-size: 2.5rem;
    }
    .about__main{
        gap:2em;
    }
    .about__icons:last-of-type{
        grid-column: 1/-1;
    }
    .knowledge__container{
        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr;
        gap: 3em;
        text-align: center;
    }
    .knowledge__picture{
        grid-row: 1/2;
        justify-self: center;
    }
    .testimony__container{
        grid-template-columns: 30px 1fr 30px;
    }
    .testimony__body{
        grid-template-columns: 1fr;
        grid-template-rows: max-content max-content;
        gap: 3em;
        justify-items: center;
    }
    .testimony__img{
        width: 200px;
        height: 200px;
    }
    .questions__copy{
        width: 100%;
    }
    .footer__container{
        flex-wrap: wrap;
    }
    .nav--footer{
        width: 100%;
        justify-items: center;
    }
    .nav__link--footer{
        width: 100%;
        justify-content: space-evenly;
        margin: 0;
    }
    .footer__form{
        width: 100%;
        justify-content: space-evenly;

    }
    .footer__input{
        flex: 1;
    }
}
@media (max-width:600px){
    .hero__title{
        font-size: 2rem;
    }
    .hero__paragraph{
        font-size: 1rem;
    }
    .subtitle{
        font-size: 1.8rem;
    }
    .price__element{
        width: 90%;
    }
    .price__element--best{
        width: 90%;
    }
    .price__price{
        font-size: 2rem;
    }
    .testimony__container{
        grid-template-columns: 28px 1fr 28px;
        gap: .9em;
    }
    .testimony__arrow{
        width: 100%;
    }
    .testimony__course{
        margin-top: 15px;
    }
    .testimony{
        --padding-container: 60px 0;
    }
    .question__title__one, .question__title__two, .question__title__three{
        font-size: 1rem;
    }
    .footer__title{
        justify-self: start;
        margin: 15px;
    }
    .footer__inputs{
        flex-wrap: wrap;
    }
    .footer__input{
        flex-basis: 100%;
        margin: 0;
        margin-bottom: 16px;
    }
    .footer__submit{
        margin: 0;
        width: 100%;
    }
    .nav__link--footer{
        justify-content: space-between;
    }
    .nav--footer{
        padding-bottom: 46px;
    }
}
`;
    