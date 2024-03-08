const article = document.querySelector('article');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); 

button.addEventListener('click', () => { button} );

  if (input.value !='') {button} 

const li = document.createElement('li');   
const deleteButton = document.createElement('button');

article.innerHTML ='favchap';
article.innerHTML ='text', id='favchap'; 

li.innerHTML = input.value; 

deleteButton.textContent ='❌';

li.append(deleteButton); 
list.append(li);

deleteButton.addEventListener('click', function (){
    list.removeChild(li);
    input.focus();
});  

input.focus();
input.value = '';