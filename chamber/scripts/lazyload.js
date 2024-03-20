document.addEventListener("DOMContentLoaded", function()){
    const lazyImages = document.querySelectorAll('.lazy-img');
}

const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            const img = entry.target;
            const src = img.getAttribute('data-src');

            img.setAttribute('src', src);
            img.classList.remove('lazy-img');
            observer.unobserve(img);
        }
    });

});