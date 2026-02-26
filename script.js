function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function openOverlay() {
    document.getElementById('overlay').classList.add('active');
}

function closeOverlay() {
    document.getElementById('overlay').classList.remove('active');
}

function openOverlay2() {
    document.getElementById('overlay2').classList.add('active');
}

function closeOverlay2() {
    document.getElementById('overlay2').classList.remove('active');
}

function openOverlay3() {
    document.getElementById('overlay3').classList.add('active');
}

function closeOverlay3() {
    document.getElementById('overlay3').classList.remove('active');
}

function openOverlay4() {
    document.getElementById('overlay4').classList.add('active');
}

function closeOverlay4() {
    document.getElementById('overlay4').classList.remove('active');
}

function openOverlay5() {
    document.getElementById('overlay5').classList.add('active');
}

function closeOverlay5() {
    document.getElementById('overlay5').classList.remove('active');
}
