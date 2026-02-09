
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

document.querySelectorAll(".carousel-item img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});



// $(function(){
//   $('.slider').slick({
//     autoplay: true, //自動でスクロール
//     autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
//     speed: 5000, //スライドが流れる速度を設定
//     cssEase: "linear", //スライドの流れ方を等速に設定
//     slidesToShow: 4, //表示するスライドの数
//     swipe: true, // 操作による切り替え
//     arrows: true, //矢印
//     pauseOnFocus: true, //スライダーをフォーカスした時にスライドを停止させるか
//     pauseOnHover: true, //スライダーにマウスホバーした時にスライドを停止させるか
//     swipe: true,
//     infinite: true,
//     focusOnSelect	: true,
//     responsive: [
//       {
//         breakpoint: 750,
//         settings: {
//           slidesToShow: 3, //画面幅750px以下でスライド3枚表示
//         }
//       }
//     ]
//   });
// });

const swiper = new Swiper(".swiper", {
  loop: true, // デフォルトはfalse
  autoplay: { // 自動再生
  delay: 1000, // 1秒後に次のスライド（初期値：3000）
  disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
   // スライドの表示枚数
  slidesPerView: 1,
  breakpoints: {
    // スライドの表示枚数：500px以上の場合
    768: {
      slidesPerView: 3,
    }
  }
  spaceBetween: 30,
});





window.addEventListener("DOMContentLoaded", () => {
  // モーダルを取得
  const modal = document.getElementById("modal");
  // モーダルを表示するボタンを全て取得
  const openModalBtns = document.querySelectorAll(".js-open-modal");
  // モーダルを閉じるボタンを全て取得
  const closeModalBtns = document.querySelectorAll(".js-close-modal");

  // Swiperの設定
  // const swiper = new Swiper(".swiper", {
  //   loop: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   spaceBetween: 30,
  // });

  // モーダルを表示するボタンをクリックしたとき
  openModalBtns.forEach((openModalBtn) => {
    openModalBtn.addEventListener("click", () => {
      // data-slide-indexに設定したスライド番号を取得
      const modalIndex = openModalBtn.dataset.slideIndex;
      swiper.slideTo(modalIndex);
      modal.classList.add("is-active");
    });
  });

  // モーダルを閉じるボタンをクリックしたとき
  closeModalBtns.forEach((closeModalBtn) => {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("is-active");
    });
  });
});