document.addEventListener("DOMContentLoaded", function () {
    const langToggleBtn = document.getElementById("language-toggle");
    let currentLang = localStorage.getItem("lang") || "de"; // حفظ اللغة المختارة
    updateLanguage();

    langToggleBtn.addEventListener("click", function () {
        currentLang = currentLang === "de" ? "ar" : "de"; 
        localStorage.setItem("lang", currentLang);
        updateLanguage();
    });

    function updateLanguage() {
        document.querySelectorAll("[data-de]").forEach(element => {
            element.innerHTML = element.getAttribute(`data-${currentLang}`);
        });
        langToggleBtn.innerHTML = currentLang === "de" ? "🇩🇪 / 🇸🇦" : "🇸🇦 / 🇩🇪";
        document.documentElement.lang = currentLang;
        document.documentElement.setAttribute("data-lang", currentLang);
    }
});
