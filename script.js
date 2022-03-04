const bodyElement = document.querySelector('body');
const hoursElement = bodyElement.querySelector('.rectangular-box .time .hours');
const minutesElement = bodyElement.querySelector('.rectangular-box .time .minutes');
const secondsElement = bodyElement.querySelector('.rectangular-box .time .seconds');
const ampmElement = bodyElement.querySelector('.rectangular-box .time .ampm');
const timeDigital = bodyElement.querySelector('.digital');
const timeAnalog = bodyElement.querySelector('.analog');
const switchSlider = bodyElement.querySelector('.button-container input');
const secondsNeedle = bodyElement.querySelector('.secondsNeedle');
const hoursNeedle = bodyElement.querySelector('.hoursNeedle');
const minutesNeedle = bodyElement.querySelector('.minutesNeedle');

// secondsNeedle.style.transform = `rotate(270deg)`;
// minutesNeedle.style.transform = `rotate(270deg)`;
// hoursNeedle.style.transform = `rotate(270deg)`;

function switchChange() {
    if(switchSlider.checked == true) {
        timeDigital.style.display = 'none';
        timeAnalog.style.display = 'block';
    }
    else {
        timeDigital.style.display = 'block';
        timeAnalog.style.display = 'none';
    }
}

setInterval(runningTime,1000);

function runningTime() {
    const time = new Date();
    hoursElement.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minutesElement.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    secondsElement.innerHTML = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    secondsNeedle.style.transform = `rotate(${time.getSeconds()*6-90}deg)`;
    minutesNeedle.style.transform = `rotate(${time.getMinutes()*6-90}deg)`;
    hoursNeedle.style.transform = `rotate(${time.getHours() > 12 ? (time.getHours() - 12)*30-90 : time.getHours()*30-90}deg)`;

    //document.getElementById('3').innerHTML = time.getSeconds()*6;
    // document.getElementById('2').innerHTML = time.getMinutes()*4;
    // document.getElementById('1').innerHTML = time.getHours();
    //debugger
}