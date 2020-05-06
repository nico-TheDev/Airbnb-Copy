let burger,mobilenav,closeBtn;


burger = document.querySelector('.burger');
mobilenav = document.querySelector('.mobile');
closeBtn = document.querySelector('.close');


burger.addEventListener('click',()=>{
    mobilenav.classList.add('active');
});


closeBtn.addEventListener('click',()=>{
    mobilenav.classList.remove('active');
});

