// To Open and Close Nav bar
const bar = document.getElementById('bar');
const navBar = document.getElementById('navbar');
const closeNavBar = document.getElementById('close');


bar.addEventListener("click", () => {
    navBar.classList.add("active");
  });

closeNavBar.addEventListener("click", () => {
    navBar.classList.remove('active');
})


// To Add products to carts 
var removeCartItems = document.getElementsByClassName('remove-item');
console.log(removeCartItems)
for( var i = 0; i < removeCartItems.length; i++){
  var button = removeCartItems[i]
  button.addEventListener('click', function(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
  })
}

function updateCartTotal(){
  var cartRows = document.getElementsByClassName('cart-row')
  var total = 0
  for( var i = 0; i < cartRows.length; i++){
    var cartRow = cartRows[i]
    var priceElement = document.getElementsByClassName('cart-price')[0];
    var quantityElement = document.getElementsByClassName('cart-quantity')[0];
    var price = parseFloat(priceElement.innerText.replace('$',''))
    var quantity = quantityElement.value
    total = total + (price * quantity)
    
  }
  document.getElementsByClassName('final-total')[0].innerText = '$' + total.toFixed(2)
}

var quantityInputs = document.getElementsByClassName('cart-quantity')
for( var i = 0; i < quantityInputs.length; i++){
  var input = quantityInputs[i]
  input.addEventListener('change', quantityChanged)
}

function quantityChanged(event){
  var input = event.target
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartTotal()
}





