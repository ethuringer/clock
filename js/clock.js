function realTime() {
    const now = new Date();
    const displayedTime = new Intl.DateTimeFormat([], {
        timeStyle: 'medium',
        hour12: false
    }).format(now);

    document.querySelector('.clock').textContent = displayedTime;
}
let showSeconds = setInterval(realTime, 0, 1000);