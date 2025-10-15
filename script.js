document.addEventListener('DOMContentLoaded', () => {
  const mainPlayer = document.getElementById('mainPlayer');
  const loadingOverlay = mainPlayer.querySelector('.loading-overlay');

  mainPlayer.addEventListener('click', () => {
    loadingOverlay.style.display = 'flex';
    
    // Simulate loading for 2 seconds before redirect
    setTimeout(() => {
      window.location.href = 'register.html';
    }, 2000);
  });

  // Make related videos clickable
  document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('click', () => {
      window.location.href = 'register.html';
    });
  });
});