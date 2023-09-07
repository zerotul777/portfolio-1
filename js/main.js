const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// 2. Проврка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// 3. Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}

// 4. Если меняются системные настройки - меняем тему
window
    .matchMedia('(prefers-color-scheme: dark')
    .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light';

        if (newColorScheme === 'dark') {
            btnDarkMode.classList.add("dark-mode-btn--active");
            document.body.classList.add("dark");
            localStorage.setItem('darkMode', 'dark');
        } else {
            btnDarkMode.classList.remove("dark-mode-btn--active");
            document.body.classList.remove("dark");
            localStorage.setItem('darkMode', 'light');
        }
})



