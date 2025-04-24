function setupCarousel(carouselId, prevBtnId, nextBtnId, paginationClass, cardsPerPage) {
  const carrossel = document.getElementById(carouselId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  const pagination = document.createElement('div');
  const totalCards = carrossel.querySelectorAll('#card').length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  let currentPage = 0;

  pagination.classList.add(paginationClass);
  carrossel.parentElement.appendChild(pagination);

  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    pagination.appendChild(dot);
  }

  function updatePagination() {
    const dots = pagination.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentPage);
    });
  }

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      const scrollAmount = currentPage * carrossel.offsetWidth;
      carrossel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
      updatePagination();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      const scrollAmount = currentPage * carrossel.offsetWidth;
      carrossel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
      updatePagination();
    }
  });
}

// Configura os dois carrosséis
setupCarousel('carrossel', 'prevBtn', 'nextBtn', 'pagination', 5);
setupCarousel('carrossel-end', 'prevBtn-end', 'nextBtn-end', 'pagination-end', 5);