{
  const showFirstImage = () => {
    const images = document.querySelectorAll(".gallery__images");
    images[0].style.display = "block";
  }

  const changeImage = (step) => {
    const images = document.querySelectorAll(".gallery__images");
    let currentIndex = 0;

    for (let i = 0; i < images.length; i++) {
      if (images[i].style.display === "block") {
        currentIndex = i;
        break;
      }
    }

    images[currentIndex].style.display = "none";
    currentIndex += step;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }

    images[currentIndex].style.display = "block";
  };

  const initGallery = () => {
    const prevButton = document.querySelector(".gallery__button--prev");
    const nextButton = document.querySelector(".gallery__button--next");

    prevButton.addEventListener("click", () => {
      changeImage(-1);
    });

    nextButton.addEventListener("click", () => {
      changeImage(1);
    });

    showFirstImage();
  };

  document.addEventListener("DOMContentLoaded", initGallery);
}
