document.getElementById('click-text').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');
    const clickText = document.getElementById('click-text');
    const circle = document.getElementById('circle');
    const panel = document.getElementById('panel');
  
    // Плавное исчезновение текста
    clickText.style.opacity = '0';
  
    // Анимация увеличения круга
    setTimeout(function() {
      circle.style.width = '3000px';
      circle.style.height = '3000px';
    }, 300);
  
    // Переход к белому фону и показ контента
    setTimeout(function() {
      overlay.style.display = 'none'; // Скрываем overlay
      content.style.display = 'flex'; // Показываем контент
      setTimeout(function() {
        content.style.opacity = '1'; // Плавное появление контента
        panel.classList.add('show'); // Плавное появление панели
      }, 100); // Небольшая задержка для плавного перехода
    }, 1300); // Match with CSS transition time
  });
  