//Navigation bar toggle code
let burgerBtn = document.querySelector('.burger')
let navigationLinks = document.querySelector('.nav-links')
let heroSection = document.querySelector('main')

burgerBtn.addEventListener('click',function(){
    burgerBtn.classList.toggle('burger-turn')
    navigationLinks.classList.toggle('come')
    heroSection.classList.toggle('image')
})


