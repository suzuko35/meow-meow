
// モーダル
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
// 戻るボタン
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// ===== 3D Carousel =====
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let current = 0;

function updateCarousel() {
  items.forEach((item, i) => {
    item.classList.remove('is-prev', 'is-active', 'is-next');

    if (i === current) item.classList.add('is-active');
    if (i === current - 1) item.classList.add('is-prev');
    if (i === current + 1) item.classList.add('is-next');
  });
}

prevBtn.addEventListener('click', () => {
  current = Math.max(current - 1, 0);
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  current = Math.min(current + 1, items.length - 1);
  updateCarousel();
});

updateCarousel();
