const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Auto-advance every 3 seconds

showSlide(currentIndex);
document.addEventListener('DOMContentLoaded', function() {
    const analysisButton = document.getElementById('analysisBtn');
    const analysisResults = document.getElementById('analysisResults');
  
    analysisButton.addEventListener('click', performAnalysis);
  
    function performAnalysis() {
      // Simulate data analysis
      const analysisData = "Analysis results: Average magnitude: 5.8, Most recent earthquake: [details], etc.";
  
      // Display analysis results
      analysisResults.innerHTML = analysisData;
      analysisResults.style.display = 'block';
    }
  });
