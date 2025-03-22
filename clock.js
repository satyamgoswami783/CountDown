document.addEventListener("DOMContentLoaded", function () {
    const days = document.getElementById('days');
    const hour = document.getElementById('hour');
    const mins = document.getElementById("minute");
    const secs = document.getElementById('second');

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    const updateCountDown = (deadline) => {
        const currenttime = new Date();
        const timeDiff = deadline - currenttime;

        if (timeDiff < 0) {
            days.textContent = "00";
            hour.textContent = "00";
            mins.textContent = "00";
            secs.textContent = "00";
            return;
        }

        let calSec = Math.floor(timeDiff / 1000) % 60;
        let calmins = Math.floor(timeDiff / 1000 / 60) % 60;
        let calhours = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
        let caldays = Math.floor(timeDiff / 1000 / 60 / 60 / 24);

        days.textContent = formatTime(caldays);
        hour.textContent = formatTime(calhours);
        mins.textContent = formatTime(calmins);
        secs.textContent = formatTime(calSec);
    };

    const countDown = (targetDate) => {
        updateCountDown(targetDate); // Update immediately
        setInterval(() => updateCountDown(targetDate), 1000);
    };

    const targetDate = new Date("March 24, 2025 07:00:00");
    countDown(targetDate);
});
