$(document).ready(function(){ 
	var arr = [4, "John"];
	var $spans = $ ("span");
	$spans.eq(0).text(jQuery.inArray(4,arr));
	// $(input).click(function() {
	// 	text(jQuery.inArray("John", arr));
	// 	// var index = $(input).inArray(this);
	// 	// $spans.eq(0).text
	// });
	// $("#search").val("Search...").addClass("empty");
	// $("#search").focus(function(){
	// 	if($(this).val() == "Search...") {
	// 		$(this).val("").removeClass("empty");;
	// 	}
		
	// });
	// $("#search").blur(function(){
	// 	if($(this).val() == "") {
	// 		$(this).val("Search...").addClass("empty");	
	// 	}
		
	// });

});
