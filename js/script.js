
// モーダル
// const modal = document.getElementById("modal");
// const modalImg = document.getElementById("modal-img");
// const closeBtn = document.querySelector(".close");

// document.querySelectorAll(".card img").forEach(img => {
//   img.addEventListener("click", () => {
//     modal.style.display = "flex";
//     modalImg.src = img.src;
//   });
// });

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

document.querySelectorAll(".carousel-item img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});



// ===== 3D Carousel=====
document.addEventListener('DOMContentLoaded', () => {
  const items = [...document.querySelectorAll('.carousel-item')];
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  if (!items.length) return;

  let current = 0;

  function updateCarousel() {
    items.forEach((item, i) => {
      item.classList.remove('is-prev', 'is-active', 'is-next');

      if (i === current) {
        item.classList.add('is-active');
      } else if (i === (current - 1 + items.length) % items.length) {
        item.classList.add('is-prev');
      } else if (i === (current + 1) % items.length) {
        item.classList.add('is-next');
      } else {
        item.style.opacity = '0';
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % items.length;
    updateCarousel();
  });

  updateCarousel();
});
