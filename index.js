const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    let interval;

    return (seconds) => {
        if (!seconds) timerEl.innerHTML = `hh:mm:ss`;

        if (interval) {
            clearInterval(interval);
        }

        interval = setInterval(function () {
            if (seconds <= 0) {
                clearInterval(interval);
                return;
            }
            timerEl.innerHTML = getConvertTimeFormat(seconds);

            ++seconds;
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    // Очистите input так, чтобы в значении
    // оставались только числа
    inputEl.value = inputEl.value.replace(/[^0-9]/g, '');
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';
});


function getConvertTimeFormat(value) {
    let h = Math.floor(value / 3600);
    let m = Math.floor(value % 3600 / 60);
    let s = Math.floor(value % 3600 % 60);

    let hDisplay = h < 10 ? '0' + h : h;
    let mDisplay = m < 10 ? '0' + m : m;
    let sDisplay = s < 10 ? '0' + s : s;

    return `${hDisplay}:${mDisplay}:${sDisplay}`;
}


