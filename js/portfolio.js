$("document").ready(function(){
        let works_select = 0;
        let etc_select = 0;
        let etc_click = 0;

        $("a").on('click', function(e){
            $(this).val($(this).attr('value'));
            // e.preventDefault();
         });

         let mouseCursor = document.querySelector(".cursor");
         let navLinks = document.querySelectorAll(".nav li a"); //메뉴 링크
         //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
         window.addEventListener("scroll", cursor);
         window.addEventListener("mousemove", cursor);
         //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
         function cursor(e) {
           mouseCursor.style.left = e.pageX + "px";
           mouseCursor.style.top = e.pageY - scrollY + "px";
       }

       navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
          mouseCursor.classList.add("link-grow");
          mouseCursor.style.zIndex = "-1";
          link.classList.add("hovered-link");
        });
        link.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("link-grow");
          mouseCursor.style.zIndex = "1000";
          link.classList.remove("hovered-link");
        });
      });

         let page = new fullpage(".fullpage",{
            scrollBar : false,
            anchors: ["home", "about", "redesign", "etc", "resume", "contact"],
            navigation: true,
            navigationPosition: "left",
            navigationTooltips: ["홈","소개","리디자인","기타 작업물","이력","연락처"],
            slidesNavigation: true,
            licenseKey:"603D3EBB-D1B84561-B40D98B6-7A87C3D7",
            onLeave: function(origin, destination, direction){
                if(origin.index >= 0 && direction == "down"){
                    $(".nav").fadeOut()    
                }else if(origin.index == 1 && direction == "up"){
                    $(".nav").fadeIn()
                }
            },
            afterLoad: function(origin, destination){

                if(destination.index == 1){
                    $(".about-me h1").addClass("animated jackInTheBox").css("opacity", 1).css("animation","flicker 1.5s alternate").css("transition-delay","100ms").css("animation-delay","500ms");
                    $(".about-me p").addClass("animated zoomIn").css("opacity", 1).css("transition-delay","300ms").css("animation-delay","1000ms");
                    $(".about-me ul li ul li img").addClass("animated flipInX").css("opacity", 1).css("transition-delay","500ms").css("animation-delay","1000ms");
                    $(".about-me ul li ul li a").addClass("animated fadeIn").css("opacity", 1).css("transition-delay","800ms").css("animation-delay","1000ms");
                    $(".about-me ul li ul li a p").addClass("animated fadeIn").css("transition-delay","1000ms").css("animation-delay","1000ms");

                }else if(destination.index == 2){
                    $(".works .redesign h1").addClass("animated fadeInDown").css("opacity",1).css("animation","flicker 1.5s alternate").css("transition-delay","100ms").css("animation-delay","500ms");
                    $(".works .redesign img").addClass("animated fadeIn").css("opacity", 1).css("transition-delay","1000ms").css("animation-delay","700ms");
                    $(".works .redesign ul li").eq(0).css("opacity",1)
                    $(".works-item").addClass("animated fadeIn").css("opacity", 1).css("transition-delay","1500ms").css("animation-delay","1000ms");

                    // 초기값(위치, 투명도) 설정
                    $(".works .redesign ul li").eq(0).css("opacity",1)
                    $(".works .redesign ul li").eq(1).css("opacity",0.5)
                    $(".works .redesign ul li").eq(2).css("opacity",0.5)
                    $(".works .redesign ul").css("transform","translate(0px,0px)");
                    $(".works .redesign ul li").eq(0).css("transform", "translate(658px, -312px)");
                    // $(".works .redesign ul li").eq(1).css("transform", "translate(-px, -300px)");
                    $(".works .redesign ul li").eq(2).css("transform", "translate(-1400px, -300px)");


                    $(".works-item>ul>li").click(function(){
                        works_select = $(this).index();
            
                        if(works_select == 0){
                            $(".works .redesign ul li").eq(0).css("transform", "translate(658px, -312px)").css("opacity",1);
                            $(".works .redesign ul li").eq(1).css("opacity",0.5);
                            $(".works .redesign ul li").eq(2).css("opacity",0.5);
                            $(".works .redesign ul").css("transform","translate(0px,0px)");
                            $(".works .redesign ul li").eq(2).css("transform", "translate(-1400px, -300px)");
                            }else if(works_select == 1){
                            $(".works .redesign ul li").eq(0).css("transform", "translate(658px, -312px)").css("opacity",0.5);
                            $(".works .redesign ul li").eq(0).css("opacity",0.5);
                            $(".works .redesign ul li").eq(1).css("opacity",1);
                            $(".works .redesign ul li").eq(1).css("opacity",1);
                            $(".works .redesign ul li").eq(2).css("opacity",0.5);
                            $(".works .redesign ul").css("transform","translate(-686px,0px)");
                            $(".works .redesign ul li").eq(2).css("transform","translate(733px, -300px)");
                            }else if(works_select == 2){
                            $(".works .redesign ul li").eq(0).css("opacity",0.5);
                            $(".works .redesign ul li").eq(1).css("opacity","");
                            $(".works .redesign ul li").eq(2).css("transform","translate(731px, -300px)").css("opacity",1);
                            $(".works .redesign ul").css("transform","translate(-1372px,0px)");
                            $(".works .redesign ul li").eq(0).css("transform", "translate(2696px, -307px)");
                        }
                    })

                    $(".works ul li").click(function(){
                        works_select = $(this).index();
                        console.log(works_select);
            
                        if(works_select == 0){
                            $(".works .redesign ul li").eq(0).css("transform", "translate(658px, -312px)").css("opacity",1);
                            $(".works .redesign ul li").eq(1).css("opacity",0.5);
                            $(".works .redesign ul li").eq(2).css("opacity",0.5);
                            $(".works .redesign ul").css("transform","translate(0px,0px)");
                            $(".works .redesign ul li").eq(2).css("transform", "translate(-1400px, -300px)");
                        }else if(works_select == 1){
                            $(".works .redesign ul li").eq(0).css("transform", "translate(658px, -312px)").css("opacity",0.5);
                            $(".works .redesign ul li").eq(0).css("opacity",0.5);
                            $(".works .redesign ul li").eq(1).css("opacity",1);
                            $(".works .redesign ul li").eq(2).css("opacity",0.5);
                            $(".works .redesign ul").css("transform","translate(-686px,0px)");
                            $(".works .redesign ul li").eq(2).css("transform","translate(733px, -300px)");
                        }else if(works_select == 2){
                            $(".works .redesign ul li").eq(0).css("opacity",0.5);
                            $(".works .redesign ul li").eq(1).css("opacity","");
                            $(".works .redesign ul li").eq(2).css("transform","translate(731px, -300px)").css("opacity",1);
                            $(".works .redesign ul").css("transform","translate(-1372px,0px)");
                            $(".works .redesign ul li").eq(0).css("transform", "translate(2696px, -307px)");
                        }
                    })

                }else if(destination.index == 3){
                    $(".etc h1").addClass("animated fadeInDown").css("opacity",1).css("animation","flicker 1.5s alternate").css("transition-delay","100ms").css("animation-delay","500ms");
                    $(".etc ul li").addClass("animated fadeIn").css("opacity", 1).css("animation-delay","300ms");
                    $(".etc-item").addClass("animated fadeIn").css("opacity", 1).css("transition-delay","1000ms").css("animation-delay","1000ms");
                }else if(destination.index == 4){
                    $(".resume h1").addClass("animated fadeInDown").css("opacity",1).css("animation","flicker 1.5s alternate").css("transition-delay","100ms").css("animation-delay","500ms");
                    $(".resume .resume-wrap").addClass("animated fadeIn").css("opacity", 1).css("transition-delay","1000ms").css("animation-delay","1000ms");
                }else if(destination.index == 5){
                    $(".contact h1").addClass("animated fadeInDown").css("opacity",1).css("animation","flicker 1.5s alternate").css("transition-delay","100ms").css("animation-delay","500ms");
                    $(".contact .contact-wrap ul").addClass("animated fadeIn").css("opacity", 1).css("transition-delay","1000ms").css("animation-delay","1000ms");
                }
            },
            afterSlideLoad: function(section, origin, destination){
                let params = {
                    section: section,
                    origin: origin,
                    destination: destination
                }
            }
        });    
         
         $(".etc-icon ul li").mouseover(function(){
            etc_select=$(this).index();
             $(".etc-icon ul li img").eq(etc_select).css("opacity","0.4")
             $(this).css("background-color","rgba(0,0,0,0.4)")
             $(this).find("a").css("cursor","pointer")
             $(".etc ul li a p").eq(etc_select).css("opacity", "1")
        }).mouseout(function(){
             $(".etc-icon ul li img").eq(etc_select).css("opacity","")
             $(this).css("background-color","")
             $(".etc ul li a p").eq(etc_select).css("opacity", "")
        })

        $(".etc ul li").click(function(){
            etc_click = $(this).index();
            $(".etc-item img").hide().eq(etc_click).show();
            $(".etc ul li img").eq(etc_click).css("opacity","0.4");
            $(this).css("background-color","rgba(0,0,0,0.4)");
            $(".etc ul li a p").eq(etc_click).css("opacity", "1");
        })

        $(".side-nav .hamburger a").click(function(){
            $(this).addClass("on")
            $(".side").addClass("on")
            $(".close").addClass("on")
          })
          $(".close").click(function(){
            $(this).removeClass("on")
            setTimeout(function(){
                $(".side").removeClass("on")
            },1200)
            setTimeout(function(){
                $(".side-nav .hamburger a").removeClass("on")
            },1500)
          })
})