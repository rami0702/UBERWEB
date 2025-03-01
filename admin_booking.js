document.addEventListener("DOMContentLoaded", function () {
    const appointmentList = document.getElementById("appointment-list");

    // تحميل المواعيد من Firebase
    function loadAppointments() {
        database.ref("appointments").on("value", (snapshot) => {
            const appointments = snapshot.val();
            appointmentList.innerHTML = "";

            if (appointments) {
                Object.keys(appointments).forEach((key) => {
                    const appointment = appointments[key];
                    const row = document.createElement("tr");

                    row.innerHTML = `
                        <td>${appointment.name}</td>
                        <td>${appointment.email}</td>
                        <td>${appointment.date}</td>
                        <td>${appointment.time}</td>
                        <td>
                            <button onclick="editAppointment('${key}')">تعديل</button>
                            <button onclick="deleteAppointment('${key}')">حذف</button>
                        </td>
                    `;

                    appointmentList.appendChild(row);
                });
            }
        });
    }

    // حذف موعد
    window.deleteAppointment = function (key) {
        database.ref("appointments/" + key).remove()
            .then(() => {
                alert("تم حذف الموعد بنجاح!");
            })
            .catch((error) => {
                console.error("Error deleting appointment: ", error);
                alert("حدث خطأ أثناء حذف الموعد. يرجى المحاولة مرة أخرى.");
            });
    };

    // تعديل موعد
    window.editAppointment = function (key) {
        const newName = prompt("الاسم الجديد:");
        const newEmail = prompt("البريد الإلكتروني الجديد:");
        const newDate = prompt("التاريخ الجديد (YYYY-MM-DD):");
        const newTime = prompt("الوقت الجديد (HH:MM):");

        if (newName && newEmail && newDate && newTime) {
            const updatedAppointment = {
                name: newName,
                email: newEmail,
                date: newDate,
                time: newTime
            };

            database.ref("appointments/" + key).update(updatedAppointment)
                .then(() => {
                    alert("تم تعديل الموعد بنجاح!");
                })
                .catch((error) => {
                    console.error("Error updating appointment: ", error);
                    alert("حدث خطأ أثناء تعديل الموعد. يرجى المحاولة مرة أخرى.");
                });
        }
    };

    // تحميل المواعيد عند فتح الصفحة
    loadAppointments();
});
