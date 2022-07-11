$("document").ready(function(){
  
    let img_idx_save = 0;
    let brand_idx = 0;
    let sns_idx = 0;
    let sns_odd = 0;
    const $nav_list = $(".header .nav .nav-wrap ul li");

    $(".main-banner").slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true
    })

    $(window).scroll(function(){
        let pos = $(window).scrollTop();

        if(pos >= 800){
            $(".right-bar").addClass("on");
        }else if(pos <800){
            $(".right-bar").removeClass("on");
        }
    })

    $($nav_list).mouseover(function(){
        $(this).find("a").css("color", "#00b33f");
        $(this).find(".sub-menu ul li a").css("color", "black");
    }).mouseout(function(){
        $(this).find("a").css("color", "");
    })

    $(".header .nav .nav-wrap ul li .sub-menu ul li").mouseover(function(){
        $(this).css("background-color", "#e7e7e7");
    }).mouseout(function(){
        $(this).css("background-color", "");
    })
    
    //우측 메뉴 최상단 이동 함수
    $(".right-bar .move-top").click(function(){
        let i = $(this).index();
        $("html, body").stop().animate({
            scrollTop: 0
    },500)
    })

    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        // console.log(pos)00000000000000000000000000000000
        if(pos >= 202){
            $(".nav").addClass("on")
        }else{
            $(".nav").removeClass("on")
        }
    })

    $(".section .rec-product ul li").mouseover(function(){
        let img_idx = $(this).index();
        img_idx_save = img_idx;
        // 전역변수 img_idx_save에 지역변수 img_idx값을 넣는다.
        $(".section .rec-product ul li a img").eq(img_idx_save).css("transform", "scale(1.11)")
        $(".section .rec-product ul li a h3").eq(img_idx_save).css("color", "#008830")
       }).mouseout(function(){
           $(".section .rec-product ul li a img").eq(img_idx_save).css("transform", "scale(1)");
           $(".section .rec-product ul li a h3").eq(img_idx_save).css("color", "")
       })

       $(".section3 .brand-wrap ul li").mouseover(function(){
        brand_idx = $(this).index();
        $(this).css("z-index","150").css("box-shadow","5px 5px 5px #ebebeb");
        $(".section3 .brand-wrap ul li img").eq(brand_idx).css("transform", "scale(1.105)");
       }).mouseout(function(){
        brand_idx = $(this).index();
        $(this).css("z-index","").css("box-shadow","");
        $(".section3 .brand-wrap ul li img").eq(brand_idx).css("transform", "");
       })

       $(".footer .footer-wrap .footer-menu .sns-info ul li img").mouseover(function(){
        sns_idx = $(this).index();
        $(this).eq(sns_idx).css("opacity","70%")
       }).mouseout(function(){
        $(this).eq(sns_idx).css("opacity","")
       })


})