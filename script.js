// SEARCH BUTTON
let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm  = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

// CART BUTTON
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

// LOGIN BUTTON
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
};

// MENU BUTTON
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
};

// REMOVE ACTIVE ON SCROLL
window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

// LOAD PRODUCTS
document.addEventListener("DOMContentLoaded", async () => {
    let products = await API.getProducts();  // ensure API.getProducts() exists
    showProducts(products);
});

// SHOW PRODUCTS
function showProducts(products) {
    let box = document.getElementById("products-container");
    box.innerHTML = "";

    products.forEach(p => {
        box.innerHTML += `
            <div class="box">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}


/*let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
   searchForm.classList.toggle('active');
   shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
   navbar.classList.remove('active');

}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = ()=>
{
   shoppingCart.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   navbar.classList.remove('active');
}


let loginForm  = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = ()=>
{
   loginForm.classList.toggle('active');
   shoppingCart.classList.remove('active');
   searchForm.classList.remove('active');
   navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = ()=>
{
   navbar.classList.toggle('active');
   loginForm.classList.toggle('active');
   shoppingCart.classList.remove('active');
   searchForm.classList.remove('active');
}


window.onscroll = ()=>
{
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
   navbar.classList.remove('active');

}


/*document.addEventListener("DOMContentLoaded", async () => {
    let products = await API.getProducts();
    showProducts(products);
});

function showProducts(products){
    let box = document.getElementById("products-container");
    box.innerHTML = "";

    products.forEach(p=>{
        box.innerHTML += `
            <div class="card">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    let products = await API.getProducts();
    showProducts(products);
});

function showProducts(products){
    let box = document.getElementById("products-container");
    box.innerHTML = "";

    products.forEach(p=>{
        box.innerHTML += `
            <div class="box">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}*/

