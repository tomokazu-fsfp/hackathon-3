// ==========================
// Header / Footer 制御
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const toggleBtn = document.querySelector(".accordion-toggle");
    const aboutSection = document.querySelector(".about");
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".header_nav_menu");

    // ヘッダーのスクロール表示制御
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

    // アコーディオン開閉制御
    if (toggleBtn && aboutSection) {
        toggleBtn.addEventListener("click", function () {
            aboutSection.classList.toggle("open");
            toggleBtn.classList.toggle("open");
            toggleBtn.textContent = aboutSection.classList.contains("open") ? "△" : "▽";
        });
    }

    // ハンバーガーメニュー開閉制御
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            const isOpen = navMenu.classList.toggle("open");
            hamburger.textContent = isOpen ? "×" : "☰";
        });
    }
});

// ==========================
// Section Title Fade-in
// ==========================
$(window).scroll(function () {
    $(".title").each(function () {
        let scroll = $(window).scrollTop();
        let target = $(this).offset().top;
        let windowHeight = $(window).height();
        if (scroll > target - windowHeight + 200) {
            $(this).css("opacity", "1").css("transform", "translateY(0)");
        }
    });
});

// ==========================
// Flow 受講の流れ
// ==========================
$(document).ready(function () {
    $('.row').mouseenter(function () {
        $('.row').removeClass('active');
        $(this).addClass('active');
        let newImg = $(this).data('img');
        let $stack = $('.image-stack');
        let $current = $stack.find('img.active');
        let $newImage = $('<img>').attr('src', newImg).addClass('next');
        $stack.append($newImage);
        setTimeout(function () {
            $current.removeClass('active').css('opacity', 0);
            $newImage.addClass('active').css('opacity', 1);
            setTimeout(function () { $current.remove(); }, 600);
        }, 50);
    });
});

// ==========================
// Reason Slick Slider
// ==========================
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

// ==========================
// Coach Card Animation
// ==========================
$(window).scroll(function () {
    $(".coach-card").each(function () {
        var scroll = $(window).scrollTop();
        var target = $(this).offset().top;
        var windowHeight = $(window).height();
        if (scroll > target - windowHeight + 200) {
            if ($(this).hasClass("testu") || $(this).hasClass("aoki")) {
                $(this).addClass("coach-left-animate");
            }
            if ($(this).hasClass("yuriko")) {
                $(this).addClass("coach-right-animate");
            }
        }
    });
});
