//Navigation bar toggle code
let burgerBtn = document.querySelector('.burger')
let navigationLinks = document.querySelector('.nav-links')
let mainContent = document.querySelector('.main-content')

burgerBtn.addEventListener('click', function () {
    navigationLinks.classList.toggle('come')
    mainContent.classList.toggle('content')
})

//Show shopping cart
let totalCart = document.querySelector('.total-cart')
let cartIcon = document.querySelector('.cart-icon')
cartIcon.addEventListener('click',function(){
    totalCart.classList.toggle('show-cart')
})

//close cart on mobile view using the close button
let closeBtn = document.querySelector('#close')
closeBtn.addEventListener('click',function(){
    totalCart.classList.toggle('show-cart')
})

///ADD TO CART FUNCTION
let add_to_Cart_Btn = document.querySelectorAll('.fa-plus')
let cartContainer = document.querySelector('.cart-container')
let qty = document.querySelectorAll('.qty')
let individualCartItem = document.querySelectorAll('.individual-cart-item')
let grandTotal = document.querySelector('.Gtotal')
let cartItemNum = document.querySelector('.cart-item-number')


//select the element that holds all the  products
const productGrid = document.querySelector('.m')

//function to render each product on the page
function renderProduct(){
    //products is the name of the array containing all our products that is on sales.
    //product refers to each individual object in the array, the object represents each product and its peculiar information
    //each of the products have a unique ID used to identify them, from 0-14
    products.forEach((product)=>{
        productGrid.innerHTML += ` <div class="item">
        <img src="${product.imagesrc}" alt="bridalnecklace">
        <div class="item-details">
            <p  class="jewelry-type">${product.title}</p>
            <h5>${product.Description}</h5>
            <p>-&#x24;${product.price}</p>
            <i class="fa-solid fa-plus "onclick ="addToCart(${product.id})"></i>
        </div>
    </div> `
    })
}
//The onclick event has a function that has an argument of the ID of that product clicked on eg,if i click on a product that has an id of 3,this is how the onclick event looks like
//onclick="addToCart(3)",so it specifically telling us, you have clicked on product number 3.
//Now nothing will show inside your m div(div that is supposed to contain all our product)until you invote the renderproduct function,just as we have done below;
renderProduct()



//Empty array of cart that will contain all our added items
let cart = JSON.parse(localStorage.getItem("CART")) || [];//if nothing is in my localstorage my storage , the cart is empty.if something is in the local storage it will pass the value in.
updateCart()
//Create Add to cart function
function addToCart(id){//This place is like saying addToCart(3),I am assuming we are clicking on product number 3
    //check if product already appears in the cart
    if(cart.some((item)=>item.id === id)){//so the some method, looks at the cart array, and then it takes a look at each item in the cart array.The cart array wil contain all the items we have added to our cart.
        changeNumberOfUnits('plus',id)//so it checks the id of each item , and if any of the item id is equal to the id we clicked,it will not push that item into the cart anymore instead it will increase the quantity of that
    }//that item using the changeNumberOfUnits() function , which takes in two parameters(plus= meaning we want to add 1 to the former quantity, and id= the item that matches the Id that we have clicked)
   
   /*But if that is not the case, and the item isn't already in the cart. That means we want to add the new item clicked inside the cart.
   So we create a new variable called 'item'. Item is going to represent each of the products added into our cart array.
    So we use the find()method. What it does is that , it checks the products array, looks at each of the product id and if it matches the one we have clicked,it its going to add that product to the 
    cart array using the push() method. The spread operator is also used to add the number of unit to each of the items in the cart array*/
    else {
        const item = products.find((product)=> product.id === id)
        cart.push({
             ...item,//at this point i am spreading the object from the product.js page. so its a duplicate and I added number of units to each product
             numberOfUnits:1,
        })
        console.log(cart)
    }
  updateCart()// this function willadd new item to cart, update the quantity of cart items, also update the subtotal(This will show in your HTML not just running in the background)
}

//Upddate cart Function
function updateCart(){
    renderCartItems()//This is the function that will show the product you have selected inside your cart container
    renderSubTotal()//This function is going to multiply the quantity of product with the price of the product of each of these products and then take the sum of everything to give us the grand total

    //save cart to local storage
    localStorage.setItem("CART",JSON.stringify(cart))
}

