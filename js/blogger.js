document.addEventListener('DOMContentLoaded', () => {
  // Burger-menu
  const burger = document.querySelector('.header__burger');
  const closeMenu = document.querySelector('.header__close');
  const burgerMenu = document.querySelector('.header__nav');
  
    (function() {
      burger.addEventListener('click', () => {
        burger.style.display = 'none';
        closeMenu.style.display = 'block';
        burgerMenu.classList.add('header__nav-active');
      });
  
      closeMenu.addEventListener('click', () => {
        burger.style.display = 'block';
        closeMenu.style.display = 'none';
        burgerMenu.classList.remove('header__nav-active');
      });
    }());

  // Hide/show card description

  const cards = document.querySelectorAll('.card');

  function hideCardDescription() {
    cards.forEach( item =>{
      item.addEventListener('mouseover', () => {
        console.log(item.lastElementChild);
        item.lastElementChild.style.display = 'none';
      });
      item.addEventListener('mouseout', () => {
        item.lastElementChild.style.display = 'block';
      });
    });
    };

  hideCardDescription();

  //Slider
  const buttonLeft = document.querySelector('.slider__button-left');
  const buttonRight = document.querySelector('.slider__button-right');
  const slidesField = document.querySelector('.bloggers__wrapper');
  const sliderBlock = document.querySelector('.bloggers__cards');
  const sliderProgress = document.querySelector('.slider__progress');
  const sliderThumb = document.querySelector('.slider__progress-thumb');
  const blockWidth = window.getComputedStyle(sliderBlock).width;
  const fieldWidth = window.getComputedStyle(slidesField).width;
  const cardWidth = window.getComputedStyle(cards[0]).width;
  const thumbLeft = window.getComputedStyle(sliderThumb).left;
  const thumbWidth = window.getComputedStyle(sliderThumb).width;
  const progressLeft = window.getComputedStyle(sliderProgress).left;
  const progressWidth = window.getComputedStyle(sliderProgress).width;

  function prettyfyWidth(elem) {
    //console.log(elem);
    elem = elem.replace(/[^.\d]+/g,"");
    elem = parseInt(elem);
    console.log(elem);
  }

  prettyfyWidth(blockWidth);
  prettyfyWidth(fieldWidth);
  prettyfyWidth(cardWidth);
  prettyfyWidth(thumbLeft);
  prettyfyWidth(thumbWidth);
  prettyfyWidth(progressLeft);
  prettyfyWidth(progressWidth);

  let gap = (parseInt(fieldWidth) - (cards.length)*(parseInt(cardWidth)))/(cards.length - 1);
  console.log(gap);
  let offset = 0;
  let coord = 0;

  slidesField.style.width = fieldWidth;
  cards.forEach(card => {
    card.style.width = cardWidth;
  });

  if ( window.innerWidth > 425) {
    buttonRight.addEventListener('click', () => {

      if (offset >= parseInt(blockWidth)) {
        offset = 0;
      } else {
        offset += (parseInt(cardWidth) + gap);
      }

      if ((coord + parseInt(thumbWidth)) >= parseInt(progressWidth)) {
        coord = 0.5;
      } else {
        coord += Math.round(parseInt(progressWidth) / (cards.length));
      }

      sliderThumb.style.transform= `translateX(${coord}px)`;
      slidesField.style.transform = `translateX(-${offset}px)`;
  });

  buttonLeft.addEventListener('click', () => {

    if (Math.round(offset) === 0) {
      offset = (parseInt(blockWidth) + gap);
    } else {
      offset -= (parseInt(cardWidth) + gap);
    }

    if (coord <= 0.5) {
      (coord = parseInt(progressWidth) - parseInt(thumbWidth));
    } else {
      coord = coord - Math.round(parseInt(progressWidth) / (cards.length));
    }

    sliderThumb.style.transform= `translateX(${coord}px)`;
    console.log(coord);
    slidesField.style.transform = `translateX(-${offset}px)`;
    console.log(offset);
  });
  } else {

    // Little
    buttonRight.addEventListener('click', () => {

      if (offset >= 3*((parseInt(blockWidth))+gap)) {
        offset = 0;
      } else {
        offset += (parseInt(cardWidth) + gap);
      }

      if ((coord + parseInt(thumbWidth)) >= parseInt(progressWidth)) {
        coord = 0;
      } else {
        coord += Math.round(parseInt(progressWidth) / (cards.length));
      }

      sliderThumb.style.transform= `translateX(${coord}px)`;
      console.log(coord);
      slidesField.style.transform = `translateX(-${offset}px)`;
      console.log(offset);
    });

  buttonLeft.addEventListener('click', () => {

    if (offset <= 0) {
      offset = (3*(parseInt(blockWidth) + gap));
    } else {
      offset -= (parseInt(cardWidth) + gap);
    }

    if (coord <= 1) {
      (coord = parseInt(progressWidth) - parseInt(thumbWidth));
    } else {
      coord = coord - Math.round(parseInt(progressWidth) / (cards.length));
    }

    sliderThumb.style.transform= `translateX(${coord}px)`;
    console.log(coord);
    slidesField.style.transform = `translateX(-${offset}px)`;
    console.log(offset);
    });
  }
  
  });