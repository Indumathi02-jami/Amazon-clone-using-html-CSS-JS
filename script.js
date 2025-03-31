const imgs = document.querySelectorAll('.hearder-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n=0;

function changeslide(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeslide();


prev_btn.addEventListener('click', (e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeslide();
}
)

next_btn.addEventListener('click', (e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeslide();
}
)

const scrollcontainer = document.querySelectorAll('.products');

for(const i of scrollcontainer){
    i.addEventListener('wheel',(e) =>{
        e.preventDefault();
        i.scrollLeft += e.deltaY;
    })
}