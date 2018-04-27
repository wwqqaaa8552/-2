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
document.body.addEventListener('touchstart', function(){

    $(this).find(".txt").stop().animate({height:"80px"},400);
    $(this).find(".txt h3").stop().animate({paddingTop:"0px"},400);

});
document.body.addEventListener('click', function(){

    $(this).find(".txt").stop().animate({height:"80px"},400);
    $(this).find(".txt h3").stop().animate({paddingTop:"0px"},400);

});



function hoverCover(){

    $(".lanren ul li").click(function(e){
    e.stopPropagation()
        $(this).find(".txt").stop().animate({height:"100%"},400);
        $(this).find(".txt h3").stop().animate({paddingTop:"0px"},400);
    })

}

/*isTrue=true

function hoverCover(){
	console.log(1)
	var isTrue=!isTrue
	if(isTrue==true){
        $(".lanren ul li").hover(function(){
            $(this).find(".txt").stop().animate({height:"100%"},400);
            $(this).find(".txt h3").stop().animate({paddingTop:"0px"},400);
        })

	}else{
        $(".lanren ul li").hover(function(){
            $(this).find(".txt h3").stop().animate({paddingTop:"0px"},400);
        })
	}

}*/



function show_mb_list(){
	var $menu_mb = $(".menu-mb");
	var $menu_list_mb = $(".menu-list-mb");
	var $closeBt = $(".closeBt");
	$menu_list_mb[0].style.display = "none";
	$menu_mb.click(function(){
		if ($menu_list_mb[0].style.display == "none") {
			$menu_list_mb.fadeIn(1000);
		}else{
			$menu_list_mb.fadeOut(1000);
		}
	})
	$closeBt.click(function(){
		$menu_list_mb.fadeOut(1000);
	})
}
addLoadEvent(productBox);
addLoadEvent(hoverCover);
addLoadEvent(show_mb_list);





