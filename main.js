const playBtn = document.getElementsByClassName("play")[0];
const lapBtn = document.getElementsByClassName("lap")[0];
const resetBtn = document.getElementsByClassName("reset")[0];

const sec = document.getElementsByClassName("sec")[0];

let isPlay = false;

const toggle = () => {
  lapBtn.classList.remove("hidden");
  resetBtn.classList.remove("hidden");
};

const play = () => {
  if (isPlay) {
    playBtn.innerHTML = "Play";
    isPlay = false;
  } else {
    playBtn.innerHTML = "Pause";
    isPlay = true;
  }
  toggle();
};

const playSec = () => {
  setInterval(() => {
    sec.innerHTML = sec++;
  }, 1000);
};

const reset = () => {
  lapBtn.classList.add("hidden");
  resetBtn.classList.add("hidden");
  playBtn.innerHTML = "Play";
  isPlay = false;
};

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
