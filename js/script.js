
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

const items = document.querySelectorAll('.slider-item');
let current = 1;

function update() {
  items.forEach((item, i) => {
    item.classList.remove('is-prev', 'is-active', 'is-next');

    if (i === current) item.classList.add('is-active');
    if (i === current - 1) item.classList.add('is-prev');
    if (i === current + 1) item.classList.add('is-next');
  });
}

document.querySelector('.next').addEventListener('click', () => {
  current = Math.min(current + 1, items.length - 1);
  update();
});

document.querySelector('.prev').addEventListener('click', () => {
  current = Math.max(current - 1, 0);
  update();
});

update();

