const now = new Date().getTime();
const end = new Date("february 24 2021 00:00").getTime();
var timeDay = 0;
var timeHour = 0;
var timeMinuts = 0;
var timeSecond = 0;
var mainTime = end - now;
var time = mainTime;
const countdown = () => {
  //End of Interval
  if (Math.round(mainTime / 1000) < 1) {
    $("#r-day").remove();
    $("#r-hour").remove();
    $("#r-min").remove();
    $("#r-sec").remove();
    $("#finish").html("finish");
    clearInterval(interval);
  } else {
    time = mainTime;
    time = time / 1000;
    time = time / 60;
    time = time / 60;
    time = time / 24;
    timeDay = Math.trunc(time);
    time = (time - timeDay) * 24;
    timeHour = Math.trunc(time);
    time = (time - timeHour) * 60;
    timeMinuts = Math.trunc(time);
    time = Math.round((time - timeMinuts) * 60);
    timeSecond = Math.trunc(time);
    $("#day").html(`<p class="time-number">${timeDay}</p>`);
    $("#hour").html(`<p class="time-number">${timeHour}</p>`);
    $("#min").html(`<p class="time-number">${timeMinuts}</p>`);
    if (timeSecond === 60) {
      $("#sec").html(`<p class="time-number">0</p>`);
    } else {
      $("#sec").html(`<p class="time-number">${timeSecond}</p>`);
    }

    $("#day-text").html(`<p class="time-text">Day</p>`);
    $("#hour-text").html(`<p class="time-text">Hour</p>`);
    $("#min-text").html(`<p class="time-text">Minutes</p>`);
    $("#sec-text").html(`<p class="time-text">second</p>`);
  }
  mainTime = mainTime - 1000;
};
let interval = setInterval(countdown, 1000);
