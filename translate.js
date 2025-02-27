document.addEventListener("DOMContentLoaded", function () {
    const langToggleBtn = document.getElementById("language-toggle");
    let currentLang = "de"; // اللغة الافتراضية هي الألمانية
    const flags = { de: "🇩🇪 / 🇸🇦", ar: "🇸🇦 / 🇩🇪" }; // أيقونات اللغات

    langToggleBtn.addEventListener("click", function () {
        currentLang = currentLang === "de" ? "ar" : "de"; // التبديل بين الألمانية والعربية

        document.documentElement.lang = currentLang; // تحديث لغة HTML
        document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr"; // ضبط الاتجاه

        document.querySelectorAll("[data-de]").forEach(element => {
            if (element.children.length === 0) {
                // إذا كان العنصر لا يحتوي على عناصر فرعية، استخدم textContent
                element.textContent = element.getAttribute(`data-${currentLang}`);
            } else {
                // إذا كان يحتوي على عناصر داخلية، استخدم innerHTML
                element.innerHTML = element.getAttribute(`data-${currentLang}`);
            }
        });

        langToggleBtn.textContent = flags[currentLang]; // تحديث زر اللغة
    });
});
