'use strict';


var orderedProduct = [];
var cart = document.getElementById('cart');

// var cartItems = document.getElementById('cart');

function startPage() {
  if(localStorage.orderedProduct) {
    orderedProduct = JSON.parse(localStorage.orderedProduct);
    var rowNumber = 0;
    for(var i in orderedProduct){
      if(orderedProduct[i].quantity !== 0){
        rowNumber += 1;
        var trEl = document.createElement('tr');
        var tdEl0 = document.createElement('td');
        tdEl0.textContent = rowNumber;
        tdEl0.id = orderedProduct[i].name;
        trEl.appendChild(tdEl0);
        var tdEl1 = document.createElement('td');
        tdEl1.innerHTML = '<img src="' + orderedProduct[i].filepath + '" alt="">';
        trEl.appendChild(tdEl1);
        var tdEl2 = document.createElement('td');
        tdEl2.textContent = orderedProduct[i].name;
        trEl.appendChild(tdEl2);
        var tdEl3 = document.createElement('td');
        tdEl3.textContent = parseInt(orderedProduct[i].quantity);
        trEl.appendChild(tdEl3);
        var tdButton = document.createElement('td');
        var button = document.createElement('button');
        button.textContent = 'Delete';
        tdButton.appendChild(button);
        trEl.appendChild(tdButton);

        cart.appendChild(trEl);
      }
    }
  }else {
    var cartStatus = document.getElementById('empty');
    var cartEmpty = document.createElement('h1');
    cartEmpty.textContent = localStorage.order;
    cartStatus.appendChild(cartEmpty);
  }
}

function orderPlaced(){
  localStorage.clear();
  localStorage.order = 'Thank You for your order!';
  var justOrdered = document.getElementById('empty');
  var thankYou = document.createElement('h1');
  thankYou.textContent = localStorage.order;
  justOrdered.appendChild(thankYou);
}
  
// var deleteItem = function(event){
//   orderedProduct['button'.id].quantitiy = 0;
//   localStorage.orderedProduct = JSON.stringify(orderedProduct);
// };

var customerInfo = document.getElementById('customer-info');
customerInfo.addEventListener('submit', orderPlaced);
// button.addEventListener('click', deleteItem);

startPage();