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
    document.getElementById('overlay').classList.add('active');
}

function closeOverlay2() {
    document.getElementById('overlay').classList.remove('active');
}
