//갤러리 more 버튼
$(document).ready(function(){
	$(".el").slice(0, 6).show();
	$("#loadMore").on("click", function(e){
		e.preventDefault();
		$(".el:hidden").slice(0, 6).slideDown();
		if($(".el:hidden").length == 0) {
		$("#loadMore").text("").addClass("noContent");
		}
	});

})
  
//goBtn top,down
function goTop() {
	$('body, html').animate({ scrollTop: 0 }, 400);
}
function goDown() {
	$('body, html').animate({ scrollTop: $("#footer").offset().top }, 400);
}
