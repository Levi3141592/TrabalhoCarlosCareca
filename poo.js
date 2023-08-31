class SlideManager {
    constructor() {
        this.position = 1;
        this.allSlide = document.querySelector('#slide-both');
        this.arrowL = document.querySelector('#arrow-left');
        this.arrowR = document.querySelector('#arrow-right');
        
        this.arrowL.addEventListener('click', () => this.moveLeft());
        this.arrowR.addEventListener('click', () => this.moveRight());
    }

    moveLeft() {
        if (this.position > 1) {
            this.position--;
            this.updateSlide();
        }
    }

    moveRight() {
        if (this.position < 3) {
            this.position++;
            this.updateSlide();
        }
    }

    updateSlide() {
        const translateValue = (this.position - 1) * -100;
        this.allSlide.style.transform = `translateX(${translateValue}vw)`;
        this.arrowL.style.visibility = this.position === 1 ? 'hidden' : 'visible';
        this.arrowR.style.visibility = this.position === 3 ? 'hidden' : 'visible';
    }
}

class SecondarySlideManager {
    constructor() {
        this.allSec = document.querySelector('#allsecs');
        this.arrows2 = document.querySelector('.arrows2');
        this.arrowRight2 = document.querySelector('#arrow-right2');
        this.arrowLeft2 = document.querySelector('#arrow-left2');

        this.arrowRight2.addEventListener('click', () => this.moveRight());
        this.arrowLeft2.addEventListener('click', () => this.moveLeft());
    }

    moveLeft() {
        this.allSec.style.transform = 'translateX(0vw)';
        this.arrowRight2.style.display = 'block';
        this.arrowLeft2.style.display = 'none';
        this.arrows2.style.justifyContent = 'end';
    }

    moveRight() {
        this.allSec.style.transform = 'translateX(-100vw)';
        this.arrowRight2.style.display = 'none';
        this.arrowLeft2.style.display = 'block';
        this.arrows2.style.justifyContent = 'start';
    }
}

const slideManager = new SlideManager();
const secondarySlideManager = new SecondarySlideManager();