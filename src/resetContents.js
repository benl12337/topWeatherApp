export default function resetContents() {
    const weatherContent = document.getElementById('weatherContent');
    weatherContent.innerHTML = `<div id="locationDiv"></div>
    <img id="locationCondition src="">
    <div class="today">
        <div id = "statsOne"  class="currentStats"></div>
        <div id = "statsTwo"  class="currentStats"></div>
        <div id = "statsThree"  class="currentStats"></div>
    </div>
    <div id="forecast"></div>`;
}