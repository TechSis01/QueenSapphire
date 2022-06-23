//Navigation bar toggle code
let burgerBtn = document.querySelector('.burger')
let navigationLinks = document.querySelector('.nav-links')
let mainContent = document.querySelector('.main-content')

burgerBtn.addEventListener('click',function(){
    navigationLinks.classList.toggle('come')
    mainContent.classList.toggle('content')
})

let qty = document.querySelector('.qty')
///ADD TO CART FUNCTION
let add_to_Cart_Btn = document.querySelectorAll('.fa-plus')
let cartContainer = document.querySelector('.cart-container')
let quantity = document.querySelector('.quantity')
let count = 0;
for(let i=0;i < add_to_Cart_Btn.length;i++){
    add_to_Cart_Btn[i].addEventListener('click',addToCart)
}
//add to cart function
function addToCart(e){
   btn =  e.target
    btnParent = btn.parentElement
    btnGrandParent = btn.parentElement.parentElement
    let productImage = btnGrandParent.children[0].src
    let productName = btnParent.children[1].innerText
    let productPrice = btnParent.children[2].innerText
    let addedProduct = document.createElement('div')
    addedProduct.innerHTML +=  ` <div>
    <img src="${productImage}"width="80" >
    <p>${productName}</p>
    <p class="price">${productPrice}</p>
    </div>
    <div class="qty-changer">
        <div><i class="fa-solid fa-minus minus"></i></div>
        <div><p class="qty">0</p></div>
        <div><i class="fa-solid fa-circle-plus plus"></i></div>
 </div>
<div class="total-price">${productPrice}</div>
<button class="remove-btn">remove</button>`
const qty = document.querySelector('.qty')
addedProduct.classList.add('individual-cart-item')
cartContainer.append(addedProduct)

for(let i=0;i< plus.length; i++){
    plus[i].addEventListener('click', addQty)
}
for(let i = 0;i < minus.length ; i++){
    minus[i].addEventListener('click', reduceQty) 
}

}

//To increment the number when you click on plus or minus
let plus = document.querySelectorAll('.plus')



function addQty(){
    count++
    qty.innerText = count;
    console.log(count)
}

//to decrease the quantiy number when you click minus
let minus = document.querySelectorAll('.minus')
function reduceQty(){
    count = qty.innerText
    count--;
    qty.innerText = count;
    if(isNaN(qty.innerText)|| qty.innerText <= 0){
        qty.innerText = 0;
    }
}
