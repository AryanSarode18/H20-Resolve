document.addEventListener("DOMContentLoaded", function () {
  changeText(); // Initialize text change
  showSlides(slideIndex); // Initialize slider
});

let slideIndex = 1;

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

const showSlides = (n) => {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

let menu = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("nav-toggle");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("nav-toggle");
});

const texts = [
  "Save Water, Save Life",
  "Clean Water, Live Healthy",
  "Save Blue, Live Green",
  "Think Before You Let It Drip",
  "Every Drop Counts",
];
function changeText() {
  const sloganElement = document.getElementById("slogan");
  let currentIndex = 0;

  setInterval(function () {
    sloganElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }, 4000);
}
changeText();
