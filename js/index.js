function setupCarousel(carouselId, prevBtnId, nextBtnId, paginationClass, cardsPerPage) {
  const carrossel = document.getElementById(carouselId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  const cards = carrossel.querySelectorAll('#card');
  const totalCards = cards.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  let currentPage = 0;

  const pagination = document.createElement('div');
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

  function scrollToPage(page) {
    const scrollAmount = page * carrossel.offsetWidth;
    carrossel.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
    currentPage = page;
    updatePagination();
  }

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      scrollToPage(currentPage + 1);
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
      scrollToPage(currentPage - 1);
    }
  });
}

setupCarousel('carrossel', 'prevBtn', 'nextBtn', 'pagination', 5);
setupCarousel('carrossel-end', 'prevBtn-end', 'nextBtn-end', 'pagination-end', 5);

document.getElementById('search-btn').addEventListener('click', () => {
  const input = document.getElementById('input-pesquisa').value.trim();
  const result = document.getElementById('search-result');

  if (input) {
    result.textContent = `Você buscou por: '${input}'`;
  } else {
    result.textContent = 'Por favor, digite algo para buscar.';
  }
});