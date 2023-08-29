window.addEventListener('load', function(){
    const loading = document.querySelector('.loader');
    loading.classList.add('loader--hidden');
    loading.addEventListener('transitionend', function(){
        document.body.removeChild(loading);
    });
});
