$(document).ready(function(){
	
	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		
		//changes background
		
		var backgroundChange = function(newSection, prevSection){
			if($(".home__content." + newSection).hasClass("active")){
				return
			}else{
				$(".home__content, .home__panel").removeClass("active");
				$(".home__content." + newSection).addClass("active");
				$(".home__panel." + newSection).removeClass("scrolled").addClass("active");
				$(".home__panel." + newSection).prev().addClass("scrolled");
			}
		}
		
		//moves background
		
		var backgroundMove = function(newSection){
			if($(".home__content." + newSection).hasClass("active")){
				var scrolledSize = 100-($(".home__content." + newSection).offset().top - scrollPos)/ 100 + "%"
				$(".home__panel." + newSection + " .panel__image").css("background-size","auto " + scrolledSize);
			}else{
				return;
			}
		}
		
		if(scrollPos > $(".home__content.section-3").offset().top){
			backgroundChange("section-3");
			backgroundMove("section-3");
		}else if(scrollPos > $(".home__content.section-2").offset().top){
			backgroundChange("section-2");
			backgroundMove("section-2");
		}else{
			backgroundChange("section-1");
			backgroundMove("section-1");
		}
	});
});