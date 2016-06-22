/**
 * Created by Ursa on 2016/6/20.
 */
$(function(){
      $('#nav>ul>li').hover(function(){
          $(this).find('.nav-triangle').addClass("current");
          $(this).find('.sub-nav').stop(true).slideDown(300);
      },function(){
          $(this).find('.nav-triangle').removeClass("current");
          $(this).find('.sub-nav').stop(true).slideUp(300);
      });
        $('.sub-nav ul>li').hover(function(){
            $(this).find('.nav-line').addClass("current");
        },function(){
            $(this).find('.nav-line').removeClass("current");
        });
        $('.input-box input').focus(function () {
            if($(this).val().length==0){
                $(this).next('label').css("animation","bounce-up 0.1s linear forwards");
                $(this).next('label').css("-webkit-animation","bounce-up 0.1s linear forwards");
                $(this).next('label').css("-moz-animation","bounce-up 0.1s linear forwards");
                $(this).next('label').css("-ms-animation","bounce-up 0.1s linear forwards");
                $(this).next('label').css("-o-animation","bounce-up 0.1s linear forwards");
            }
        });
        $('.input-box input').blur(function () {
            if($(this).val().length==0){
                $(this).next('label').css("animation","bounce-down 0.1s linear forwards");
                $(this).next('label').css("-webkit-animation","bounce-down 0.1s linear forwards");
                $(this).next('label').css("-moz-animation","bounce-down 0.1s linear forwards");
                $(this).next('label').css("-ms-animation","bounce-down 0.1s linear forwards");
                $(this).next('label').css("-o-animation","bounce-down 0.1s linear forwards");

            }
        });
    }
);