const carrosselContainers = document.querySelectorAll(".container-carrossel");

carrosselContainers.forEach(container => {
  const carrossel = container.querySelector(".carrossel");
  const prevBtn = container.querySelector(".prevBtn");
  const nextBtn = container.querySelector(".nextBtn");

  const cardHTML = `
    <div class="card flex flex-col items-center rounded-xl border border-[var(--border-gray-color)] p-2 bg-white">
      <picture class="relative">
        <img src="../assets/images/homem-card.png" alt="Imagem ilustrativa de um homem sorrindo">
        <div class="tag bg-[var(--color-tag)] rounded-tl-xl rounded-lg absolute top-0 left-0 p-2">
          <p class="text-[10px] font-bold text-white">NOVO</p>
        </div>
      </picture>
      <div class="title flex flex-col items-start justify-center p-4 gap-2">
        <h3 class="text-[var(--color-font-card)] text-sm font-normal">
          Lorem ipsum dolor sit amet <br> consectetuer adipiscing elit
        </h3>
        <div class="price flex items-start justify-center gap-2">
          <div class="flex flex-col items-center gap-2">
            <p class="text-[var(--color-font-card)] text-xs font-normal line-through">R$ 100,00</p>
            <p class="text-[var(--color-font-card)] text-base font-bold">R$ 79,90</p>
          </div>
          <div class="bg-[var(--color-tag-price)] text-white text-[11px] font-bold p-1 rounded-md">
            <p>10% OFF</p>
          </div>
        </div>
        <p class="text-[var(--color-font-card)] text-xs font-normal">Ou em até 10x de R$ 7,90</p>
        <button class="bg-[var(--blue-color)] text-white text-xs font-bold p-2 rounded-md w-full hover:bg-[var(--blue-color-hover)] transition duration-300 ease-in-out cursor-pointer">
          Comprar
        </button>
      </div>
    </div>
  `;

  for (let i = 0; i <= 15; i++) {
    carrossel.insertAdjacentHTML("beforeend", cardHTML);
  }

  nextBtn.addEventListener("click", () => {
    carrossel.scrollBy({ left: 300, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carrossel.scrollBy({ left: -300, behavior: "smooth" });
  });
});

document.getElementById('search-btn').addEventListener('click', () => {
  const input = document.getElementById('input-pesquisa').value.trim();
  const result = document.getElementById('search-result');

  if (input) {
    result.textContent = `Você buscou por: '${input}'`;
  } else {
    result.textContent = 'Por favor, digite algo para buscar.';
  }
});