const heroImages = document.querySelectorAll('.hero.hero-image img,.hero.hero-image svg');

function resizeHeroImages() {
  const heroWidth = document.querySelector('.hero').offsetWidth;
  const heroHeight = document.querySelector('.hero').offsetHeight;

  heroImages.forEach((image) => {
    let imageWidth, imageHeight;
    if (image.tagName === 'IMG') {
      imageWidth = image.naturalWidth;
      imageHeight = image.naturalHeight;
    } else if (image.tagName === 'SVG') {
      imageWidth = image.getAttribute('width');
      imageHeight = image.getAttribute('height');
    }

    const aspectRatio = imageWidth / imageHeight;
    let newWidth, newHeight;

    if (heroWidth / heroHeight > aspectRatio) {
      newWidth = heroHeight * aspectRatio;
      newHeight = heroHeight;
    } else {
      newWidth = heroWidth;
      newHeight = heroWidth / aspectRatio;
    }

    if (image.tagName === 'IMG') {
      image.style.width = `${newWidth}px`;
      image.style.height = `${newHeight}px`;
    } else if (image.tagName === 'SVG') {
      image.setAttribute('width', `${newWidth}px`);
      image.setAttribute('height', `${newHeight}px`);
    }
  });
}

// Call the function on page load and on window resize
window.addEventListener('load', resizeHeroImages);
window.addEventListener('resize', resizeHeroImages);