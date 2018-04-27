$(".help").mouseover(function(){
    $(".help").find(".menu2").show()
});
$(".product").mouseover(function(){
    $(".product").find(".menu2").show()
});
$(".product").mouseout(function(){
    $(".product").find(".menu2").hide();
});
$(".help").mouseout(function(){
    $(".help").find(".menu2").hide();
});
$(".gz_app").mouseover(function () {
    $(".app_img").show()
})
$(".gz-gzh").mouseover(function () {
    $(".wechet_img").show()
})
$(".gz_app").mouseout(function () {
    $(".app_img").hide()
})
$(".gz-gzh").mouseout(function () {
    $(".wechet_img").hide()
})


function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function productBox(){
    $(".pagination li").on("click",function(){
        var index = parseInt(this.attributes.index.value);
        var products = $(".productBox div");
        if(index !== 1){
            $(".pagination li")[0].className= "";
        }else{
            $(".pagination li")[0].className= "active";
        }
        for (var i = 0; i < products.length; i++) {
            if(i === (index-1)){
                products[i].style.display = "block";
            }else{
                products[i].style.display = "none";
            }
        }
    });
}
//case页面生成遮罩层
/*function hoverCover(){
    $(".lanren ul li").hover(function(){
        $(this).find(".txt").stop().animate({height:"198px"},400);
        $(this).find(".txt h3").stop().animate({paddingTop:"0px"},400);
    },function(){
        $(this).find(".txt").stop().animate({height:"45px"},400);
        $(this).find(".txt h3").stop().animate({paddingTop:"0px"},400);
    })
}*/
function show_mb_list(){
    var $menu_mb = $(".menu-mb");
    var $menu_list_mb = $(".menu-list-mb");
    var $closeBt = $(".closeBt");
    var $haveSecond_pro = $("#have-second-pro");
    var $haveSecond_help = $("#have-second-help");
    var $second_list_help = $("#second-list-help");
    var $second_list_pro = $("#second-list-pro");
    $menu_list_mb[0].style.display = "none";
    $("#second-list-pro").css('display','none');
    $("#second-list-help").css('display','none');
    $menu_mb.click(function(){
        if ($menu_list_mb[0].style.display == "none") {
            $menu_list_mb.fadeIn(1000);
        }else{
            $menu_list_mb.fadeOut(1000);
        }
    });
    $haveSecond_pro.click(function(){
        if ($second_list_pro[0].style.display == "none") {
            $second_list_pro.fadeIn(500);
        }else{
            $second_list_pro.fadeOut(500);
        }
    });
    $haveSecond_help.click(function(){
        if ($second_list_help[0].style.display == "none") {
            $second_list_help.fadeIn(500);
        }else{

            $second_list_help.fadeOut(500);
        }
    });
    $closeBt.click(function(){
        $menu_list_mb.fadeOut(1000);
    })
}
addLoadEvent(productBox);
/*addLoadEvent(hoverCover);*/
addLoadEvent(show_mb_list);

$(document).ready(function(){
    $("#go_top").trigger('click');
    $("#go_top").hide();
});

(function () {
    //检测屏幕高度
    //scroll() 方法为滚动事件
    $(window).scroll(function(){
        if ($(window).scrollTop() == "0") {
            $("#go_top").fadeOut("slow")
        } else {
            $("#go_top").fadeIn("slow")
        }
    });
    $("#go_top").click(function(){
        $('body,html').animate({scrollTop:0},100);
        return false;
    });
})();