const chevLeft = document.getElementById('chev-left');
const chevRight = document.getElementById('chev-right');
const navigation = document.getElementById('navigation');
const phonesBlock = document.getElementById('phones');
const iphoneVertical = document.getElementById('iphone-vertical');
const iphoneHorizontal = document.getElementById('iphone-horizontal');
const firstScreen = document.getElementById('first-screen');
const secondScreen = document.getElementById('second-screen');
const firstPhoneButton = document.getElementById('first-phone-button');
const secondPhoneButton = document.getElementById('second-phone-button');

navigation.addEventListener('click', (event)=> {
    navigation.querySelectorAll('a').forEach(el => el.classList.remove('activeItem'));
    event.target.classList.add('activeItem');
})

const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
       })
    })
}

    // chevLeft.addEventListener('click', ()=> {
    //     if(phonesBlock.classList.contains('second-slide')){
    //         phonesBlock.classList.remove('second-slide');
    //         firstScreen.classList.remove('first-black-screen');
    //         secondScreen.classList.remove('second-black-screen');
    //         firstPhoneButton.hidden = false; 
    //         secondPhoneButton.hidden = false; 
    //         iphoneVertical.hidden = false; 
    //         iphoneHorizontal.hidden = false;
    //     } else {
    //         phonesBlock.classList.add('second-slide');
    //         firstScreen.classList.remove('first-black-screen');
    //         secondScreen.classList.remove('second-black-screen');
    //         firstPhoneButton.hidden = true; 
    //         secondPhoneButton.hidden = true; 
    //         iphoneVertical.hidden = true; 
    //         iphoneHorizontal.hidden = true;
    //     }
    // })

    // chevRight.addEventListener('click', ()=> {
    //     if(phonesBlock.classList.contains('second-slide')){
    //         phonesBlock.classList.remove('second-slide');
    //         firstScreen.classList.remove('first-black-screen');
    //         secondScreen.classList.remove('second-black-screen');
    //         firstPhoneButton.hidden = false; 
    //         secondPhoneButton.hidden = false; 
    //         iphoneVertical.hidden = false; 
    //         iphoneHorizontal.hidden = false;
    //     } else {
    //         phonesBlock.classList.add('second-slide');
    //         firstScreen.classList.remove('first-black-screen');
    //         secondScreen.classList.remove('second-black-screen');
    //         firstPhoneButton.hidden = true; 
    //         secondPhoneButton.hidden = true; 
    //         iphoneVertical.hidden = true; 
    //         iphoneHorizontal.hidden = true;
    //     }
    // })

firstPhoneButton.addEventListener('click', ()=> {
    if(firstScreen.classList.contains('first-black-screen')){
        firstScreen.classList.remove('first-black-screen');
    } else {
        firstScreen.classList.add('first-black-screen');
    }
})

secondPhoneButton.addEventListener('click', ()=> {
    if(secondScreen.classList.contains('second-black-screen')){
        secondScreen.classList.remove('second-black-screen');
    } else {
        secondScreen.classList.add('second-black-screen');
    }
})

//tabs

let imagesNodeList = document.getElementById('portfolio-block');
let buttonsNodeList = document.getElementById('buttons-list');

buttonsNodeList.addEventListener('click', (event) => {
    buttonsNodeList.querySelectorAll('li > button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    const lastPicture = document.getElementById('portfolio-block').lastChild;
    imagesNodeList.prepend(lastPicture);
});

const portfolioBlock = document.getElementById('portfolio-block');

portfolioBlock.addEventListener('click', (event)=> {
    portfolioBlock.querySelectorAll('div').forEach(el => el.classList.remove('activeCurrent'));
    event.target.classList.add('activeCurrent');
    portfolioBlock.classList.remove('activeCurrent');
})

// form

const button = document.getElementById('button__submit');
const mail = document.getElementById('mail');
const name = document.getElementById('name');
const subject = document.getElementById('subject');
const textarea = document.getElementById('textarea');
const subjectFill = document.getElementById('subjectFill');
const textareaFill = document.getElementById('textareaFill');

function subjectFunc(string) {
    if (string === '') {
        return 'Без темы';
    } else {
        return 'Тема: ' + string;
    }
}

function textareaFunc(string) {
    if (string === '') {
        return 'Без описания';
    } else {
        return 'Описание: ' + string;
    }
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (name.checkValidity() && mail.checkValidity()) {
        subjectFill.innerText = subjectFunc(subject.value.toString());
        textareaFill.innerText = textareaFunc(textarea.value.toString());
        document.getElementById('message-block').classList.remove('hidden');
    }
});

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    name.value = '';
    mail.value = '';
    subject.value = '';
    textarea.value = '';
    document.getElementById('message-block').classList.add('hidden');
});

// carusel

let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.chev-right').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.chev-left').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});
