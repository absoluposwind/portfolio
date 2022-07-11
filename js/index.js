$("document").ready(function(){

    let pro_chk = false;

    function pro(id, per){
        let bar = new ProgressBar.SemiCircle(id,{
            strokeWidth: 4,
            duration: 1400,
            color: "orange",
            trailWidth:4,
            step:function(state, circle){
                circle.setText(Math.round(circle.value() * 100)+"%")
            }
        })
        bar.animate(per)
    }

    $(".home h2").textillate({
        in:{
            effect:"tada",
            shuffle: true,
            callback: function(){
                $(".home p").css("opacity",1).textillate("start")
            }
        }
    })
    $(".home p").textillate({
        in:{
            effect:"bounce",
            shuffle: true,
            callback: function(){
                $("#particle").css("opacity",1)
            }
        }
    })

    let Fullpage = new fullpage(".fullpage",{
        sectionsColor : ["#3372d6","#076a44","#7da01b","#eea","#4667da"],
        anchors: ["home","about","skill","work","contact"],
        // responsiveWidth: 1100,
        normalScrollElements: ".window-content, .window",
        licenseKey:"603D3EBB-D1B84561-B40D98B6-7A87C3D7",
        afterLoad: function(origin, destination){
            $(".nav ul li").removeClass("on").eq(destination.index).addClass("on")
            if(destination.index>0){
            $(".nav").fadeIn()
            }else{
                $(".nav").fadeOut()
            }

            if(destination.index == 1){
                $(".about .left > p").eq(0).addClass("animated bounceInDown").css("opacity","1");
                $(".about .left h2").addClass("animated tada").css("opacity", 1).css("transition-delay","1400ms");
                $(".about .left img").addClass("animated heartBeat").css("opacity", 1).css("transition-delay","1400ms").css("animation-delay","1400ms");
                $(".about .left p").eq(1).addClass("animated slideInLeft").css("opacity", 1).css("transition-delay","2000ms").css("animation-delay","2000ms");
                $(".about .left p").eq(2).addClass("animated slideInLeft").css("opacity", 1).css("transition-delay","2300ms").css("animation-delay","2300ms");
                $(".about .left p").eq(3).addClass("animated slideInLeft").css("opacity", 1).css("transition-delay","2600ms").css("animation-delay","2600ms");
                
                $(".about .right h2").addClass("animated slideInDown").css("opacity", 1).css("transition-delay","2900ms").css("animation-delay","2900ms");
                $(".about .right p").eq(0).addClass("animated slideInLeft").css("opacity", 1).css("transition-delay","3200ms").css("animation-delay","3200ms");
                $(".about .right p").eq(1).addClass("animated slideInRight").css("opacity", 1).css("transition-delay","3500ms").css("animation-delay","3500ms");
                $(".about .right p").eq(2).addClass("animated heartBeat").css("opacity", 1).css("transition-delay","3800ms").css("animation-delay","3800ms");
                
                $(".about .right .prop").eq(0).addClass("animated slideInLeft").css("opacity", 1).css("transition-delay","4100ms").css("animation-delay","4100ms");
                $(".about .right .prop").eq(1).addClass("animated slideInDown").css("opacity", 1).css("transition-delay","4400ms").css("animation-delay","4400ms");
                $(".about .right .prop").eq(2).addClass("animated slideInRight").css("opacity", 1).css("transition-delay","4700ms").css("animation-delay","4700ms");
                $(".about .right .prop").eq(3).addClass("animated slideInLeft").css("opacity", 1).css("transition-delay","5000ms").css("animation-delay","5000ms");
                $(".about .right .prop").eq(4).addClass("animated slideInUp").css("opacity", 1).css("transition-delay","5300ms").css("animation-delay","5300ms");
                $(".about .right .prop").eq(5).addClass("animated slideInRight").css("opacity", 1).css("transition-delay","5600ms").css("animation-delay","5600ms");
                $(".about .right .prop p").addClass("animated tada").css("opacity", 1).css("transition-delay","6600ms").css("animation-delay","6600ms");
                $(".about .sep-line").css("height","60%").css("transition-delay", "7000ms")
                
                }else if(destination.index == 2){
                if(pro_chk == true){
                    return
                }
                $(".skill h2").css("opacity",1).addClass("animated bounceInDown on")
                $(".skill .progress").eq(0).delay(1700).animate({
                    opacity: 1
                },1000, function(){
                    // complete - 위에 내용 실행후 아래 내용실행하겠단 의미
                    pro("#html",0.8)
                })
                $(".skill .progress").eq(1).delay(2000).animate({
                    opacity: 1
                },1000, function(){
                    // complete - 위에 내용 실행후 아래 내용실행하겠단 의미
                    pro("#css",0.6)
                })
                $(".skill .progress").eq(2).delay(2300).animate({
                    opacity: 1
                },1000, function(){
                    // complete - 위에 내용 실행후 아래 내용실행하겠단 의미
                    pro("#js",0.7)
                })
                $(".skill .progress").eq(3).delay(2600).animate({
                    opacity: 1
                },1000, function(){
                    // complete - 위에 내용 실행후 아래 내용실행하겠단 의미
                    pro("#ps",0.6)
                })
                $(".skill .progress").eq(4).delay(2900).animate({
                    opacity: 1
                },1000, function(){
                    // complete - 위에 내용 실행후 아래 내용실행하겠단 의미
                    pro("#ai",0.6)
                })
                $(".skill .progress").eq(5).delay(3200).animate({
                    opacity: 1
                },1000, function(){
                    // complete - 위에 내용 실행후 아래 내용실행하겠단 의미
                    pro("#of",0.6)
                })
                pro_chk = true;
            }
            else if(destination.index == 3 ){
                $(".work h2").css("opacity",1).addClass("animated bounceInDown on");
                $(".work .container").css("opacity",1).addClass("animated fadeIn").css("animation-delay","2000ms")
            }else if(destination.index == 4){
                $(".contact h2").css("opacity",1).addClass("animated bounceInDown on");
                $(".contact .content").css("opacity",1)
                $(".contact .content .left").addClass("animated bounceInLeft").css("animation-delay","3000ms").css("opacity",1)
                $(".contact .content .center").addClass("animated bounceInUp").css("animation-delay","3500ms").css("opacity",1)
                $(".contact .content .right").addClass("animated bounceInRight").css("animation-delay","4000ms").css("opacity",1)
            }
        },
        afterSlideLoad: function(section, origin, destination){
            let params = {
                section: section,
                origin: origin,
                destination : destination
            }
            $(".work .container ul li").removeClass("on").eq(destination.index).addClass("on");
        }
    })
    const web_img1 = [
        "http://via.placeholder.com/1920x5000",
        "http://via.placeholder.com/1920x5000/9a0",
        "http://via.placeholder.com/1920x5000/f4a",
        "http://via.placeholder.com/1920x5000/ef1"
    ]
    const web_img2 = [
        "http://via.placeholder.com/1920x5000",
        "http://via.placeholder.com/1920x5000/9a0",
        "http://via.placeholder.com/1920x5000/f4a",
        "http://via.placeholder.com/1920x5000/ef1"
    ]
    const web_img3 = [
        "http://via.placeholder.com/1920x5000",
        "http://via.placeholder.com/1920x5000/9a0",
        "http://via.placeholder.com/1920x5000/f4a",
        "http://via.placeholder.com/1920x5000/ef1"
    ]
    const web_img4 = [
        "http://via.placeholder.com/1920x5000",
        "http://via.placeholder.com/1920x5000/9a0",
        "http://via.placeholder.com/1920x5000/f4a",
        "http://via.placeholder.com/1920x5000/ef1"
    ]
    const web_img5 = [
        "http://via.placeholder.com/1920x5000",
        "http://via.placeholder.com/1920x5000/9a0",
        "http://via.placeholder.com/1920x5000/f4a",
        "http://via.placeholder.com/1920x5000/ef1"
    ]
    $(".slide .item").click(function(){
        let index = $(this).index();
        if($(this).parents(".slide").hasClass("slide1")){
            $(".window-content img").attr("src","web_img", index);
        }else if($(this).parents(".slide").hasClass("slide2")){
            $(".window-content img").attr("src","web_img", index);
        }else if($(this).parents(".slide").hasClass("slide3")){
            $(".window-content img").attr("src","web_img", index);
        }else if($(this).parents(".slide").hasClass("slide4")){
            $(".window-content img").attr("src","web_img", index);
        }else if($(this).parents(".slide").hasClass("slide5")){
            $(".window-content img").attr("src","web_img", index);
        }
        $(".window").slideDown()
        $(".window-content").slideDown().scrollTop(0)
    })
    $(".window").click(function(){
        $(".window").slideUp()
        $(".window-content").slideDown().scrollTop(0)
    })
})