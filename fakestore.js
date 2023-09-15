
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
    let response = await fetch ('https://fakestoreapi.com/products')
    let storeItems = await response.json();
    console.log(storeItems)
     displayCards (storeItems)
}

fakeStore();
window.onload = function () {

    fakeStore ('products');
};



const categories = document.querySelectorAll ('.nav-categories');

categories.forEach(category => {
    category.addEventListener ('click', function (event) {
        event.preventDefault();



        let endpoint = event.currentTarget.getAttribute ('data-endpoint');
        fakeStore(endpoint); })
    });


