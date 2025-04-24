const carrossel = document.getElementById('carrossel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pagination = document.createElement('div'); 

const cardsPerPage = 5; 
const totalCards = document.querySelectorAll('#carrossel #card').length;
const totalPages = Math.ceil(totalCards / cardsPerPage);

let currentPage = 0;

pagination.classList.add('pagination');
document.querySelector('.container-carrossel').appendChild(pagination);

for (let i = 0; i < totalPages; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active'); 
  pagination.appendChild(dot);
}

function updatePagination() {
  const dots = document.querySelectorAll('.pagination .dot');
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