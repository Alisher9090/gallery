let anim = document.querySelectorAll('.swiper-slide img');


for(let animlinkas of anim){
    animlinkas.addEventListener('click',()=>{
        if(animlinkas.classList.contains('swiper-slide')){
            animlinkas.classList.add('anim_on');
            animlinkas.classList.remove('swiper-slide');
        }
        else{
            animlinkas.classList.add('swiper-slide');
            animlinkas.classList.remove('anim_on');
        }
});
}