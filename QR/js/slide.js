// const slides = document.querySelectorAll(".slide");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const dotsContainer = document.querySelector(".dots");
// let currentSlide = 0;

// // Create dots dynamically
// slides.forEach((_, i) => {
//   const dot = document.createElement("button");
//   if (i === 0) dot.classList.add("active");
//   dot.addEventListener("click", () => goToSlide(i));
//   dotsContainer.appendChild(dot);
// });

// const dots = document.querySelectorAll(".dots button");

// function showSlide(index) {
//   slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
//   dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// function prevSlide() {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// }

// function goToSlide(index) {
//   currentSlide = index;
//   showSlide(currentSlide);
// }

// nextBtn.addEventListener("click", nextSlide);
// prevBtn.addEventListener("click", prevSlide);

// // Auto-play slider
// setInterval(nextSlide, 5000);

// // Initialize
// showSlide(currentSlide);




// Select elements
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

// Show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

// Go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Go to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Go to a specific slide
function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
  resetAutoPlay();
}

// Event listeners
if (nextBtn) nextBtn.addEventListener("click", nextSlide);
if (prevBtn) prevBtn.addEventListener("click", prevSlide);

// Auto-play slider
function startAutoPlay() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetAutoPlay() {
  clearInterval(slideInterval);
  startAutoPlay();
}

// Initialize slider
showSlide(currentSlide);
startAutoPlay();
