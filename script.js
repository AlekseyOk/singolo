
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
    navigation.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})

chevLeft.addEventListener('click', ()=> {
    if(phonesBlock.classList.contains('second-slide')){
        phonesBlock.classList.remove('second-slide');
        firstScreen.classList.remove('first-black-screen');
        secondScreen.classList.remove('second-black-screen');
        firstPhoneButton.hidden = false; 
        secondPhoneButton.hidden = false; 
        iphoneVertical.hidden = false; 
        iphoneHorizontal.hidden = false;
    } else {
        phonesBlock.classList.add('second-slide');
        firstScreen.classList.remove('first-black-screen');
        secondScreen.classList.remove('second-black-screen');
        firstPhoneButton.hidden = true; 
        secondPhoneButton.hidden = true; 
        iphoneVertical.hidden = true; 
        iphoneHorizontal.hidden = true;
    }
})

chevRight.addEventListener('click', ()=> {
    if(phonesBlock.classList.contains('second-slide')){
        phonesBlock.classList.remove('second-slide');
        firstScreen.classList.remove('first-black-screen');
        secondScreen.classList.remove('second-black-screen');
        firstPhoneButton.hidden = false; 
        secondPhoneButton.hidden = false; 
        iphoneVertical.hidden = false; 
        iphoneHorizontal.hidden = false;
    } else {
        phonesBlock.classList.add('second-slide');
        firstScreen.classList.remove('first-black-screen');
        secondScreen.classList.remove('second-black-screen');
        firstPhoneButton.hidden = true; 
        secondPhoneButton.hidden = true; 
        iphoneVertical.hidden = true; 
        iphoneHorizontal.hidden = true;
    }
})

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