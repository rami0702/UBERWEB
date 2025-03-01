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
                alert("يرجى ملء جميع الحقول!");
                return;
            }

            const appointment = {
                name: name,
                email: email,
                date: date,
                time: time
            };

            // حفظ الموعد في Firebase
            const newAppointmentRef = database.ref("appointments").push();
            newAppointmentRef.set(appointment)
                .then(() => {
                    alert("تم حجز الموعد بنجاح!");
                    bookingForm.reset();
                })
                .catch((error) => {
                    console.error("Error saving appointment: ", error);
                    alert("حدث خطأ أثناء حجز الموعد. يرجى المحاولة مرة أخرى.");
                });
        });
    }
});
