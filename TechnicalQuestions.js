// JavaScript код
document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('section');
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
  
    sections.forEach(function(section) {
      section.addEventListener('click', function() {
        // Премахване на класа 'active' от всички секции
        sections.forEach(function(sec) { sec.classList.remove('active'); });
        // Добавяне на класа 'active' към кликнатата секция
        this.classList.add('active');
        // Показване на оверлея
        overlay.style.display = 'block';
      });
    });
  
    // При кликване на оверлея, премахване на 'active' класа и скриване на оверлея
    overlay.addEventListener('click', function() {
      sections.forEach(function(section) {
        section.classList.remove('active');
      });
      overlay.style.display = 'none';
    });
  });
  