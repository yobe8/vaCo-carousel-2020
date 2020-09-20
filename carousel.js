const passImagesCon = document.querySelector('.carousel__passImages-container'),
    rightBtn = document.querySelector('.carousel__passImages__rightButton'),
    leftBtn = document.querySelector('.carousel__passImages__leftButton');

const image = new Image();
image.className = 'js-carousel__PassImages__img';
passImagesCon.insertBefore(image, rightBtn);

let imgNum = 1;

function clickDots() {
    console.log('good');
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
    
};

init();