import './styles.scss';

class CountdownTimer {
    // 
    constructor({ selector, targetDate }) 
        {
            this.selector = selector;
            this.targetDate = targetDate;

            this.countDownTime();
        }

    countDownTime() {
        const DELAY = 1000;
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimeComponent(deltaTime);
            this.updateTimer(time)
        }, DELAY)
    }

    pad(value) {
        return String(value).padStart(2, '0');
      }

    getTimeComponent(time) {

        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs }
    }

    updateTimer({ days, hours, mins, secs }) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;    
    }

    updateTimer({ days, hours, mins, secs }) {
        const refs = {
        days: document.querySelector(`${this.selector} > .field > [data-value="days"]`),
        hours: document.querySelector(`${this.selector} > .field > [data-value="hours"]`),
        mins: document.querySelector(`${this.selector} > .field > [data-value="mins"]`),
        secs: document.querySelector(`${this.selector} > .field > [data-value="secs"]`),
        };
        refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.mins.textContent = mins;
        refs.secs.textContent = secs;
        }
}


new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Nov 1, 2021'),
  });


 