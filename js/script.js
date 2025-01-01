// Feather Replace / Feather Icon
feather.replace();

// Slide

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".nav-nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Toggle navbar

window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
  var header = document.querySelector(".nav-logo");
  header.classList.toggle("sticky", window.scrollY > 0);
  var header = document.querySelector(".nav-beneran");
  header.classList.toggle("sticky", window.scrollY > 0);
  var header = document.querySelector(".nav-nav");
  header.classList.toggle("sticky", window.scrollY > 0);
  var header = document.querySelector(".nav-extra");
  header.classList.toggle("sticky", window.scrollY > 0);
  var header = document.querySelector(".menu-bar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Img Home

let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
  resetAutoSlide();
}

function prevSlide() {
  showSlide(currentIndex - 1);
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000); // Pindah slide setiap 5 detik
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Mulai auto-slide saat halaman dimuat
window.onload = () => {
  startAutoSlide();
};
