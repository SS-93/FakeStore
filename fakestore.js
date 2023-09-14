
const navbar = document.querySelector ('.navbar')

const display = document.querySelector('.display') 

let apiURL = ''



 fetch (apiURL) 
 .then (response => response.json())
   
.then (data => {
    console.log(data)
    //create variable 
// select element document.create element
// inner text
//append child 

    
})

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

const fakeStore = async (endpoint) => {
    let response = await fetch (apiURL + endpoint )
    let storeItems = await response.json();
    console.log(storeItems)
}
fakeStore('products')

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
