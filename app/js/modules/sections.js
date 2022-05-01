const overlayElements = document.getElementsByClassName('section__pattern__overlay');
Array.prototype.forEach.call(overlayElements,((overlay, i) =>
    overlay.style.backgroundImage = `url(/img/blog/electronics/${i+1}.jpg)`))