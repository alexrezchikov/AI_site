// Мобильное меню
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Валидация и отправка формы
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const msgBox = document.getElementById('formMessage');

    // Сброс
    msgBox.className = 'form-message';
    msgBox.textContent = '';

    // Валидация
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
      msgBox.className = 'form-message error';
      msgBox.textContent = 'Пожалуйста, введите имя (минимум 2 символа).';
      return;
    }

    if (!emailRegex.test(email)) {
      msgBox.className = 'form-message error';
      msgBox.textContent = 'Пожалуйста, введите корректный email.';
      return;
    }

    if (message.length < 10) {
      msgBox.className = 'form-message error';
      msgBox.textContent = 'Сообщение должно содержать минимум 10 символов.';
      return;
    }

    // Имитация отправки
    msgBox.className = 'form-message success';
    msgBox.textContent = `Спасибо, ${name}! Ваше сообщение отправлено.`;
    form.reset();

    setTimeout(() => {
      msgBox.className = 'form-message';
    }, 5000);
  });
}

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});