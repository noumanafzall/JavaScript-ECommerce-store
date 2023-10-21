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

let addToCart = document.querySelectorAll('.add-cart')

for( i = 0; i < addToCart.length; i++)
{
  addToCart[i].addEventListener('click', () => {
    console.log("added to cart");
  })
}