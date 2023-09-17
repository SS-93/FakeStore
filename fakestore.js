
const navbar = document.querySelector ('.navbar')

const display = document.querySelector('.display') 




let apiURL = 'https://fakestoreapi.com/products'



 fetch (apiURL) 
 .then (response => response.json())

.then (data => displayCards(data))

   .catch (err => console.error(err));


    //create variable 
// select element document.create element
// inner text
//append child 

    


// Obtain Data:

// Given the global variables are created with assigned values.
// Then create an async function called "fakeStore".
// And this function will expect a parameter called "endpoint".
// Given the fakeStore function has been framed.
// Then write an await response that fetches from the provided api.
// And this fetch should use the global api url variable.
// And incorporate the parameter endpoint.

// async function fakeStore (endpoint){
//     let response = await fetch (apiURL + endpoint)
//     let storeItems = await response.json ()
//     console.log(storeItems)

// } // route

// fakeStore ('products') // result 
function displayCards (data)  {

    let htmlContent = "";

    data.forEach(product => {
        htmlContent += `
        <div class="product-box">
            <img src="${product.image}" class="product-image">
            <h2>${product.title}</h2>
            <div class="description-container">
                <p class="product-description">${product.description}</p>
                <div class="dropdown-container">
                    <span class="dropdown-arrow">&#x25BC;</span>
                    <div class="dropdown-content">
                        <p>${product.description}</p>
                    </div>
                </div>
            </div>
            <div class="price-container">
                <span class="product-price"> $${product.price}</span>
                <span class="p-dropdown-arrow"> &#x25BC;</span>
            </div>
            <button class="add-to-cart"> Add To Cart </button>
        </div>`;
    });

    // Set the innerHTML of the display area with the constructed cards
    document.querySelector('.grid-container').innerHTML = htmlContent;
}

let cart = [];

function submitToCart ([]) {
    cart.push(item);

}

document.querySelectorAll('.product-box').forEach((cardElement) => {
    const button = cardElement.querySelector('.add-to-cart');
    const title = cardElement.querySelector('h2').innerText;
    const cost = cardElement.querySelector('.product-price').innerText.slice(1); // removing the $ sign

    button.onclick = function() {
        const item = {
            title: title,
            cost: parseFloat(cost),
            quantity: 1
        };
        submitToCart(item);
    };
});
    
// const productBoxes = document.querySelectorAll ('product-box');



// 1. Create new Element(s)
// 2. edit that new element
// - adding text
// -changing styling
// 3. add the element to the webpage

// data.forEach((product, index)=> {

//     if(productBoxes[index]) {
//         const box = productBoxes[index]
//         let title =
// box.querySelector('h2'),innerText = product.title;  
// document.body.appendChild  (title)}
// })


// let subHeading = document.createElement('h3');

// subHeading.innerText = 'what should I do before leaving town?';
// subHeading.style.color = 'pink';

// document.body.appendChild(subHeading);

const fakeStore = async (endpoint) => {
    let response = await fetch ('https://fakestoreapi.com/products' + endpoint)
    let storeItems = await response.json();
    console.log(storeItems)
     displayCards (storeItems)

}

// fakeStore();
window.onload = function () {

    fakeStore ('/');
};



// const categoryDisplay = document.querySelector ('.nav-categories');

//  categoryDisplay.addEventListener('click', function() {
//     fetchProductsByCategory ("electronics");
//  })


 function fetchProductsByCategory (category) {
    const apiURL = `https://fakestoreapi.com/products/category/`
    fetch(apiURL)
    .then(response => response.json())
    .then(data => displayCards(data))
    .catch(err => console.error(err));
}

let electronics = document.getElementById(`electronics`)

electronics.addEventListener('click',(e) => {
fakeStore(`/category/electronics`)

})

let jewelery = document.getElementById('jewelry')

jewelery.addEventListener('click', (e) =>{
    fakeStore(`/category/jewelery`)
})

let mensClothing = document.getElementById('mens-clothing')

mensClothing.addEventListener('click', (e) =>{
    fakeStore(`/category/men's clothing`)
})

let womensClothing = document.getElementById('womens-clothing')

womensClothing.addEventListener('click', (e) =>{
    fakeStore(`/category/women's clothing`)
})

const addToCart = document.querySelectorAll ('cart')
addToCart.addEventListener('click', (e)=>{
    submitToCart ()
})

// categories.forEach(category => {
//     category.addEventListener('click', function(event) {
//         event.preventDefault();

//         let chosenCategory = event.currentTarget.innerText.toLowerCase();
        
//         fetch(`https://fakestoreapi.com/products/category/${chosenCategory}`)
//             .then(response => response.json())
//             .then(data => displayCards(data))
//             .catch(err => console.error(err));
//     });
// });







// categories.forEach(category => {
//     category.addEventListener ('click', function (event) {
//         event.preventDefault();

//         let category = event.currentTarget.innerText.toLowerCase()

// fetch ('https://fakestoreapi.com/products/categories')
// .then(response => response.json())
// .then(data => displayCards(data))

// data.forEach(product => {
//     htmlContent += ''

// })

// .catch(err => console.error(err))
//         // let endpoint = event.currentTarget.getAttribute ('data-endpoint');
//         // fakeStore(endpoint); })
//     });


// }) category display did not work. 