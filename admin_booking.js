document.addEventListener("DOMContentLoaded", function () {
    const appointmentList = document.getElementById("appointment-list");

    function loadAppointments() {
        const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointmentList.innerHTML = "";

        appointments.forEach((appointment, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${appointment.name}</td>
                <td>${appointment.email}</td>
                <td>${appointment.date}</td>
                <td>${appointment.time}</td>
                <td>
                    <button onclick="deleteAppointment(${index})">Löschen</button>
                </td>
            `;

            appointmentList.appendChild(row);
        });
    }

    window.deleteAppointment = function (index) {
        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointments.splice(index, 1);
        localStorage.setItem("appointments", JSON.stringify(appointments));
        loadAppointments();
    };

    loadAppointments();
});
