document.addEventListener("DOMContentLoaded", function () {
    let calendarEl = document.getElementById("calendar");
    let storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        selectable: false,
        locale: "de",
        events: storedAppointments,
    });

    calendar.render();
});

function bookAppointment() {
    let date = document.getElementById("appointmentDate").value;
    let time = document.getElementById("appointmentTime").value;

    if (!date || !time) {
        alert("يرجى اختيار التاريخ والوقت للحجز.");
        return;
    }

    let storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

    let newAppointment = {
        title: "موعد محجوز ⏳",
        start: `${date}T${time}`,
        allDay: false,
    };

    storedAppointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(storedAppointments));

    alert("تم حجز الموعد بنجاح!");

    location.reload(); // تحديث الصفحة لعرض الموعد في التقويم
}
