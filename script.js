// Get references to the DOM elements
const monthYear = document.getElementById('monthYear');
const daysContainer = document.getElementById('days');

// Initialize the current date
let currentDate = new Date();

// Function to render the calendar
function renderCalendar() {
    // Get the current month and year
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // Update the month and year display
    monthYear.innerText = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
    
    // Clear the days container
    daysContainer.innerHTML = '';

    // Get the first day of the month and the last date of the month
    const firstDay = new Date(year, month, 0).getDay(); // Changed to 1 to get the first day of the month
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Create empty divs for the days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div class="day"></div>`;
    }

    // Create divs for each day of the month
    for (let date = 1; date <= lastDate; date++) {
        // Check if the date is today
        const isToday = date === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
        daysContainer.innerHTML += `<div class="day ${isToday ? 'today' : ''}">${date}</div>`;
    }
}

// Function to go to the previous month
function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

// Function to go to the next month
function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

// Initial rendering of the calendar
renderCalendar();