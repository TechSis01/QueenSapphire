//Navigation bar toggle code
let burgerBtn = document.querySelector('.burger')
let navigationLinks = document.querySelector('.nav-links')
let heroSection = document.querySelector('main')

burgerBtn.addEventListener('click',function(){
    navigationLinks.classList.toggle('come')
    heroSection.classList.toggle('image')
})




//Carousel slide code
const slides = document.querySelector('#slides')
const items = document.querySelectorAll('.item')
const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')

leftBtn.addEventListener('click',function(){
    slides.scrollLeft -= 125;//This is the current position of the slides - 125px so it will move to the left
})
rightBtn.addEventListener('click',function(){
    slides.scrollLeft += 125;//The current position of the slide plus 125 px so it will move to the right
})

//Code to make carousel move by itsel
const maxScrollLeft = slides.scrollWidth - slides.clientWidth
function autoplay(){
    if(slides.scrollLeft > (maxScrollLeft -1)){
        slides.scrollLeft -= maxScrollLeft;//once the slides reaches the end, it will go back again and start moving again fromt the beginning
    }
    else{
        slides.scrollLeft +=2//this means the slides (carousel) will be moving to the right by 2px
    }
}
let play = setInterval(autoplay,50)//this ensures that this function happens every 50ms

for(let i = 0; i< items.length ; i++){
    items[i].addEventListener('mouseover',function(){
        clearInterval(play)
    })
    items[i].addEventListener('mouseout',function(){
        return play = setInterval(autoplay, 50)
    })
}

//CODE FOR OUR GIVEAWAY COUNTDOWN TIMER
let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')

const countdown = function (){
    const giveawayEndDate = new Date(2022,6, 25,12,33,44).getTime()
const currentDate = new Date().getTime()
//Difference between the two dates
const gap = giveawayEndDate - currentDate

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const textDay = Math.floor(gap / day)

const textHour = Math.floor((gap % day)/hour)

const textMin = Math.floor((gap%hour)/minute)

const textSecond = Math.floor((gap% minute )/ second)


days.innerText = textDay
hours.innerText = textHour
minutes.innerText = textMin
seconds.innerText = textSecond
}
setInterval(countdown,1000)


//FREQUENTLY ASKED QUESTIONS CODEE

const div1 = document.querySelectorAll('.div-1')
for(let i = 0; i < div1.length ; i++){
div1[i].addEventListener('mouseover',function(){
    div1[i].classList.toggle('drop')
})
div1[i].addEventListener('mouseout',function(){
    div1[i].classList.remove('drop')

})
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: "top",
    distance: "130px",
    duration: 2200,
    delay: 200,
    //     reset: true
});

sr.reveal(
    "#hero, #best-sellers, #discount, #promotions, #giveaway, #testimonials, #faq, #contact, #footer", {}
);
sr.reveal(
    ".perusian-jewelry,  #contact, .about, .products, .full-carousel-container, #best-sellers,.new-products, main-discount-container, .watches,.giveaway-box, ", {
        delay: 700,
    }
);
sr.reveal(".full-carousel-container, .main-discount-container, .giveaway-box", { interval: 500 });
sr.reveal(
    ".perusian-jewelry, .about, .footer-sections, ",{
        interval: 500,
    }
);

