const switchElement = document.getElementById('switch');
let isLightOn = false;

switchElement.addEventListener('change', (event) => {
  if (event.target.checked) {
    console.log('Switch is ON');
    isLightOn = true;
    document.querySelector('.relative.inline-block.w-10.h-6.rounded-full').classList.remove('bg-tuatara');
    document.querySelector('.relative.inline-block.w-10.h-6.rounded-full').classList.add('bg-honeysuckle');
  } else {
    console.log('Switch is OFF');
    isLightOn = false;
    document.querySelector('.relative.inline-block.w-10.h-6.rounded-full').classList.remove('bg-honeysuckle');
    document.querySelector('.relative.inline-block.w-10.h-6.rounded-full').classList.add('bg-tuatara');
  }
});