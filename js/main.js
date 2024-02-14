const btnO = document.querySelector('.btn-open');
const btnR = document.querySelector('.btn-reset');
const paper = document.querySelector('.paper');
const open = document.querySelector('.open');


btnO.addEventListener('click', ()=>{
    open.style.transform = 'rotateX(180deg)';

    setTimeout(()=>{
        paper.style.transform = 'translateY(-25px)';
        open.style.zIndex = '-1';

        // bucle para corazones
        for(i = 0; i<=2; i++){
            let img = document.createElement('img');
            img.setAttribute('src', './assets/corazon.png');

            paper.appendChild(img)

            setTimeout(()=>{
                paper.removeChild(img);
            }, 2500)
        }


    },1000)
})

btnR.addEventListener('click', ()=>{
    setTimeout(()=>{
        paper.style.transform = 'translateY(0px)';
        open.style.zIndex = '0';
    })
    open.style.transform = 'rotateX(0deg)';
})

