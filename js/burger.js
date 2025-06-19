document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header__burger');
    const navbar = document.querySelector('.navbar');
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
        
        // Блокировка скролла при открытом меню
        if (navbar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.navbar__element a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            navbar.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});