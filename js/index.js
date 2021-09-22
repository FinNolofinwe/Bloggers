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

  // Hide/show filters

  const filterButton = document.querySelectorAll('.filter__description');

  (function() {
    filterButton.forEach(item => {
      item.addEventListener('click', () => {
        console.log(item.nextElementSibling);
        item.nextElementSibling.classList.toggle('filter__block-active');
      });
    });
  }());

  //Cards uploading

  class Cards {
    constructor(src, alt, name, youtube, vk, inst, parentSelector, ...classes) {
      this.src = src,
      this.alt = alt,
      this.name = name,
      this.youtube = youtube,
      this.vk = vk,
      this.inst = inst,
      this.parent = document.querySelector(parentSelector);
			this.classes = classes;
    }

    render() {
      const element = document.createElement('div');
			if (this.classes.length == 0) {
				this.element = 'card';
				element.classList.add(this.element);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}
      element.innerHTML = `
                            <img src=${this.src} alt=${this.alt} class="card__img">
                              <div class="card__description">
                                <h4 class="card__description-title">${this.name}</h4>
                                <div class="card__subs">
                                  <div class="card__subs-youtube">${this.youtube}</div>
                                  <div class="card__subs-vk">${this.vk}</div>
                                  <div class="card__subs-inst">${this.inst}</div>
                                </div>
                              </div>
      `;
      this.parent.append(element);
    }
  }

  // Hide/show card description

  function hideCardDescription() {
    const cards = document.querySelectorAll('.card');
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

  function createCard() {
      for (let i= 1; i<=8; i++) {
        new Cards(
          `../assets/img/Card${i}.jpg`,
          `Card${i}`,
          'Макс Максимов',
          '3 160 000+',
          '134 000+',
          '128 000+',
          '.cards',
          ).render();
      }  
      hideCardDescription();
    }

  createCard();

  let timerId = setInterval(() => {
    createCard();
    hideCardDescription();
  }, 2000);
  setTimeout(() => {
    clearInterval(timerId)
  }, 6000);

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = 'html/blogger.html'
    });
  });
});