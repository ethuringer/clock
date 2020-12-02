const now = (date) => new Intl.DateTimeFormat([], {
    timeStyle: 'medium',
    hour12: false
}).format(new Date());

document.querySelector('.clock').textContent = now(new Date());