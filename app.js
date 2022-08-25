document.addEventListener('DOMContentLoaded', () => {
    const newYear = new Date('Jan 1 2021 00:00:00');
    
    const daysVal = document.querySelector('.time-count__days .time-count__val');
    const hoursVal = document.querySelector('.time-count__hours .time-count__val');
    const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
    const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

    const daysText = document.querySelector('.time-count__days .time-count__text');
    const hoursText = document.querySelector('.time-count__hours .time-count__text');
    const minutesText = document.querySelector('.time-count__minutes .time-count__text');
    const secondsText = document.querySelector('.time-count__seconds .time-count__text');

    const timeCout = () => {
        let now = new Date()
        console.log(now)
    }
})