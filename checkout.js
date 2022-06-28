const placeOrderBtn = document.querySelector('#place-order')
const modalContainer = document.querySelector('.modal-container')
const closeModalBtn = document.querySelector('#x')


//open modal event
placeOrderBtn.addEventListener('click',openModal)

let inputField = document.querySelectorAll('.general-input')

//open modal function
function openModal(){
    for(let i=6; i < inputField.length;i++){
        let inputFieldvalue = inputField[i].value
        let errorMessage = document.createElement('span')
        errorMessage.innerHTML = '<em> Please fill the form to proceed</em>'
        errorMessage.style.color = "red"
        if(inputFieldvalue.length === 0){
            modalContainer.style.display = 'none'
            placeOrderBtn.insertAdjacentElement('afterend',errorMessage)
            
        }
        else{
            modalContainer.style.display = 'block'
        }
    }
}


//close modal event
closeModalBtn.addEventListener('click',closeModal)

//close modal function
function closeModal(){
    modalContainer.style.display = "none"
}

//close modal using window
window.addEventListener('click',function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = "none"
    }
})

//FORM VALIDATION
//first Name
let firstName = document.querySelector('#firstName')
let firstNameError = document.querySelector('#nameError')
firstName.addEventListener('keyup',function(){
    let name = firstName.value 
    if(name.length === 0){
        firstNameError.innerHTML = 'invalid name'
        firstNameError.style.color = 'red'
        return false;
    }
    else{
        firstNameError.innerHTML =  '<i class="fa-solid fa-circle-check"></i>'
        firstNameError.classList.add('errors')
    }
})

//Last name
let lastName = document.querySelector('#lastname')
let lastNameError = document.querySelector('#lastnameError')
lastName.addEventListener('keyup',function(){
    let surName = lastName.value
    if(surName.length === 0){
        lastNameError.innerHTML = 'invalid name'
        lastNameError.style.color = 'red'
        return false;
    }
    else{
        lastNameError.innerHTML =  '<i class="fa-solid fa-circle-check"></i>'
        lastNameError.classList.add('errors')
    }
})

//COUNTRY NAME validation
let country = document.querySelector('#country')
let countryError = document.querySelector('#countryError')
country.addEventListener('keyup',function(){
    let countryName = country.value
    if(countryName.length === 0){
        countryError.innerHTML = 'Please fill blank'
        countryError.style.color = 'red'
        return false;
    }
    else{
        countryError.innerHTML =  '<i class="fa-solid fa-circle-check"></i>'
        countryError.classList.add('errors')
    }
})

//Street validation
let street = document.querySelector('#address')
let streetError = document.querySelector('#streetError')
street.addEventListener('keyup',function(){
    let streetName = street.value
    if(streetName.length === 0){
        streetError.innerHTML = 'Please fill blank'
        streetError.style.color = 'red'
        return false;
    }
    else{
        streetError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        streetError.classList.add('errors')
    }
})

//CITY VALIDATION
let town = document.querySelector('#town')
let townError = document.querySelector('#townError')
town.addEventListener('keyup',function(){
    let townName = town.value
    if(townName.length === 0){
        townError.innerHTML = 'Please fill blank'
        townError.style.color = 'red'
        return false;
    }
    else{
        townError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        townError.classList.add('errors')
    }
})


//PHONE NUMBER VALIDATION
let number = document.querySelector('#phone')
let numberError = document.querySelector('#phoneError')
number.addEventListener('keyup',function(){
    let phoneNum =number.value
    if(phoneNum.length === 0){
        numberError.innerHTML = 'Please fill blank'
        numberError.style.color = 'red'
        return false;
    }
   
    else if(isNaN(phoneNum)){
        numberError.innerHTML = 'invalid number'
        numberError.style.color = 'red'
        return true;
    }
    else if(phoneNum.length > 11){
        numberError.innerHTML = 'invalid number'
        numberError.style.color = 'red'
        return false;
    }
    else{
        numberError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        numberError.style.color = 'green'
        return true;
    }
})

//EMAIL VALIDATION
let email = document.querySelector('#email')
let emailError = document.querySelector('#emailError')
email.addEventListener('keyup',function(){
    let userEmail = email.value
    if(userEmail.length == 0){
        emailError.innerHTML = 'invalid email'
        emailError.style.color = 'red'
        return false;
    }
    else if(!userEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'invalid email'
        emailError.style.color = 'red'
        return false;
    }
    else{
        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        emailError.style.color = 'green'
        return true;
    }
})

//expiry date validation
let cardError = document.querySelector('#card-error')
let cardNumber = document.querySelector('#card-num')
cardNumber.addEventListener('keyup',function(){
    let cardNumDetails = cardNumber.value
    if(cardNumDetails.length === 0){
        cardError.innerHTML = 'invalid'
        cardError.style.color = 'red'
    }
    else if(isNaN(cardNumDetails)){
        cardError.innerHTML = 'invalid'
        cardError.style.color = 'red'
        return true;
    }
    else if(cardNumDetails.trim()){
        cardError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        cardError.style.color = 'green'
    }
    else{
        cardError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        cardError.style.color = 'green'
    }
})