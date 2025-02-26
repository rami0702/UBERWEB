document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("booking-form");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;

            if (!name || !email || !date || !time) {
                alert("Bitte alle Felder ausfüllen!");
                return;
            }

            const appointment = { name, email, date, time };
            let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
            appointments.push(appointment);

            localStorage.setItem("appointments", JSON.stringify(appointments));

            alert("Termin erfolgreich gebucht!");
            bookingForm.reset();
        });
    }
});
