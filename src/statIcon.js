export default function statIcon(img) {
    const statIcon = new Image();
    statIcon.src = img;
    statIcon.className = 'weatherIcon';
    statIcon.style.width = "64px";
    return statIcon;
}