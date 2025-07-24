const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");
let currentSlide = 0;
let slideInterval;

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots button");


function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}


function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
  resetAutoPlay();
}

if (nextBtn) nextBtn.addEventListener("click", nextSlide);
if (prevBtn) prevBtn.addEventListener("click", prevSlide);


function startAutoPlay() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetAutoPlay() {
  clearInterval(slideInterval);
  startAutoPlay();
}

showSlide(currentSlide);
startAutoPlay();
