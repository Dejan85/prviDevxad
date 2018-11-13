//UI Controller
const UIController = (function () {

    //name of class and id`s
    const dom = {
        colorDisplay: '.colorDisplay',
        message: '#message',
        easy: '.easy',
        hard: '.hard',
        reset: '#reset',
        container: '#container',
        square: '.square',
        selected: 'selected',
        h1: 'h1'
    }

    //color button when is active
    let active = function (thisReference, dif) {
        let arr = [];
        for (prop in dif) {
            arr.push(dif[prop])
        }

        for (let i = 0; i < arr.length; i++) {
            if (thisReference.textContent === 'Easy' || thisReference.textContent === 'Hard') {
                arr[i].classList.remove(dom.selected);
                thisReference.classList.add(dom.selected);
                arr[0].classList.remove(dom.selected);
            }

        }
    }
    //paint squares on click
    let squaresRgb = function (rgb, square, colorDisplayText, thisReference) {
        //this will paint square
        let contentUpdater = rgb();
        for (let i = 0; i < square.length; i++) {
            square[i].style.background = rgb();
        }

        //this will update textContenet
        let arr = [];
        for (let i = 0; i < square.length; i++) {
            if (square[i].style.display !== 'none') {
                arr.push(square[i].style.background);
            }
        }
        let rand = Math.floor(Math.random() * arr.length);
        colorDisplayText.textContent = arr[rand];
    }

    //easy or hard mode
    let difficult = function (thisReference, square, colorDisplayText, h1, message, resetBtn) {

        if (thisReference.textContent === 'Easy') {
            for (let i = 0; i < 3; i++) {
                square[i].style.display = 'none';
            }
        } else if (thisReference.textContent === 'Hard') {
            for (let i = 0; i < square.length; i++) {
                square[i].style.display = 'block';
            }
        }

        if (thisReference.textContent === 'Easy' || thisReference.textContent === 'Hard' || thisReference.textContent === 'New colors' || thisReference.textContent === 'Play again?') {
            for (let i = 0; i < square.length; i++) {
                square[i].style.visibility = 'visible';
                h1.style.background = 'steelblue';
                message.textContent = '';
                resetBtn.textContent = 'New colors'
            }

        }
    }

    //This will check if square is equal to rgb
    let check = function (thisReference, colorDisplay, square, h1, message, resetBtn) {
        if (thisReference.style.background !== colorDisplay.textContent) {
            thisReference.style.visibility = 'hidden';
            message.textContent = 'Try Again...'

        } else {
            for (let i = 0; i < square.length; i++) {
                square[i].style.background = thisReference.style.background;
                square[i].style.visibility = 'visible';
                h1.style.background = thisReference.style.background;
                message.textContent = 'Correct!'
                resetBtn.textContent = 'Play again?'
            }
        }
    }


    //select rest of dom
    let otherDom = function () {
        return {
            colorDisplay: document.querySelector(dom.colorDisplay),
            h1: document.querySelector(dom.h1),
            message: document.querySelector(dom.message)
        }
    }

    //public method
    return {
        //select element for difficult and reset click
        clickElement: function () {
            return {
                reset: document.querySelector(dom.reset),
                easy: document.querySelector(dom.easy),
                hard: document.querySelector(dom.hard),
            }
        }, // end of clickElement

        //remove or add 'selected' class when button is active
        selectActive: function (thisReference, dif) {
            return active(thisReference, dif);
        }, //end of selectActive

        //select all square
        squareSelect: function () {
            let square = document.querySelectorAll(dom.square);
            let arr = Array.prototype.slice.call(square);
            return arr;
        }, //end of square

        //paint squares on click
        squareColor: function (rgb, square, colorDisplayText, thisReference) {
            return squaresRgb(rgb, square, colorDisplayText, thisReference);
        }, //end of squareColor

        restOfDome: function () {
            return otherDom();
        }, // res od dom end

        difficultPublic: function (thisReference, square, colorDisplayText, h1, message, resetBtn) {
            return difficult(thisReference, square, colorDisplayText, h1, message, resetBtn);
        }, // difficultPublic end

        checkPublic: function (thisReference, colorDisplay, square, h1, message, resetBtn) {
            return check(thisReference, colorDisplay, square, h1, message, resetBtn);
        }
    }
})();

//system controller
const system = (function () {

    //rgb color maker
    let rgb = function () {
        let color = [];
        for (let i = 0; i < 3; i++) {
            let rand = Math.floor(Math.random() * 256);
            color.push(rand);
        }
        let rgb = 'rgb' + '(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
        return rgb;
    }

    //public 
    return {
        rgb: function () {
            return rgb();
        }
    }
})();

//main controller
const mainController = (function (UICtrl, sys) {
    //1. variables
    const button = UICtrl.clickElement();
    const active = UICtrl.selectActive;
    const square = UICtrl.squareSelect();
    const rgb = sys.rgb;
    const colorSquares = UICtrl.squareColor;
    const colorDisplayText = UICtrl.restOfDome();
    const difficult = UICtrl.difficultPublic;
    const chack = UICtrl.checkPublic;

    //2. add evet listener for button
    for (prop in button) {
        button[prop].addEventListener('click', function () {
            active(this, button);
            difficult(this, square, colorDisplayText, colorDisplayText.h1, colorDisplayText.message, button.reset);
            colorSquares(rgb, square, colorDisplayText.colorDisplay, this);
        });
    }

    //3. add event listener for square
    square.forEach(e => {
        e.addEventListener('click', function () {
            chack(this, colorDisplayText.colorDisplay, square, colorDisplayText.h1, colorDisplayText.message, button.reset);
        });
    });

    colorSquares(rgb, square, colorDisplayText.colorDisplay);
})(UIController, system);

