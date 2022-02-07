
const navBarToggle = document.getElementById('js-navbar-toggle');
const sections = document.getElementById('js-menu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('li');
var enable = true;

navBarToggle.addEventListener('click', function () {
    sections.classList.toggle('active');
    navbar.classList.toggle('bgactive');
    enable = !enable;
});

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        sections.classList.toggle('active');
        navbar.classList.toggle('bgactive');
        enable = !enable;
    })
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    if (enable == true) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
    }
}
