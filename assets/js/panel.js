(function() {
  const accordion = document.getElementsByClassName("accordion-link");
  let current = -1;

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
      accordion[current].firstElementChild.preventDefault();

      if (i !== current && current !== -1) {
        accordion[current].classList.remove('accordion-link--active');
        accordion[current].nextElementSibling.classList.remove('accordion-panel--active');
      }

      this.nextElementSibling.classList.toggle('accordion-panel--active');
      current = this.classList.toggle('accordion-link--active') ? i : -1;
    });
  };
})();
