/**
 * Created by Ursa on 2016/6/20.
 */
$(function(){
      function navMouseEnter(){
          $(this).find('.nav-triangle').addClass("current");
          $(this).find('.sub-nav').stop(true).slideDown(300);
      }
      function navMouseLeave(){
        $(this).find('.nav-triangle').removeClass("current");
        $(this).find('.sub-nav').stop(true).slideUp(300);
      }
      function subNavMouseEnter(){
          $(this).find('.nav-line').addClass("current");
      }
      function subNavMouseLeave(){
          $(this).find('.nav-line').removeClass("current");
      }

      $('#nav>ul>li').hover(navMouseEnter,navMouseLeave);
      $('.sub-nav ul>li').hover(subNavMouseEnter,subNavMouseLeave);
      $('#nav>ul').on('click',function(e){
          var node=$(e.target);
          if(e.target && node.parents('.sub-nav').length<1 && e.target.nodeName=="LI" || e.target.nodeName=="SPAN"){
              $('.sub-nav ul>li').hover(subNavMouseEnter,subNavMouseLeave);
              if(e.target.nodeName=="LI"){
                  node=$(e.target).find('.sub-nav');
              }
              else if(e.target.nodeName=="SPAN"){
                  node=$(e.target).next();
              }
              var list=$(this).children('li');
              for(var i=0;i<list.length;i++){
                  $(list[i]).find('.nav-triangle').removeClass('current');
                  if($(list[i]).find('.sub-nav').is(":hidden")==false){
                      var subNav=$(list[i]).find('.sub-nav');
                      subNav.stop().slideUp(300);
                      var subNavLiList=subNav.find('li');
                      for(var j=0;j<subNavLiList.length;j++){
                          subNavLiList.find('.nav-line').removeClass('current');
                      }
                  }
              }
              console.log(node);
              node.stop().slideDown(300);
              node.prev().find('.nav-triangle').addClass('current');
          }

      });

      $('.sub-nav ul').on('click',function(event){
            if(event.target && event.target.nodeName!=="UL"){
                $('#nav>ul>li').unbind('mouseenter mouseleave');
                $('.sub-nav ul>li').unbind('mouseenter mouseleave');
                var list=$(this).find('li');
                var node=$(event.target);
                for(var i=0;i<list.length;i++){
                    $(list[i]).find('.nav-line').removeClass('current');
                }
                node.find('.nav-line').addClass('current');
            }
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