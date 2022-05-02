const overlayElements = document.getElementsByClassName('section__pattern__overlay');
Array.prototype.forEach.call(overlayElements,((overlay, i) =>
    overlay.style.backgroundImage = `url(/img/blog/sections/${i+1}.jpg)`));