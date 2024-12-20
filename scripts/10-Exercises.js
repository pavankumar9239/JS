function fun1(cls) {
    if(document.querySelector(`.${cls}`).classList.contains('js-istoggled')) {
        document.querySelector(`.${cls}`).classList.remove('js-istoggled');
        document.querySelector(`.${cls}`).classList.add('no');
    }
    else {
        document.querySelector(`.${cls}`).classList.add('js-istoggled');
        document.querySelector(`.${cls}`).classList.remove('no');
    }
}

function fun2(cls) {
    if(cls === 'js-game2') {
        document.querySelector(`.${cls}`).classList.add('js-istoggled');
        document.querySelector(`.${cls}`).classList.remove('no');
        document.querySelector(`.js-music2`).classList.remove('js-istoggled');
        document.querySelector(`.js-music2`).classList.add('no');
        document.querySelector(`.js-tech2`).classList.remove('js-istoggled');
        document.querySelector(`.js-tech2`).classList.add('no');
    }
    else if( cls === 'js-music2') {
        document.querySelector(`.${cls}`).classList.add('js-istoggled');
        document.querySelector(`.${cls}`).classList.remove('no');
        document.querySelector(`.js-game2`).classList.remove('js-istoggled');
        document.querySelector(`.js-game2`).classList.add('no');
        document.querySelector(`.js-tech2`).classList.remove('js-istoggled');
        document.querySelector(`.js-tech2`).classList.add('no');
    }
    else if( cls === 'js-tech2') {
        document.querySelector(`.${cls}`).classList.add('js-istoggled');
        document.querySelector(`.${cls}`).classList.remove('no');
        document.querySelector(`.js-music2`).classList.remove('js-istoggled');
        document.querySelector(`.js-music2`).classList.add('no');
        document.querySelector(`.js-game2`).classList.remove('js-istoggled');
        document.querySelector(`.js-game2`).classList.add('no');
    }
}