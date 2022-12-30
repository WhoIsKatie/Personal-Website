const sections = document.getElementById('js-menu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('li');
var enable = true;

navLinks.forEach((l) => {
    //gradientChars(l);

    l.addEventListener('click', () => {
        sections.classList.toggle('active');
        navbar.classList.toggle('bgactive');
        //enable = !enable;
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