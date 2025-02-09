let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

function bookAppointment() {
    const date = document.getElementById("appointmentDate").value;
    if (!date) {
        document.getElementById("appointmentMessage").innerText = "Bitte wählen Sie ein Datum aus.";
        return;
    }
    appointments.push(date);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    alert("Termin gebucht für: " + date);
    document.getElementById("appointmentMessage").innerText = "Ihr Termin wurde erfolgreich gebucht.";
    loadAppointments();
}

function addReview() {
    const name = prompt("Ihr Name:");
    if (!name) return;
    const text = prompt("Ihre Bewertung:");
    if (!text) return;
    const review = document.createElement("div");
    review.innerHTML = `<strong>${name}</strong>: ${text}`;
    document.getElementById("reviewsContainer").appendChild(review);
}

function loadAppointments() {
    const list = document.getElementById("appointmentsList");
    list.innerHTML = "";
    appointments.forEach((appt, index) => {
        list.innerHTML += `<p>${appt} <button onclick="deleteAppointment(${index})">Löschen</button></p>`;
    });
}

function deleteAppointment(index) {
    appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    loadAppointments();
}

function clearAppointments() {
    appointments = [];
    localStorage.removeItem("appointments");
    loadAppointments();
}

function toggleChat() {
    const chat = document.getElementById("chatPopup");
    chat.style.display = chat.style.display === "block" ? "none" : "block";
}

function sendMessage() {
    const input = document.getElementById("chatInput").value;
    if (!input) return;
    const messages = document.getElementById("chatMessages");
    messages.innerHTML += `<p><strong>Sie:</strong> ${input}</p>`;
    document.getElementById("chatInput").value = "";
    setTimeout(() => {
        messages.innerHTML += `<p><strong>Bot:</strong> Vielen Dank für Ihre Nachricht!</p>`;
    }, 1000);
}

document.addEventListener("DOMContentLoaded", loadAppointments);
