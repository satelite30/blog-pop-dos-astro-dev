// Script para navegación entre posts
document.addEventListener('DOMContentLoaded', function () {
  // Detectar el post actual desde la URL
  const currentPage = window.location.pathname.split('/').pop() || 'post1.html';
  const postNumber =
    parseInt(currentPage.replace('post', '').replace('.html', '')) || 1;

  // Definir navegación circular: 1->2->3->4->1
  const nextPostNumber = postNumber === 4 ? 1 : postNumber + 1;
  const prevPostNumber = postNumber === 1 ? 4 : postNumber - 1;

  // Agregar event listeners a los chevrons
  const nextBtn = document.getElementById('nextPost');
  const prevBtn = document.getElementById('prevPost');

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      window.location.href = `post${nextPostNumber}.html`;
    });
    // Agregar efecto hover
    nextBtn.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.3)';
      this.style.transition = 'transform 0.3s ease';
    });
    nextBtn.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      window.location.href = `post${prevPostNumber}.html`;
    });
    // Agregar efecto hover
    prevBtn.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.3)';
      this.style.transition = 'transform 0.3s ease';
    });
    prevBtn.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  }
});
