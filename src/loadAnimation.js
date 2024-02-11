import animationObject from './animationObject.js';

export default function loadAnimation() {
    const container = document.createElement('div');
    console.log(container);

    container.style.width = '100%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.appendChild(animationObject('loadingObject1'));
    container.appendChild(animationObject('loadingObject2'));
    container.appendChild(animationObject('loadingObject3'));
    return container;
}