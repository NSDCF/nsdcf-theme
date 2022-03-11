(function() {
  addEventListener("turbo:load", function(){
    const recipients = document.querySelector('.event-recipients--big-cards');
    const slider = recipients.querySelector('.big-cards');
    const nextBtn = recipients.querySelector('.slider-btn--next');
    const prevBtn = recipients.querySelector('.slider-btn--prev');
    const itemWidth = recipients.querySelector('.big-card').clientWidth;

    nextBtn.addEventListener('click', scrollToNextItem);
    prevBtn.addEventListener('click', scrollToPrevItem);

    function scrollToNextItem() {
        slider.scrollBy({left: itemWidth, top: 0, behavior: 'smooth'});
    }
    function scrollToPrevItem() {
        slider.scrollBy({left: -itemWidth, top: 0, behavior: 'smooth'});
    }
  });

})();
