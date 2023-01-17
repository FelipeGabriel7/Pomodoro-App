// buttons actions
let reset = document.querySelector(`.reset`);
let form = document.querySelector(`.form`);
let init = document.querySelector(`.initial`);
let pause = document.querySelector(`.pause`)

// Time and Breaks
let pomodoroTime = document.querySelector(`.pomodoro`);
let breakL = document.querySelector(`.break`);
let longBreak = document.querySelector(`.long-break`);

// Time variables
let hour = document.querySelector(`.hours`);
let minutes = document.querySelector(`.minutes`);
let seconds = document.querySelector(`.seconds`);

let count = true;

let timeValues = {
  hour: 0,
  min: 0,
  sec: 0,
};

// Time inputs
let inputHr = document.querySelector(`.hr`);
let inputMin = document.querySelector(`.min`);
let inputSec = document.querySelector(`.sec`);
let btnForm = document.querySelector(`.add`);
let add = document.querySelector(`.btn-input`);

// Button Reset
function resetPomodoro() {
  reset.addEventListener(`click`, () => {
    setTimeout(() => {
      window.location.reload();
    }, 800);
  });
}

// Toggle Menu
function isToggleMenu() {
  btnForm.addEventListener(`click`, () => {
    form.classList.toggle(`visible`);
  });
}

// Pomodoro

function pomodoroFun() {
    pomodoroTime.addEventListener(`click`, () => {
    timeValues.hour = 0;
    timeValues.min = 25;
    timeValues.sec = 0;

    hour.textContent =
      timeValues.hour < 10 ? `0` + timeValues.hour : timeValues.hour;
    minutes.textContent =
      timeValues.min < 10 ? `0` + timeValues.min : timeValues.min;
    seconds.textContent =
        timeValues.sec < 10 ? `0` + timeValues.sec : timeValues.sec;
    });
  
}


pomodoroFun()


function breakPomodoro() {
    breakL.addEventListener(`click`, () => {
    timeValues.hour = 0;
    timeValues.min = 5;
    timeValues.sec = 0;

    hour.textContent =
      timeValues.hour < 10 ? `0` + timeValues.hour : timeValues.hour;
    minutes.textContent =
      timeValues.min < 10 ? `0` + timeValues.min : timeValues.min;
    seconds.textContent =
      timeValues.sec < 10 ? `0` + timeValues.sec : timeValues.sec;
  });
}

breakPomodoro()

function longBreakPomodoro() {
    longBreak.addEventListener(`click`, () => {
    timeValues.hour = 0;
    timeValues.min = 15;
    timeValues.sec = 0;

    hour.innerHTML =
      timeValues.hour < 10 ? `0` + timeValues.hour : timeValues.hour;
    minutes.innerHTML =
      timeValues.min < 10 ? `0` + timeValues.min : timeValues.min;
    seconds.innerHTML =
      timeValues.sec < 10 ? `0` + timeValues.sec : timeValues.sec;
    });
  
    

}

longBreakPomodoro()

function pomodoroTimeAdd() {



  add.addEventListener(`click`, (e) => {

    e.preventDefault();

    timeValues.hour = inputHr.value;
    timeValues.min = inputMin.value;
    timeValues.sec = inputSec.value;


    hour.innerHTML =
      timeValues.hour < 10 ? `0` + timeValues.hour : timeValues.hour;
    minutes.innerHTML =
      timeValues.min < 10 ? `0` + timeValues.min : timeValues.min;
    seconds.innerHTML =
      timeValues.sec < 10 ? `0` + timeValues.sec : timeValues.sec;

  })


}

// Count Init
function initCount() {



  let interval;

  init.addEventListener(`click`, () => {
    interval = setInterval(() => {

      if (timeValues.hour <= 0 && timeValues.min <= 0 && timeValues.sec <= 0) {
        clearInterval(interval , 0)
        return alert(` Contagem encerrada`)
      }

      if (timeValues.sec <= 0) {
        timeValues.min = timeValues.min - 1;
        timeValues.sec = 59;
      }

      timeValues.sec = timeValues.sec - 1;

      hour.innerHTML =
        timeValues.hour < 10 ? `0` + timeValues.hour : timeValues.hour;
      minutes.innerHTML =
        timeValues.min < 10 ? `0` + timeValues.min : timeValues.min;
      seconds.innerHTML =
        timeValues.sec < 10 ? `0` + timeValues.sec : timeValues.sec;

    }, 1000);

  });


  pause.addEventListener(`click`, () => {
    clearInterval(interval, 0)
  })


}




initCount();
pomodoroTimeAdd();
isToggleMenu();
resetPomodoro();
