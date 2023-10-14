const bar = document.getElementById('bar');
const navBar = document.getElementById('navbar');
const closeNavBar = document.getElementById('close');


bar.addEventListener("click", () => {
    navBar.classList.add("active");
  });

closeNavBar.addEventListener("click", () => {
    navBar.classList.remove('active');
})