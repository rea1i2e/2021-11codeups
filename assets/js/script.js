"use strict";

$(function () {});
jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var topBtn = $('.pagetop');
  topBtn.hide(); // ボタンの表示設定

  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  }); // ボタンをクリックしたらスクロールして上に戻る

  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  }); // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  }); // ハンバーガー

  $('.js-hamburger-btn').on('click', function () {
    // js-btnクラスをクリックすると、
    $('.header__nav , .header__btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  });
  $('.header__nav-link').on('click', function () {
    // drawermenu内のリンクをクリックすると、、
    $('.header__nav , .header__btn-line').removeClass('open'); // メニューとバーガーの線のopenクラスを外す
  }); // ヘーダーとpagetopボタン

  $(window).on('scroll', function () {
    if (jQuery('.mainview').height() < jQuery(this).scrollTop()) {
      jQuery('.header').addClass('js-change-background-color');
      jQuery('.pagetop').addClass('js-pagetop-appear');
    } else {
      jQuery('.header').removeClass('js-change-background-color');
      jQuery('.pagetop').removeClass('js-pagetop-appear');
    }
  }); //ドロワーメニュー

  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");
  }); // slick

  $('.js-slick-slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    dotsClass: "js-costum-dots",
    // dotsのクラス名を変更
    swipe: true
  });
});