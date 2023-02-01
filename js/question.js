(function(){
    const titleQues = [...document.querySelectorAll('.question__title')];

    titleQues.forEach((question)=>{
        question.addEventListener('click',()=>{
            let altura = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;
            addPadding.classList.toggle('questions__padding--add');
question.children[0].classList.toggle('questions__arrow--rotate');
            if (answer.clientHeight === 0) {
                altura = answer.scrollHeight;
            }
            answer.style.height= `${altura}px`;
        });
    });
})();