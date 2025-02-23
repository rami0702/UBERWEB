document.addEventListener("DOMContentLoaded", function () {
    const langToggleBtn = document.getElementById("language-toggle");
    let currentLang = "de"; // اللغة الافتراضية هي الألمانية

    langToggleBtn.addEventListener("click", function () {
        currentLang = currentLang === "de" ? "ar" : "de"; // التبديل بين الألمانية والعربية

        document.querySelectorAll("[data-de]").forEach(element => {
            element.innerHTML = element.getAttribute(`data-${currentLang}`);
        });

        // تغيير أيقونة الزر
        langToggleBtn.innerHTML = currentLang === "de" ? "🇩🇪 / 🇸🇦" : "🇸🇦 / 🇩🇪";
    });
});
