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





// To Add Products to cart
var addCartItems = document.querySelectorAll('.add-to-cart');

for (var i = 0; i < addCartItems.length; i++) {
    var button = addCartItems[i];
    button.addEventListener('click', addCartItemsClicked);
}

function addCartItemsClicked(event) {
    var button = event.target;
    var prodDetails = button.parentElement.parentElement;
    var price = prodDetails.querySelector('.item-price').innerText;
    var title = prodDetails.querySelector('.item-title').innerText;
    var imageSrc = prodDetails.querySelector('.item-image-src').src;
    addRowToCart(title, price, imageSrc);
}


function addRowToCart(title, price, imageSrc) {
  var cartItems = document.getElementsByClassName('cart-table-body');
  var cartRow = document.createElement('tr');

  var cartRowContent = 
  `
    <tr class="cart-row">
      <td><img src="${imageSrc}" alt=""></td>
      <td>${title}</td>
      <td class="cart-price">${price}</td>
      <td><input class="cart-quantity" type="number" value="1" ></td>
      <td class="item-total">${price}</td>
      <td><a class="remove-item"><i class="fa-solid fa-circle-xmark"></i></a></td>
    </tr>
  `;

  cartRow.innerHTML = cartRowContent;



  for (var i = 0; i < cartItems.length; i++) {
    cartItems[i].appendChild(cartRow.cloneNode(true));
  }


  // cartItems.appendChild(cartRow)


  console.log(cartItems)
}







// To Remove products from carts 
var removeCartItems = document.getElementsByClassName('remove-item');
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
    var priceElement = document.getElementsByClassName('cart-price')[0]
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





