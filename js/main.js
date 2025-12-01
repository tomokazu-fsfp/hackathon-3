// ==========================
// Header スクロール制御
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const footerTop = footer ? footer.getBoundingClientRect().top + scrollY : Infinity;

        if (scrollY > windowHeight && scrollY + windowHeight < footerTop) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

// ==========================
// ハンバーガーメニュー制御
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".header_nav_menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            const isOpen = navMenu.classList.toggle("open");
            hamburger.textContent = isOpen ? "×" : "☰";
        });
    }
});

// ==========================
// About アコーディオン制御
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".accordion-toggle");
    const aboutSection = document.querySelector(".about");

    if (toggleBtn && aboutSection) {
        toggleBtn.addEventListener("click", function () {
            aboutSection.classList.toggle("open");
            toggleBtn.classList.toggle("open");
            toggleBtn.textContent = aboutSection.classList.contains("open") ? "▲" : "▼";
        });
    }
});

// =================================================
//  Section Title Fade-in
// =================================================
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う/for文と同じ役割
    $(".title ").each(function () {
      // スクロールした距離
      // fadeinクラスの要素までの距離
      // .offsetは要素の座標をとるメソッド。.topをつけることでy軸方向の座標をとる
      // thisはfadeinクラスが該当する
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

// =================================================
// flow 受講の流れ
// =================================================
$(document).ready(function () {
  $('.row').mouseenter(function () {
    // 行のactive切り替え
    $('.row').removeClass('active');
    $(this).addClass('active');

    // 新しい画像パスを取得
    let newImg = $(this).data('img');
    let $stack = $('.image-stack');

    // 既存のactive画像を取得
    let $current = $stack.find('img.active');

    // 新しい画像要素を作成して追加
    let $newImage = $('<img>').attr('src', newImg).addClass('next');
    $stack.append($newImage);

    // アニメーション開始
    setTimeout(function () {
      $current.removeClass('active').css('opacity', 0);
      $newImage.addClass('active').css('opacity', 1);

      // 古い画像を削除
      setTimeout(function () {
        $current.remove();
      }, 600); // フェードアウト完了後に削除
    }, 50);
  });
});

// ================================================
// Reason Slick Slider
// ================================================
$('.single-item').slick({
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  centerMode: true,
  centerPadding: "0px",
  variableWidth: false, 
  responsive: [
      {
        breakpoint: 765,
        settings: {
          arrows: false,
          centerMode: false,
        variableWidth: false

        },
      },
    ],
});

// ============================================
// Coach Card Animation
// ===========================================
$(window).scroll(function () {
  $(".coach-card").each(function () {
    var scroll = $(window).scrollTop();
    var target = $(this).offset().top;
    var windowHeight = $(window).height();

    if (scroll > target - windowHeight + 200) {
      // testu, yuriko, aoki で左右の動きを分ける
      if ($(this).hasClass("testu") || $(this).hasClass("aoki")) {
        $(this).addClass("coach-left-animate");
      }
      if ($(this).hasClass("yuriko")) {
        $(this).addClass("coach-right-animate");
      }
    }
  });
});
