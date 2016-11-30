		$( document ).ready(function() {

        $("#work, #offers, #fem, #mal").click(function(){
            screenfull.toggle(this);
        });
        
		$(document).on('mouseover', '#education', function(event){
    			event.preventDefault();
    			$(this).css({opacity: '1'});
    			$(this).css({background: '#bfff80'});
		});
		$(document).on('mouseout', '#education', function(event){
    			event.preventDefault();
    			$(this).css({opacity: '1'});
    			$(this).css({background: 'rgb(238, 238, 238)'});
		});
        $(document).on('mouseover', '#work', function(event){
                event.preventDefault();
                $(this).css({opacity: '1'});
                $(this).css({background: '#bfff80'});
        });
        $(document).on('mouseout', '#work', function(event){
                event.preventDefault();
                $(this).css({opacity: '1'});
                $(this).css({background: 'rgb(238, 238, 238)'});
        });
        $(document).on('mouseover', '#skills', function(event){
                event.preventDefault();
                $(this).css({opacity: '1'});
                $(this).css({background: '#bfff80'});
        });
        $(document).on('mouseout', '#skills', function(event){
                event.preventDefault();
                $(this).css({opacity: '1'});
                $(this).css({background: 'rgb(238, 238, 238)'});
        });
        $(document).on('mouseover', '#projects', function(event){
                event.preventDefault();
                $(this).css({opacity: '1'});
                $(this).css({background: '#bfff80'});
        });
        $(document).on('mouseout', '#projects', function(event){
                event.preventDefault();
                $(this).css({opacity: '1'});
                $(this).css({background: 'rgb(238, 238, 238)'});
        });
		$(document).on('click', 'a', function(event){
    			event.preventDefault();
    			$('html, body').animate({
        			scrollTop: $( $.attr(this, 'href') ).offset().top
    			}, 500);
		});
		});