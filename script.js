let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".testimonial-item");
  const totalSlides = slides.length;
  const carouselInner = document.querySelector(".carousel-inner");

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Initialize the first slide
showSlide(currentIndex);
