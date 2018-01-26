'use strict';

var tableEl = document.getElementById('cart-table');
// Product.allProducts = [];

// var selectEl = document.getElementById('product-select');
// var formEl = document.getElementById('order-form');

// var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

// //check for cart items

function startPage(){
  if(localStorage.orderedProduct)
    Product.allProducts = JSON.parse(localStorage.getItem('orderedProduct'));
  // else{
  //   creatingProducts();
  // }
}

function Product(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.quantity = 0;
  Product.allProducts.push(this);

}

// function creatingProducts(){
//   for(var i in productNames){
//     var filepath = 'img/' + productNames[i] + '.jpg';
//     new Product(productNames[i], filepath);
//   }

// }

// function creatingOption(){
//   for(var i in Product.allProducts){
//     var optionEl = document.createElement('option');
//     optionEl.name = Product.allProducts[i].name;
//     optionEl.textContent = Product.allProducts[i].name;
//     selectEl.appendChild(optionEl);
//   }
// }


// formEl.addEventListener('submit', transferToCart);

// function transferToCart(event){
//   event.preventDefault();
//   var name = (event.target.productSelect.value);
//   var quantity = (event.target.quantity.value);
//   for(var i in Product.allProducts){
//     if(name === Product.allProducts[i].name)
//       Product.allProducts[i].quantity += quantity;
//   }
//   console.log(Product.allProducts);
//   localStorage.orderedProduct = JSON.stringify(Product.allProducts);
// }
var headerTitle = ['No', 'Image', 'Name', 'Quantity'];

function createHeader(){
  var trEl = document.createElement('tr');
  for(var i in headerTitle){
    var thEl = document.createElement('th');
    thEl.textContent = headerTitle[i];

    trEl.appendChild(thEl);
    tableEl.appendChild(trEl);

  }
}


function createTableRow(){
  for(var i in Product.allProducts){
    var trEl = document.createElement('tr');

    var tdNo = document.createElement('td');
    tdNo.textContent = parseInt(i) + 1;

    var tdImage = document.createElement('td');
    tdImage.innerHTML = '<img src = ' + Product.allProducts[i].filepath + '>';


    var tdName = document.createElement('td');
    tdName.textContent = Product.allProducts[i].name;


    var tdQuant = document.createElement('td');
    tdQuant.textContent = Product.allProducts[i].quantity;


    var tdButton = document.createElement('td');
    var button = document.createElement('button');
    button.textContent = 'Delete';
    
    // tdButton.innerHTML = document.createElement('button').textContent('Delete');
    tdButton.appendChild(button);



    trEl.appendChild(tdNo);
    trEl.appendChild(tdImage);
    trEl.appendChild(tdName);
    trEl.appendChild(tdQuant);
    trEl.appendChild(tdButton);

    tableEl.appendChild(trEl);

  }
}


startPage();

createHeader();
createTableRow();
// creatingOption();

