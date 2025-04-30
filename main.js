let current = 0;
    const images = document.querySelectorAll('#slider img');

    function showSlide(index) {
      images.forEach(img => img.classList.remove('active'));
      images[index].classList.add('active');
    }

    function next() {
      current = (current + 1) % images.length;
      showSlide(current);
    }

    function prev() {
      current = (current - 1 + images.length) % images.length;
      showSlide(current);
    }