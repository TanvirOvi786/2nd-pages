var nav = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
        nav.classList.add('bg-dark');
    }else{
        nav.classList.remove('bg-dark', 'shadow')
    }
});