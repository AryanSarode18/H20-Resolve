let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function () {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('nav-toggle');
});



const texts = ["Save Water, Save Life", "Clean Water, Live Healthy", "Save Blue, Live Green", "Think Before You Let It Drip", "Every Drop Counts"];
function changeText() {
  const sloganElement = document.getElementById("slogan");
  let currentIndex = 0;

  setInterval(function () {
    sloganElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }, 4000);
}
changeText();
