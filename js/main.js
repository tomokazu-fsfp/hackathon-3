$(document).ready(function () {
  $('.row').mouseenter(function () {
    $('.row').removeClass('active');
    $(this).addClass('active');
  });
});

$(document).ready(function () {
  $('.row').mouseenter(function () {
    // 行のactive切り替え
    $('.row').removeClass('active');
    $(this).addClass('active');

    // 新しい画像パスを取得
    let newImg = $(this).data('img');
    let $img = $('#main-image');

    // ページめくり風アニメーション
    // $img.addClass('flip');

    setTimeout(function () {
      $img.attr('src', newImg); // 画像差し替え
      $img.removeClass('flip'); // 戻す
    }, 300); // 半分のタイミングで差し替え
  });
})