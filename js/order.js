'use strict';
Product.allProducts = [];
localStorage.order = 'Your cart is empty. Please go to the order page to fill it up.';

var selectEl = document.getElementById('select');
var formEl = document.getElementById('form');

var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

//check for cart items

function startPage(){
  if(localStorage.orderedProduct)
    Product.allProducts = JSON.parse(localStorage.getItem('orderedProduct'));
  else{
    creatingProducts();
  }
}

function Product(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.quantity = 0;
  Product.allProducts.push(this);

}

function creatingProducts(){
  for(var i in productNames){
    var filepath = 'img/' + productNames[i] + '.jpg';
    new Product(productNames[i], filepath);
  }

}

function creatingOption(){
  for(var i in Product.allProducts){
    var optionEl = document.createElement('option');
    optionEl.name = Product.allProducts[i].name;
    optionEl.textContent = Product.allProducts[i].name;
    selectEl.appendChild(optionEl);
  }
}


formEl.addEventListener('submit', transferToCart);

function transferToCart(event){
  event.preventDefault();
  var name = (event.target.productSelect.value);
  var quantity = (event.target.quantity.value);
  for(var i in Product.allProducts){
    if(name === Product.allProducts[i].name)
      Product.allProducts[i].quantity += quantity;
  }
  console.log(Product.allProducts);
  localStorage.orderedProduct = JSON.stringify(Product.allProducts);
}


startPage();
creatingOption();

