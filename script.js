
const body=document.querySelector('body'); 
const cont=document.querySelector('.sun');
const moon=document.querySelector('.moon');
const container=document.querySelector('.sun-moon-container')

const btn=document.querySelector('.theme-toggle-button');
btn.addEventListener('click',function()
{ 
 container.classList.toggle('moon');
 //moon.style.opacity=1;
 body.classList.toggle('dark');
})