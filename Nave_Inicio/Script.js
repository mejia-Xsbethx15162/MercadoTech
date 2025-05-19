const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const totalItems = 5;
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 20; // 20% per item (1/5)
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }, 5000);