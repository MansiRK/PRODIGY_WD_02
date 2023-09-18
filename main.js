const playBtn = document.getElementsByClassName("play")[0];
const lapBtn = document.getElementsByClassName("lap")[0];
const resetBtn = document.getElementsByClassName("reset")[0];

const clearBtn = document.getElementsByClassName("clear")[0];

const laps = document.getElementsByClassName("laps")[0];

const min = document.getElementsByClassName("minute")[0];
const sec = document.getElementsByClassName("sec")[0];
const milliSec = document.getElementsByClassName("milli-sec")[0];

let isPlay = false;

let minCounter = 0;
let minTime;

let secCounter = 0;
let secTime;

let milliSecCounter = 0;
let milliSecTime;

let isReset = false;

let lapItem = 0;

const toggle = () => {
  lapBtn.classList.remove("hidden");
  resetBtn.classList.remove("hidden");
};

const addLeadingZero = (number) => {
  return number < 10 ? `0${number}` : number;
};

const play = () => {
  if (!isPlay && !isReset) {
    playBtn.innerHTML = "Pause";

    minTime = setInterval(() => {
      minCounter++;
      if (minCounter === 60) {
        minCounter = 0;
      }
      min.innerHTML = `${addLeadingZero(minCounter)} :`;
    }, 60000);

    secTime = setInterval(() => {
      secCounter++;
      if (secCounter === 60) {
        secCounter = 0;
      }
      sec.innerHTML = `&nbsp;${addLeadingZero(secCounter)} :`;
    }, 1000);

    milliSecTime = setInterval(() => {
      if (milliSecCounter === 99) {
        milliSecCounter = 0;
      }
      milliSecCounter++;
      milliSec.innerHTML = `&nbsp;${addLeadingZero(milliSecCounter)} `;
    }, 10);

    isPlay = true;
    isReset = true;
  } else {
    playBtn.innerHTML = "Play";
    clearInterval(minTime);
    clearInterval(secTime);
    clearInterval(milliSecTime);
    isPlay = false;
    isReset = false;
    clearBtn.classList.add("hidden");
  }
  toggle();
};

const playSec = () => {};

const reset = () => {
  isReset = true;

  play();

  lapBtn.classList.add("hidden");
  resetBtn.classList.add("hidden");
  playBtn.innerHTML = "Play";
  isPlay = false;

  secCounter = 0;
  laps.innerHTML = "";

  lapItem = 0;

  min.innerHTML = "00 :";
  sec.innerHTML = "00 :";
  milliSec.innerHTML = "00";
};

const lap = () => {
  const li = document.createElement("li");
  const number = document.createElement("span");
  const timestamp = document.createElement("span");

  li.setAttribute("class", "lap-item");
  number.setAttribute("class", "number");
  timestamp.setAttribute("class", "timestamp");

  number.innerText = `${++lapItem}.`;
  timestamp.innerHTML = `${addLeadingZero(minCounter)} : ${addLeadingZero(
    secCounter
  )} : ${addLeadingZero(milliSecCounter)}`;

  li.append(number, timestamp);
  laps.append(li);

  clearBtn.classList.remove("hidden");
};

const clearAll = () => {
  //   const lapItems = laps.querySelectorAll(".lap-item");
  //   if (lapItems.length > 0) {
  laps.innerHTML = "";
  clearBtn.classList.add("hidden");
  //   }
};

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);
clearBtn.addEventListener("click", clearAll);
