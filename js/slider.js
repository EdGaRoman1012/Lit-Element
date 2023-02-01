(function () {
    const sliders = [...document.querySelectorAll(".testimony__body")];
    const btnNext = document.querySelector("#next");
    const btnBack = document.querySelector("#before");
    let value;

    btnNext.addEventListener('click',()=>{
        changePosition(1);
    });

    btnBack.addEventListener('click',()=>{
        changePosition(-1);
    });
    const changePosition = (add) =>{
        const currenTestimony = document.querySelector(".testimony__body--show").dataset.id;
        value = Number(currenTestimony);
        value+= add;

        sliders[Number(currenTestimony)-1].classList.remove('testimony__body--show');
        if (value === sliders.length + 1 || value === 0){ 
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('testimony__body--show');
    }
})();