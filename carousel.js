const passImagesCon = document.querySelector('.carousel__passImages-container'),
    rightBtn = document.querySelector('.carousel__passImages__rightButton'),
    leftBtn = document.querySelector('.carousel__passImages__leftButton'),
    clickDots = document.getElementById('clickDots__list').querySelectorAll('button');

// KEN: 아래 3줄의 코드는 자바스크립트로 굳이 할 필요가 없을거 같고, HTML로 작업하시는 것이 좋을것 같네요!
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
}; // KEN: 함수 선언식은 세미콜론을 붙이지 않습니다!

function loadImages() {
    image.src = `./images/${imgNum}.jpg`;
};

function init() {
    loadImages();
    leftBtn.addEventListener('click', leftClick);
    rightBtn.addEventListener('click', rightClick);
    // KEN: 반복문을 사용해보면 어떨까요?
    clickDots[0].addEventListener('click', clickDot);
    clickDots[1].addEventListener('click', clickDot);
    clickDots[2].addEventListener('click', clickDot);
    clickDots[3].addEventListener('click', clickDot);
    clickDots[4].addEventListener('click', clickDot);
    
};

init();