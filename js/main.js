
/*-------------------------------------------
flow 受講の流れ
-------------------------------------------*/
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




