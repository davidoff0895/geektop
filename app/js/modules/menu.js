const insertAfter = (newNode, existingNode) =>
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
const mMenu = document.createElement('div');
const topLine = document.getElementById('top-line');
const topMenu = document.getElementById('top-menu');
mMenu.className = 'm-menu d-lg-none'
insertAfter(mMenu, topLine);
mMenu.appendChild(topMenu.cloneNode(true))
const mMenuHeight = `${mMenu.clientHeight || 300}px`;
const toggleMenu = () => mMenu.clientHeight ? mMenu.style.height = '0' : mMenu.style.height = mMenuHeight;
toggleMenu()