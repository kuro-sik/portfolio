document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll('.contacts-toggle');
    const menu = document.querySelector('.contacts-menu');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.toggle('active');
        });
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !Array.from(toggles).some(t => t.contains(e.target))) {
            menu.classList.remove('active');
        }
    });
});