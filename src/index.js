import './styles.scss';

class CountdownTimer {

    constructor({ targetDate, refs = {
        days: document.querySelector('[data-value="days"]'),
        hours: document.querySelector('[data-value="hours"]'),
        mins: document.querySelector('[data-value="mins"]'),
        secs: document.querySelector('[data-value="secs"]')
    }}) 
        {
            this.targetDate = targetDate;
            this.refs = refs;

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
}


new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Nov 1, 2021'),
  });

 