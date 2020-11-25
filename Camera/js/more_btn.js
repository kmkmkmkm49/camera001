$(function() {
  $('.more-btn').on('click', function() {
    if( $(this).children().is('.open') ) {
      $(this).html('<p class="close">閉じる</p>').addClass('close-btn');
      $(this).parent().removeClass('slide-up').addClass('slide-down');
    } else {
      $(this).html('<p class="open">もっと見る</p>').removeClass('close-btn');
      $(this).parent().removeClass('slide-down').addClass('slide-up');
    }
  });
});