document.getElementById('click-text').addEventListener('click', function() {
  const overlay = document.getElementById('overlay');
  const content = document.getElementById('content');
  const clickText = document.getElementById('click-text');
  const circle = document.getElementById('circle');
  const panel = document.getElementById('panel');

  // Fade out click text
  clickText.style.opacity = '0';

  // Expand circle animation
  setTimeout(function() {
    circle.style.width = '3000px';
    circle.style.height = '3000px';
  }, 300);

  // Show main content
  setTimeout(function() {
    overlay.style.display = 'none';
    content.style.display = 'flex';
    setTimeout(function() {
      content.style.opacity = '1';
      panel.classList.add('show');
    }, 100);
  }, 1300);
});
