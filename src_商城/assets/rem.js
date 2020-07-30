function rem() {
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 5.2 + "px"
}
rem();
window.onresize = rem;

