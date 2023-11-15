document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
      var descriptionSection = document.getElementById('description');
      var descriptionSectionPosition = descriptionSection.getBoundingClientRect().top + window.scrollY;

      if (window.scrollY >= descriptionSectionPosition && window.scrollY < descriptionSectionPosition + descriptionSection.offsetHeight) {
        descriptionSection.style.color = 'red'; 
      } else {
        descriptionSection.style.color = 'black';
      }
    });
  });