//jQuery
$(function() {
  
  //DISCOスライド
  const accordion = (e) => {
    if (e.hasClass("open")) {
      e.removeClass("open");
      e.slideUp(800);
      $(".video").muted = true;
    } else {
      e.addClass("open");
      e.slideDown(800);
    }
  };
  
  $("#daylight-img").click(() => {
    accordion($(this).find("#asunan-daylight"));
  });
  
  $("#twilight-img").click(() => {
    accordion($(this).find("#asunan-twilight"));
  });
  //ここまで
  
  //TOPへ戻るボタン
  const $topBtn = $("#top-btn");
  $topBtn.hide();
  $(window).scroll(() => {
    if ($(this).scrollTop() > 100) {
      $topBtn.fadeIn();
    } else {
      $topBtn.fadeOut();
    }
  
  $topBtn.click(() => {
    $("body, html").animate({ scrollTop: 0}, 50);
    return false;
    });
  });
  //ここまで
  
  //ナビバー表示ボタン
  const $navBtn = $(".nav-btn");
  $navBtn.click(() => {
    if ($navBtn.hasClass("move")) {
      $navBtn.removeClass("move");
      $(".global_nav").slideUp();
    } else {
      $navBtn.addClass("move");
      $(".global_nav").slideDown(800);
    }
  });
  
  //スクロールしてナビバー表示
  const $navVar = $(".global_nav");
  $navVar.hide();
  $(window).scroll(() => {
    const $sanoHeight = $("#asunan-sano").height();
    if ($(this).scrollTop() > $sanoHeight) {
      $navVar.fadeIn();
      $navBtn.fadeOut;
    } else if ($(window).scrollTop() > 100){
      $navVar.fadeIn();
      $navBtn.fadeOut;
    } else {
      $navVar.fadeOut();
      $navBtn.fadeIn();
    }
  });
  //ここまで
  
});

//Vannila
window.onload = function() {
  const spinner = document.getElementById('loading');
  setTimeout(() => {
    spinner.classList.add('loaded');
  }, 700);
};
