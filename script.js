document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 4000;
  
    function initSlideshow() {
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        startSlideInterval();
    }
    
    function showSlide(index) {

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
 
        currentSlide = (index + slides.length) % slides.length;
        

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
 
        resetSlideInterval();
    }

    function startSlideInterval() {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, slideDuration);
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }
  
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    const slideshow = document.querySelector('.promo-slideshow');
    slideshow.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slideshow.addEventListener('mouseleave', () => {
        startSlideInterval();
    });

    initSlideshow();

});

const promoBanner = document.querySelector('.promo-top-banner');
if (promoBanner) {
    promoBanner.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
    
    setTimeout(() => {
        promoBanner.style.transform = 'scale(0.98)';
        setTimeout(() => {
            promoBanner.style.transform = 'scale(1)';
        }, 200);
    }, 5000);
}
document.addEventListener('DOMContentLoaded', function() {

    const buyButtons = document.querySelectorAll('.buy-btn');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            alert(`Bạn đã thêm ${productName} vào giỏ hàng!`);
            

            this.textContent = 'Đã thêm!';
            this.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                this.textContent = 'MUA';
                this.style.backgroundColor = '#d70018';
            }, 2000);
        });
    });
    
  
});