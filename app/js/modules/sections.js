const overlayElements = document.getElementsByClassName('section-img');
Array.prototype.forEach.call(overlayElements,((overlay, i) =>
    overlay.style.backgroundImage = `url(img/blog/sections/${i+1}.jpg)`));
const categoryOverlayElements = document.getElementsByClassName('category-img');

const darkElements = document.getElementsByClassName('dark-section__item');
for (let darkElement of darkElements) {
    const links = darkElement.querySelectorAll('.dark-section__item__link');
    darkElement.addEventListener("mouseenter", () => {
        for (let link of links) {
            link.classList.add('dark-hover')
        }
    })
    darkElement.addEventListener("mouseleave", (event) => {
        for (let link of links) {
            link.classList.remove('dark-hover')
        }
    })
}