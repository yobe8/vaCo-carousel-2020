const passImagesCon = document.querySelector('.carousel__passImages-container'),
    rightBtn = document.querySelector('.carousel__passImages__rightButton'),
    leftBtn = document.querySelector('.carousel__passImages__leftButton'),
    clickDots = document.getElementById('clickDots__list').querySelectorAll('button');
    
const image = new Image();
image.className = 'js-carousel__PassImages__img';
passImagesCon.insertBefore(image, rightBtn);

let imgNum = 1;

function clickDot(event) {
    let dotId = parseInt(event.srcElement.id);
    if(dotId !== imgNum) {
        imgNum = dotId;
    }
    loadImages();
}

function rightClick() {
    ++imgNum;
    if (imgNum === 6) {
        imgNum = 1;
    }
    loadImages();
}

function leftClick() {
    --imgNum;
    if (imgNum === 0) {
        imgNum = 5;
    }
    loadImages();
};

function loadImages() {
    image.src = `./images/${imgNum}.jpg`;
};

function init() {
    loadImages();
    leftBtn.addEventListener('click', leftClick);
    rightBtn.addEventListener('click', rightClick);
    clickDots[0].addEventListener('click', clickDot);
    clickDots[1].addEventListener('click', clickDot);
    clickDots[2].addEventListener('click', clickDot);
    clickDots[3].addEventListener('click', clickDot);
    clickDots[4].addEventListener('click', clickDot);
    
};

init();