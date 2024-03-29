document.addEventListener("DOMContentLoaded", () => {
  const newYear = new Date("Jul 1 2023 09:00:00");

  const daysVal = document.querySelector(".time-count__days .time-count__val");
  const hoursVal = document.querySelector(
    ".time-count__hours .time-count__val"
  );
  const minutesVal = document.querySelector(
    ".time-count__minutes .time-count__val"
  );
  const secondsVal = document.querySelector(
    ".time-count__seconds .time-count__val"
  );

  const daysText = document.querySelector(
    ".time-count__days .time-count__text"
  );
  const hoursText = document.querySelector(
    ".time-count__hours .time-count__text"
  );
  const minutesText = document.querySelector(
    ".time-count__minutes .time-count__text"
  );
  const secondsText = document.querySelector(
    ".time-count__seconds .time-count__text"
  );

  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

  const timeCount = () => {
    let now = new Date();
    let leftUntil = newYear - now;

    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    let seconds = Math.floor(leftUntil / 1000) % 60;

    daysVal.textContent = days;
    hoursVal.textContent = hours;
    minutesVal.textContent = minutes;
    secondsVal.textContent = seconds;

    daysText.textContent = declOfNum(days, ["day", "days", "days"]);
    hoursText.textContent = declOfNum(hours, ["hour", "hours", "hours"]);
    minutesText.textContent = declOfNum(minutes, [
      "minute",
      "minutes",
      "minutes",
    ]);
    secondsText.textContent = declOfNum(seconds, [
      "second",
      "seconds",
      "seconds",
    ]);
  };

  timeCount();
  setInterval(timeCount, 1000);
});

window.addEventListener("DOMContentLoaded", () => {
  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundAlpha: 0.0,
    color1: 0xff0d0d,
    color2: 0x0,
    wingSpan: 40.0,
    separation: 100.0,
    alignment: 77.0,
    cohesion: 5.0,
    quantity: 3.0,
  });

  setTimeout(() => {
    const main = document.querySelector("main");
    // main.style.opacity = 1;
    // main.style.filter = 'blur(0px)'
  }, 1000);
});
