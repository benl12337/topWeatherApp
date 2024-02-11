export default function animationObject(className) {
    const loadingObject = document.createElement('div');
    loadingObject.style.width = '25px';
    loadingObject.style.height = '25px';
    loadingObject.style.borderRadius = '50%';
    loadingObject.style.background = 'white';
    loadingObject.classList.add('loadingObject');
    loadingObject.classList.add(className);
    return loadingObject;
}