const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = document.querySelector(selector);
        this.targetDate = targetDate;
    };
    startTimer() {
        setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            // console.log(time)
            const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
            const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
            this.changeTime(days, hours, mins, secs);
        }, 1000)
    };
    changeTime(days, hours, mins, secs) {
    this.selector.querySelector('[data-value="days"]').textContent = days;
    this.selector.querySelector('[data-value="hours"]').textContent = hours;
    this.selector.querySelector('[data-value="mins"]').textContent = mins;
    this.selector.querySelector('[data-value="secs"]').textContent = secs;
    };
    pad(value) {
      return String(value).padStart(2, '0');
    };
};
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 17, 2021'),
}).startTimer();
