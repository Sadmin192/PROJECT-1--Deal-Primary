/* HEADER  */

/* BACKGROUND  */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const h1 = header.querySelector('h1');

  // Промяна на цвета на header в зависимост от времето на деня
  const hour = new Date().getHours();
  const isDayTime = hour > 6 && hour < 18;
  header.style.backgroundColor = isDayTime ? '#87CEEB' : '#2F4F4F';

  // Анимация, която реагира на движението на мишката
  document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const deltaX = (clientX - window.innerWidth / 2) * 0.05;
      const deltaY = (clientY - window.innerHeight / 2) * 0.05;
      h1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });

  // Добавяне на скрол ефект
  window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
  });
});

/*Разтягане надолу като се отвори подменю*/
document.addEventListener('DOMContentLoaded', function() {
  var mainNav = document.getElementById('mainNav');
  var mainContent = document.getElementById('mainContent');
  mainNav.addEventListener('mouseover', function() {
    mainContent.style.marginTop = '150px'; // For CHANGE-------------------|
  });
  mainNav.addEventListener('mouseout', function() {
    mainContent.style.marginTop = '0';
  });
});




/* MAIN */
document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('#slides img');
  const textContainer = document.getElementById('image-text');
  const texts = [
      'Използвайте силата на технологичния напредък за оптимизиране на времето и ресурсите си.',
      'Превърнете всяко предизвикателство във възможност.',
      'Гарантирайте безопасността с професионални решения за видеонаблюдение.',
      'Иновациите в комуникацията между технологиите отварят вратата към безпроблемната автоматизация на производствените процеси.',
      'Оптимизирайте процесите и максимизирайте ефективността с нашите автоматизирани решения за вашия бизнес.'
  ];

  const updateSlideAndText = () => {
      slides.forEach(slide => slide.style.display = 'none');
      slides[currentSlide].style.display = 'block';
      textContainer.textContent = texts[currentSlide];
      currentSlide = (currentSlide + 1) % slides.length;
  };

  updateSlideAndText();
  setInterval(updateSlideAndText, 8000);
});

/* Тема на сайта */
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Проверка на текущата тема при зареждане на страницата
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
  }
});
