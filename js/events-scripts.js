document.addEventListener('DOMContentLoaded', function () {
    const events = {
        0: {
            1: 'New Year Celebration',
            15: 'Community Meeting',
            26: 'Republic Day Celebration'
        },
        7: {
            5: 'Women\'s Health Workshop',
            10: 'Job Fair for Differently Abled',
            15: 'Independence Day Celebration',
            20: 'Legal Aid Camp',
            25: 'LGBTQ+ Support Group Meeting'
        }
    };

    const calendarContainer = document.getElementById('calendar');
    const monthSelect = document.getElementById('month-select');

    function populateCalendar(month) {
        calendarContainer.innerHTML = '';
        const daysInMonth = new Date(2024, month + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');

            const dayTitle = document.createElement('h3');
            dayTitle.textContent = day;
            dayElement.appendChild(dayTitle);

            if (events[month] && events[month][day]) {
                const eventElement = document.createElement('p');
                eventElement.textContent = events[month][day];
                dayElement.appendChild(eventElement);
            }

            calendarContainer.appendChild(dayElement);
        }
    }

    monthSelect.addEventListener('change', function () {
        const selectedMonth = parseInt(monthSelect.value);
        populateCalendar(selectedMonth);
    });

    // Initialize calendar with the current month
    const currentMonth = new Date().getMonth();
    monthSelect.value = currentMonth;
    populateCalendar(currentMonth);
});
