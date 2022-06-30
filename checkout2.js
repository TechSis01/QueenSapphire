let trackingNum = Math.floor(Math.random()*60000)+1
let newModalContent = document.querySelector('.new-modal-content')
const placeOrderBtn = document.querySelector('#place-order')
let closeModalButton = document.querySelector('#x')
//Code to send tracking number
let paymentBtn = document.querySelector('#payment-btn')
let preloader = document.querySelector('#preloader')
let newModalContainer = document.querySelector('.new-modal-container')
window.addEventListener('load', function() {
    preloader.style.display = 'none'
    newModalContent.innerHTML = `
    <img src="./Images/Freebie_ Printable Thank You Card.jpg" alt="thank-you-note">
    <p>Thank you so much for shopping with Queen's Sapphire Jewelry. This is your tracking number <strong>${trackingNum}</strong> , Delivery Details will be sent to your email.Kindly check immediately.</p>
    `
    newModalContainer.style.display = 'block'
})
//close modal event
closeModalButton.addEventListener('click',closeModals)

//close modal function
function closeModals(){
    console.log('queen')
    newModalContainer.style.display = "none"
}
//close modal using window
window.addEventListener('click',function(e){
    if(e.target === newModalContainer){
        newModalContainer.style.display = "none"
        placeOrderBtn.disabled = true
    }
})

