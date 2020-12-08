let btnOpen = document.querySelector('.open')
let container = document.querySelector('.container')
let closeBtn = document.querySelector('.close')

btnOpen.addEventListener('click',function(){
    container.classList.add('show-nav')
})
closeBtn.addEventListener('click',function(){
    container.classList.remove('show-nav')
})