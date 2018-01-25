'use strict';
Product.allProducts = [];
Product.orderedProductName = [];
Product.orderedProductQuant = [];

var selectEl = document.getElementById('product-select');
var formEl = document.getElementById('order-form');

var prices = [150.00, 25.00, 70.00, 90.00, 275.00, 5.00, 150.00, 20.00, 40.00, 10.50, 8.75, 12.50, 17.00, 85.00, 27.00, 95.00, 18.50, 99.00, 45.00, 29.50];
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];



function Product(name, filepath, price){
  this.name = name;
  this.filepath = filepath;
  this.price = price;
  Product.allProducts.push(this);

}

function creatingProduts(){
  for(var i in productNames){
    var filepath = 'img/' + productNames[i] + '.jpg';
    new Product(productNames[i], filepath, prices[i]);
  }

}

function creatingOption(){
  for(var i in Product.allProducts){
    var optionEl = document.createElement('option');
    optionEl.name = Product.allProducts[i].name;
    optionEl.textContent = Product.allProducts[i].name + ' ($' + Product.allProducts[i].price + ')';
    selectEl.appendChild(optionEl);
  }
}


formEl.addEventListener('submit', transferToCart);

function transferToCart(event){
  event.preventDefault();
  console.log(event);
  var x = (event.target.productSelect.value);
  var y = (event.target.quantity.value);
  //object literal
  var order = {name: x, quant: y};
  Product.orderedProductName.push(x);
  Product.orderedProductQuant.push(y);


}



creatingProduts();

//populate options
creatingOption();

