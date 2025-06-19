// === Обёртка для загрузки DOM ===
document.addEventListener("DOMContentLoaded", function () {
  // === Плавная прокрутка к якорям ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // === Кнопка "Наверх" ===
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // === Валидация форм ===
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function (e) {
      let isValid = true;

      const inputs = form.querySelectorAll("input, textarea, select");
      inputs.forEach(input => {
        if (input.hasAttribute("required") && !input.value.trim()) {
          input.style.borderColor = "#e74c3c";
          input.style.backgroundColor = "#3a1f1f";
          isValid = false;
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert("Пожалуйста, заполните все обязательные поля.");
      }
    });
  });

  // === Анимация появления карточек при скролле ===
  const cards = document.querySelectorAll(".card, .post-card, .faq-item, .value-card, .team-card");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom && cardTop > -300) {
        if (!card.classList.contains("visible")) {
          card.classList.add("visible");
        }
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("load", checkVisibility);
});