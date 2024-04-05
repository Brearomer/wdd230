const darkmode = document.getElementById('#darkButton'); 
const main = document.querySelector('main');


darkmode.addEventListener('click',() =>{
    main.classList.toggle('dark');
    if (darkmode.textContent.includes("dark")){
        main.style.background = '#000';
        main.style.color ='#fff';
        darkmode.textContent ="light";

    } else{
        main.style.background ="#eee";
        main.style.color ="#000";
        darkmode.textContent ="light";
    }

    
    
});