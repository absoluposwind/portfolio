$("document").ready(function(){
        let works_select = 0;
        let etc_select = 0;
        let etc_click = 0;
        let list_idx= 0;

        $(".etc-item ul li img").hide().eq(0).show();
        // $(".etc-item ul li a p").hide();
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


      const $redesign = $(".redesign  > img");

      let re_page = [
        "https://absoluposwind.github.io/edawonRedesign/",
        "../inde1x.html",
        "http://absoluposwind.dothome.co.kr"
      ]

      $redesign.click(function(){
        window.open(re_page[works_select])
      })

      $redesign.mouseover(function(){
        $(".redesign ul li").eq(works_select).css("opacity","0.5");
        $(".redesign ul li").eq(works_select).find("::after").css("opacity","0.5");

      }).mouseout(function(){
        $(".redesign ul li").eq(works_select).css("opacity","1");
      })



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
                    $(".nav ul li:nth-child(1)").css("display","none").css("margin-left","0%")
                    $(".nav").css("background-color","#acb3c0").css("height","30px").css("color","#393f4c")
                    $(".nav ul li a").css("color","#393f4c")
                    $(".nav ul li:nth-child(2)").show()
                    $(".nav ul li:nth-child(9)").show()
                    $(".nav ul li:nth-child(10)").show()
                    $(".nav ul li:nth-child(11)").show()
                    $(".nav ul li").css("width","70px")
                    $(".nav ul li:nth-child(2)").css("width","30px");
                    $(".nav ul li:nth-child(9)").css("width","50px");
                    $(".nav ul li:nth-child(10)").css("width","100px").css("margin-top","-6px");
                    $(".nav ul li:nth-child(11)").css("width","20px");
                    $(".nav ul:nth-child(2) li").css("width","30px")
                    $(".nav ul li a").css("font-size","11px")
                }else if(origin.index == 1 && direction == "up"){
                    $(".nav ul li:nth-child(1)").css("display","").css("margin-left","15%").css("margin-right","40%")
                    $(".nav").css("background-color","").css("height","").css("color","")
                    $(".nav ul li a").css("color","")
                    $(".nav ul li:nth-child(2)").hide()
                    $(".nav ul li:nth-child(9)").hide()
                    $(".nav ul li:nth-child(10)").hide()
                    $(".nav ul li").css("width","")
                    $(".nav ul li:nth-child(2)").css("width","");
                    $(".nav ul li:nth-child(9)").css("width","");
                    $(".nav ul li:nth-child(10)").css("width","").css("margin-top","");
                    $(".nav ul li:nth-child(11)").css("width","");
                    $(".nav ul:nth-child(2) li").css("width","")
                    $(".nav ul li a").css("font-size","")
                    $(".nav").fadeIn()
                }
            },
            afterLoad: function(origin, destination){

                if(destination.index == 1){
                    $(".about-me h1").addClass("animated jackInTheBox").css("opacity", 1).css("animation","flicker 1.5s alternate").css("transition-delay","100ms").css("animation-delay","500ms");
                    // $(".about-me p").addClass("animated zoomIn").css("opacity", 1).css("transition-delay","300ms").css("animation-delay","1000ms");
                    $(".about-me ul li ul li img").addClass("animated flipInX").css("opacity", 1).css("transition-delay","500ms").css("animation-delay","1000ms");
                    // $(".about-me ul li ul li a").addClass("animated fadeIn").css("opacity", 1).css("transition-delay","800ms").css("animation-delay","1000ms");

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

                    $(".works-item ul li").click(function(){
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
                    $(".etc-icon").show();
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

        $(".list-wrap ul").click(function(){
            list_idx = $(this).index();
            
        })
         
         $(".etc-icon ul li").mouseover(function(){
            etc_select=$(this).index();
             $(".etc-icon ul li img").eq(etc_select).css("opacity","0.4")
             $(this).css("background-color","rgba(0,0,0,0.4)")
             $(this).find("a").css("cursor","pointer")
             $(".etc-icon ul li a p").eq(etc_select).css("opacity", "1")
        }).mouseout(function(){
             $(".etc-icon ul li img").eq(etc_select).css("opacity","")
             $(this).css("background-color","")
             $(".etc-icon ul li a p").eq(etc_select).css("opacity", "")
        })

        $(".etc-icon ul li").click(function(){
            etc_click = $(this).index();
            $(".etc-item ul li img").hide().eq(etc_click).show();
            // $(".etc ul li img").eq(etc_click).css("opacity","0.4");
            // $(this).css("background-color","rgba(0,0,0,0.4)");
            $(".etc-icon ul li a p").eq(etc_click).css("opacity", "1");
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