let slideStart = document.querySelector('.slide-start');
let slideEnd = document.querySelector('.slide-end');

const slide = new Swiper('.swiper',{
    direction: 'horizontal',
    autoplay: false,
    loop: false,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    breakpoints:{
        768:{
            slidesPerView:1,
            slidesPerGroup:1,
        },
        1024:{
            slidesPerView:2,
            slidesPerGroup:2,
        },
    }
})
slide.on('slideChange', function(){
    if(this.isEnd){
        slideEnd.classList.add('active');
        setTimeout(() => {
           slideEnd.classList.remove('active');
        }, 3000);
    }
    else{
        slideEnd.classList.remove('active');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    slideStart.classList.add('active');
    setTimeout(() => {
        slideStart.classList.remove('active');
    }, 3000);

    
})

let nextBtn = document.querySelector('.swiper-button-next');
