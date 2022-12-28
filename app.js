/* Реализован функционал:
1. Чтобы при нажатии на какую-либо из ячеек, появлялся слайдер. 
2. Чтобы при клике на какую-либо из фотографий, она отображалась 
в слайдере в полноразмерном формате.
3. На каждую из кнопок навесить события: что будет происходить
с кними при клике.
*/


const cards = Array.from(document.querySelectorAll(".gallery__card"));
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider__container");
const picture = Array.from(document.querySelectorAll(".gallery__card__pic"));
const sliderBtnLeft = document.querySelector(".slider__btn_left");
const sliderBtnRight = document.querySelector(".slider__btn_right");
const sliderClose = document.querySelector(".slider__close");

let cardIndex = -1;
let pictureFull;

for (const card of cards) {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    cardIndex = cards.indexOf(card);
    pictureFull = picture[cardIndex].cloneNode();
    pictureFull.style.objectFit = "contain";
    sliderContainer.append(pictureFull);
    slider.classList.add("active");
  });
}

sliderBtnLeft.addEventListener("click", (event) => {
  event.preventDefault();
  changePicture("left");
});

sliderBtnRight.addEventListener("click", (event) => {
  event.preventDefault();
  changePicture("right");
});


/* Функция, отвечающая за смену картинок */
function changePicture(dir) {
  if (dir === "left") {
    if (cardIndex > 0) {
      cardIndex--;
    } else {
      cardIndex = cards.length - 1;
    }
  } else if (dir === "right") {
    if (cardIndex < cards.length - 1) {
      cardIndex++;
    } else {
      cardIndex = 0;
    }
  }

 /* Чтобы менялись картинки */
  let newPictureFull = picture[cardIndex].cloneNode();
  newPictureFull.style.objectFit = "contain";
  pictureFull.replaceWith(newPictureFull);
  pictureFull = newPictureFull;
}

/* Чтобы закрывался слайдер */
sliderClose.addEventListener("click", (event) => {
  event.preventDefault();
  slider.classList.remove("active");
  pictureFull.remove();
  newPictureFull.remove();
});