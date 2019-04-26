/**
 * Created by Administrator on 2018/7/16.
 */

$(function () {
    lc_lightbox('.elem', {
        wrap_class: 'lcl_fade_oc',
        gallery : true,
        thumb_attr: 'data-lcl-thumb',

        skin: 'minimal',
        radius: 0,
        padding	: 0,
        border_w: 0,
    });


// //切割轮播
    $(".carve .subBox").each(function(index){
        // this：原生js对象
        // $(this)：jquery对象
        $(this).css("left",144*index+"px");
        // 背景图位置
        $(this).find(".sub").css("backgroundPosition",-144*index+"px");

        $(this).css("transitionDelay",0.2*index+"s");
    })
    var num = 0;
    var timer = setInterval(function(){
        moveFn()
    },3000)
    // 左按钮
    $(".controll .prev").on("click",function(){
        clearInterval(timer);
        $(".subBox").css("transform","rotatex("+(--num*90)+"deg)");
    })
    // 右按钮
    $(".controll .next").on("click",function(){
        clearInterval(timer);
        $(".subBox").css("transform","rotatex("+(++num*90)+"deg)");
    })
    // 划上事件 划上清除定时器，离开启动定时器
    $(".carve").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            moveFn()
        },3000)
    })
    // 封装函数
    function moveFn(){
        $(".subBox").css("transform","rotatex("+(++num*90)+"deg)");
    }




/*--------------------------------------app---------------------------------------*/
    //app1
    var swiper1 = new Swiper('#swiper1',{
        loop: true,
        keyboard : true,
        effect : 'coverflow',
        slidesPerView:3,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 20,
            stretch: 30,
            depth: 60,
            modifier: 2,
            slideShadows : true
        },
        autoplay:  {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination :{
            el: '.swiper-pagination',
            clickable :true,
        }
    });
    function swiperauto(id,obj){
        var box = document.getElementById(id);
        box.onmouseenter = function(){
            obj.autoplay.stop();
        }
        box.onmouseleave = function(){
            obj.autoplay.start();
        }
    }
    swiperauto("swiper1",swiper1);


    //app2
    var swiper2 = new Swiper('#swiper2',{
        loop: true,
        keyboard : true,
        effect : 'coverflow',
        slidesPerView:3,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 20,
            stretch: 30,
            depth: 60,
            modifier: 2,
            slideShadows : true
        },
        autoplay:  {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination :{
            el: '.swiper-pagination',
            clickable :true,
        }
    });
    swiperauto("swiper2",swiper2);


    //app3
    var swiper3 = new Swiper('#swiper3',{
        loop: true,
        keyboard : true,
        effect : 'coverflow',
        slidesPerView:3,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 20,
            stretch: 30,
            depth: 60,
            modifier: 2,
            slideShadows : true
        },
        autoplay:  {
            delay: 3000,	 //
            disableOnInteraction: false
            //
        },
        pagination :{
            el: '.swiper-pagination',
            clickable :true,
        }
    });
    swiperauto("swiper3",swiper3);



    // 回到顶部

    $(document).ready(function(){
        $("#goToTop").hide()//显示
        $(function(){
            $(window).scroll(function(){
                if($(this).scrollTop()>500){//大于500px让他显示，小于则不显示
                    $("#goToTop").fadeIn();
                } else {
                    $("#goToTop").fadeOut();
                }
            });
        });
     
        // 给它点击事件
        $("#goToTop a").click(function(){
            $("html,body").animate({scrollTop:0},0);//滚到顶部
            return false;
        });
    });


    $(".nav-in").on("click","li",function(){
        $(this).addClass("current").siblings("li").removeClass("current");
    })
    // 音乐旋转
    $('.music img').click(function(e){
        if($('audio').get(0).paused==false){
            $('audio').get(0).pause()
            $('.music img').css({'animation-play-state':'paused'})
        }else{
            $('audio').get(0).play()
            $('.music img').css({'animation-play-state':'running'})
        }
    });
/**/
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();
})



	// 导航栏
	
	$(".nav-in li").click(function(e) {
				
		var index = $(this).index();
		
		var boxT = $(".con").eq(index).offset().top;
		
		$("html,body").animate({scrollTop:boxT},500);
		
    });



