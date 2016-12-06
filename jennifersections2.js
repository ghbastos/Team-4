
$( document ).ready(function() {
    
	$("#bestseller1").mouseover(function(){
		this.src="bestseller1b.png";
	}).mouseout(function(){
		this.src="bestseller1a.png";
	});

	$("#bestseller2").mouseover(function(){
		this.src="bestseller2b.png";
	}).mouseout(function(){
		this.src="bestseller2a.png";
	});

	$("#bestseller3").mouseover(function(){
		this.src="bestseller3b.png";
	}).mouseout(function(){
		this.src="bestseller3a.png";
	});

	$("#bestseller4").mouseover(function(){
		this.src="bestseller4b.png";
	}).mouseout(function(){
		this.src="bestseller4a.png";
	});


	$("#insta1").hover(function(){
    	$('.insta1b').show();
		},function(){
    	$('.insta1b').hide();
	});
		$("#insta2").hover(function(){
    	$('.insta2b').show();
		},function(){
    $('.insta2b').hide();
	});

	$("#insta3").hover(function(){
    	$('.insta3b').show();
		},function(){
    	$('.insta3b').hide();
	});
	$("#insta4").hover(function(){
    	$('.insta4b').show();
		},function(){
    	$('.insta4b').hide();
	});



});