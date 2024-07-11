function toggleSwitch() {
    const switchElement = document.getElementById('switch');
    const toggleCircle = document.getElementById('toggle-circle');
    switchElement.classList.toggle('bg-toggle-bg-off');
    switchElement.classList.toggle('bg-toggle-bg-on');
    toggleCircle.classList.toggle('bg-toggle-circle-off');
    toggleCircle.classList.toggle('bg-toggle-circle-on');
    toggleCircle.classList.toggle('translate-x-0');
    toggleCircle.classList.toggle('translate-x-full');
}