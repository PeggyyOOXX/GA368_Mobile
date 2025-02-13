document.addEventListener("DOMContentLoaded", function () {
    const sliderImages = document.querySelector(".Home_sliderImages");
    const indicators = document.querySelectorAll(".Home_indicatorContainer");
  
    let currentIndex = 0;
    const totalSlides = document.querySelectorAll(".Home_slide").length;
    const slideWidth = 100;
    let interval;
  
    function updateSlide() {    // 更新輪播圖位置
      sliderImages.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
      updateIndicators();
    }
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
    }
    function goToSlide(index) {
      currentIndex = index;
      updateSlide();
    }
    function startAutoPlay() {    // Start auto slide
      interval = setInterval(nextSlide, 3000);
    }
    function stopAutoPlay() {     // Stop auto slide
      clearInterval(interval);
    }

    startAutoPlay(); // 啟動自動播放
});