//renderCart Items
function renderCartItems(){
    cartContainer.innerHTML = ""//CLEAR CART ELEMENT
    cart.forEach((item)=>{
      
        cartContainer.innerHTML += ` <div class="individual-cart-item">
        <div>
            <img src="${item.imagesrc}" >
            <p>${item.Description}</p>
        </div>
       <div class="qty-changer">
             <div class="subtraction"><span class="fa-solid fa-minus minus" onclick = "changeNumberOfUnits('minus',${item.id})"></span></div>
             <div><p class="qty">${item.numberOfUnits}</p></div>
             <div class="addition"><i class="fa-solid fa-circle-plus plus" onclick = "changeNumberOfUnits('plus',${item.id})"></i></div>
       </div>
        <div class="total-price">$${item.price}</div>
        <button class="remove-btn" onclick = "removeItems(${item.id})">remove</button>
    </div>`
    })
}

//remove items from cart
function removeItems(id){
     cart = cart.filter((item)=> item.id !== id
    )
    updateCart()
}

//change quantity of items
function changeNumberOfUnits(action,id){
    cart = cart.map((item)=>{

        let oldNumberOfUnits = item.numberOfUnits
        if(item.id === id){
            if(action === 'minus' && oldNumberOfUnits > 1){
                oldNumberOfUnits--
            }else if(action === 'plus' ){
                oldNumberOfUnits++
            }
        }
        return {
            ...item,
            numberOfUnits:oldNumberOfUnits,
        }
    })
    updateCart()
}

//calculate and render subtotal

function renderSubTotal(){
    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((item)=>{
        totalPrice += item.price * item.numberOfUnits
        totalItems += item.numberOfUnits
    })
    grandTotal.innerHTML =`<p class="Gtotal">Grand Total :$${totalPrice}</p>`
     cartItemNum.innerHTML =`<span class="cart-item-number">${totalItems}</span>`
}
/*for (let i = 0; i < add_to_Cart_Btn.length; i++) {
    add_to_Cart_Btn[i].addEventListener('click', addToCart)
}



let count = 0;
//add to cart function
function addToCart(e) {
    btn = e.target
    btnParent = btn.parentElement
    btnGrandParent = btn.parentElement.parentElement
    let productImage = btnGrandParent.children[0].src
    let productName = btnParent.children[1].innerText
    let productPrice = btnParent.children[2].innerText
    let addedProduct = document.createElement('div')
    addedProduct.innerHTML += ` <div>
    <img src="${productImage}"width="80" >
    <p>${productName}</p>
    <p class="price">${productPrice}</p>
    </div>
    <div class="qty-changer">
        <div class="subtraction"><i class="fa-solid fa-minus minus"></i></div>
        <div><p class="qty">0</p></div>
        <div class="addition"><i class="fa-solid fa-circle-plus plus"></i></div>
 </div>
<div class="total-price">${productPrice}</div>
<button class="remove-btn">remove</button>`
  
    addedProduct.classList.add('individual-cart-item')
    cartContainer.append(addedProduct)

   
}


for(let i=0;i < individualCartItem.length;i++){
    individualCartItem[i].addEventListener('click', function(e){
       
        const target = e.target;
        console.log('amaya')
        if(target.matches('div')){
            for(let i=0;i<qty.length;i++){
                count++;
            qty[i].innerText = count;
            }
            
        }
    })
}


//To increment the number when you click on plus or minus
/*let plus = document.querySelectorAll('.plus')

document.querySelector(".cart-container").addEventListener("click", updateQty);
var a = document.querySelectorAll('fa-plus plus');
var b = document.querySelectorAll('fa-minus minus');

function updateQty(e) {
    let container = document.querySelector(".cart-container")
    container.addEventListener("click", function (e) {
        a.forEach(function(item){
            if (e.target.class === item.classList) {
                var count = item.previousElementSibling.innerText;
                count++;
                item.previousElementSibling.innerText = count
                return;
            }
            
        })
        b.forEach(function(item) {
            if (e.target.class === item.classList) {
                count--;
                item.nextElementSibling.innerText = count
                return;
            }
        })
    })
}
  /*ount++
    qty.innerText = count;
    console.log(count)*/
//})

//to decrease the quantiy number when you click minus
//let minus = document.querySelectorAll('.minus')
//function reduceQty() {
  //  count = qty.innerText
   // count--;
  //  qty.innerText = count;
  //  if (isNaN(qty.innerText) || qty.innerText <= 0) {
 //       qty.innerText = 0;
    //}
//}
/*for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', addQty)
    }
    for (let i = 0; i < minus.length; i++) {
        minus[i].addEventListener('click', reduceQty)
    }*/