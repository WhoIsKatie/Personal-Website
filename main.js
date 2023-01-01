const navBarToggle = document.getElementById('js-navbar-toggle');
const sections = document.getElementById('js-menu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('li');
var enable = true;

navBarToggle.addEventListener('click', function () {
    sections.classList.toggle('active');
    navbar.classList.toggle('bgactive');
    if (navbar.style.flexDirection != 'column')
        navbar.style.flexDirection = 'column';
    else navbar.style.flexDirection = 'row';

    if (navbar.style.borderBottom != 'none')
        navbar.style.borderBottom = 'none';
    else
        navbar.style.borderBottom = "solid var(--thistle-border)";
    enable = !enable;
});

navLinks.forEach((l) => {
    //gradientChars(l);

    l.addEventListener('click', () => {
        sections.classList.toggle('active');
        navbar.classList.toggle('bgactive');
    })
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    if (enable) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
    }
}

/**
 * 
 * @param {*} link 
 * @returns 
 */
/* function gradientChars(link) {
    if (link == null) return;
    if (link.querySelector('a') == null) return;

    let current = link.querySelector('a');
    let text = current.textContent.split('');
    let hue = window.getComputedStyle(current).getPropertyValue('color');
    let rgbVals = hue.replace(/ /g, '').slice(4, -1).split(',').map(e => parseInt(e));
    const [low, mid, high] = getLowestMiddleHighest(rgbVals);
    if (low.val == 255) return;

    let i = 1;
    text.forEach((c) => {
        const newSpan = document.createElement('span');
        newSpan.innerHTML = c;

        const lightRGB = [];
        lightRGB[low.index] = Math.round(low.val + (Math.min(255 - low.val, i * 255)));
        const incFraction = (lightRGB[low.index] - low.val) / (255 - low.val);
        lightRGB[mid.index] = (mid.val + (255 - mid.val) * incFraction);
        lightRGB[high.index] = (high.val + (255 - high.val) * incFraction);
        newSpan.style.color = "#" + (lightRGB[0]).toString(16) + (lightRGB[1]).toString(16) + (lightRGB[2]).toString(16);

        link.insertBefore(newSpan, current);
        i -= (1 / text.length);
    });

    current.remove();

} */

/** Sorts RGB values from the given rgbIntArray in order of increasing magnitude.
 * 
 * Source: Hugh Haworth @ css-tricks.com
 * https://css-tricks.com/using-javascript-to-adjust-saturation-and-brightness-of-rgb-colors/
 * 
 * @param {*} rgbIntArray 
 * @returns the sorted rgb array
 */
/* function getLowestMiddleHighest(rgbIntArray) {
    let highest = { val: -1, index: -1 };
    let lowest = { val: Infinity, index: -1 };

    rgbIntArray.map((val, index) => {
        if (val > highest.val) {
            highest = { val: val, index: index };
        }
        if (val < lowest.val) {
            lowest = { val: val, index: index };
        }
    });
    if (lowest.index === highest.index) {
        lowest.index = highest.index + 1;
    }
    let middle = { index: (3 - highest.index - lowest.index) };
    middle.val = rgbIntArray[middle.index];
    console.log([lowest, middle, highest]);
    return [lowest, middle, highest];
} */

const nightToggle = document.getElementById('night-mode');
const moon = document.getElementById('moon');
const blossom3 = document.getElementById('blossom-3').querySelector('img');
const blossom4 = document.getElementById('blossom-4');
const introBox1 = document.getElementById('intro-box-1');
const introBox2 = document.getElementById('intro-box-2');
var night = true;

nightToggle.addEventListener('click', function () {
    if (night) {
        document.documentElement.style.setProperty('--bg', 'var(--cosmic-latte)');
        document.documentElement.style.setProperty('--font', 'var(--clear-raisin)');
        document.documentElement.style.setProperty('--primary', 'var(--clear-raisin)');
        document.documentElement.style.setProperty('--secondary-1', 'var(--wysteria)');
        document.documentElement.style.setProperty('--primary-border', 'var(--clear-thistle-3)');
        document.documentElement.style.setProperty('--secondary-border', 'var(--baby-pink)');
        document.documentElement.style.setProperty('--navbg', 'var(--clearer-cosmic-latte)');
        document.documentElement.style.setProperty('--boxbg', 'var(--clear-thistle-2)');
        document.documentElement.style.setProperty('--tags', 'var(--clear-pink-2)');
        document.documentElement.style.setProperty('--featured-tags', 'var(--clear-raisin-2)');
        document.querySelector('h5').style.fontFamily = 'black_mangoregular';
        introBox1.style.backgroundImage = "url('content/intro-window-1-light.png')";
        introBox2.style.backgroundImage = "url('content/intro-window-2-light.png')";
        blossom3.style.opacity = '1';
        blossom4.src = "content/blossom-4-light.png";

    } else {
        document.documentElement.style.setProperty('--bg', 'var(--raisin-black)');
        document.documentElement.style.setProperty('--font', 'var(--clear-cosmic-latte)');
        document.documentElement.style.setProperty('--primary', 'var(--cosmic-latte)');
        document.documentElement.style.setProperty('--secondary-1', 'var(--thistle)');
        document.documentElement.style.setProperty('--primary-border', 'var(--clear-thistle-2)');
        document.documentElement.style.setProperty('--secondary-border', 'var(--clear-pink)');
        document.documentElement.style.setProperty('--navbg', 'var(--clear-raisin)');
        document.documentElement.style.setProperty('--boxbg', 'var(--clear-thistle)');
        document.documentElement.style.setProperty('--tags', 'var(--clear-pink)');
        document.documentElement.style.setProperty('--featured-tags', 'var(--clear-thistle-2)');
        document.querySelector('h5').style.fontFamily = 'black_mangolight';
        introBox1.style.backgroundImage = "url('content/intro-window-1.png')";
        introBox2.style.backgroundImage = "url('content/intro-window-2.png')";
        blossom3.style.opacity = '0.65';
        blossom4.src = "content/blossom-4.png";
    }
    night = !night;
});