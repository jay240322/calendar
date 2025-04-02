const monthYear = document.getElementById('monthYear');
const daysContainer = document.getElementById('days');

let currentDate = new Date();

function renderCalendar() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    monthYear.innerText = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
    
    daysContainer.innerHTML = '';

    const firstDay = new Date(year, month, 0).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div class="day"></div>`;
    }

    for (let date = 1; date <= lastDate; date++) {
        const isToday = date === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
        daysContainer.innerHTML += `<div class="day ${isToday ? 'today' : ''}">${date}</div>`;
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

renderCalendar();
