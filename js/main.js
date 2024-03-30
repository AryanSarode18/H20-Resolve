// JS Logic For Water Pollution Slider

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



// JS Logic For Navbar

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



// JS Logic For Home Page Auto Changing Texts

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



// Function to open the preview
function openPreview(previewContainer, target) {
  previewContainer.style.display = 'flex';
  let previewBoxes = previewContainer.querySelectorAll('.preview');
  previewBoxes.forEach(preview => {
      let previewTarget = preview.getAttribute('data-target');
      if (target === previewTarget) {
          preview.classList.add('active');
      }
  });
}

// Function to close the preview
function closePreview(previewContainer) {
  let previewBoxes = previewContainer.querySelectorAll('.preview');
  previewBoxes.forEach(preview => {
      preview.classList.remove('active');
  });
  previewContainer.style.display = 'none';
}

// Get the "Explore" button in the home section
let exploreButtonHome = document.querySelector('.home .btn');

// Get the preview container for the home section
let homePreviewContainer = document.querySelector('.home-preview');

// Add click event listener to the "Explore" button in the home section
exploreButtonHome.addEventListener('click', function() {
  let target = document.querySelector('.home').getAttribute('data-target');
  openPreview(homePreviewContainer, target);
});

// Add click event listener to close button in the home section preview
let closeButtonsHome = homePreviewContainer.querySelectorAll('.fa-times');
closeButtonsHome.forEach(button => {
  button.addEventListener('click', function() {
      closePreview(homePreviewContainer);
  });
});

// Get the "Learn More" button in the about section
let learnMoreButtonsAbout = document.querySelectorAll('.about .btn');

// Get the preview container for the about section
let aboutPreviewContainer = document.querySelector('.about-preview');

// Add click event listener to the "Learn More" buttons in the about section
learnMoreButtonsAbout.forEach(button => {
  button.addEventListener('click', function() {
      let target = button.closest('.about').getAttribute('data-target');
      openPreview(aboutPreviewContainer, target);
  });
});

// Add click event listener to close button in the about section preview
let closeButtonsAbout = aboutPreviewContainer.querySelectorAll('.fa-times');
closeButtonsAbout.forEach(button => {
  button.addEventListener('click', function() {
      closePreview(aboutPreviewContainer);
  });
});
