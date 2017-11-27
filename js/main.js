function hideAddressBar() {
	window.scrollTo(0, 1);
}

$(function () {
	setTimeout(hideAddressBar, 0);

$("#navigation li").live('click',function(){
	var getthisindex = $(this).index()
	activepageInf(getthisindex)
});
	
	function activepageInf(active){
	$("#navigation li").removeClass('active');
	$("#navigation li:eq("+active+")").addClass('active');
	$(".pageContainer:visible").hide();
	$(".pageContainer:eq("+active+")").show();
}


  
function navigationmenu() {
    getSreenWidth = $(window).width();
       
		if(getSreenWidth > 767){			
			$("nav ul:hidden").show();
		}else{
			$("nav ul:visible").hide();
			$("nav #menu").removeClass("active").text("Menu");  
	   }   	
}
navigationmenu()
$(window).resize(navigationmenu)

   
	   $("nav #menu").toggle(function () {
	 	  $(this).next("ul").slideDown('normal');
	   	$(this).addClass("active").text("Menu");;
	  	}, function () {
	  	 $(this).next("ul").slideUp('normal');
	  	 $(this).removeClass("active").text("Menu");
	  });
	  
	  
   
  });

// When the user scrolls down from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
