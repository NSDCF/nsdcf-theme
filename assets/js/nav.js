(function() {

  addEventListener("turbo:load", function(){
    // Toggle navigation menu classes
    const body = document.querySelector('body');
    const hb = document.querySelector('.hamburger');

    hb.onclick = function() {
      hb.classList.toggle('hamburger--active');
      body.classList.toggle('nav-overlay-active');
    };

    hb.addEventListener('keyup', (event) => {
      if (event.keyCode === 27) {
        hb.classList.remove('hamburger--active');
        body.classList.remove('nav-overlay-active');
        hb.removeEventListener('keyup', (event));
      }
    });
  });
})();
