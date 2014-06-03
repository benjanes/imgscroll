$('document').ready(function() {
	var InfiniteRotator =
	    {
	        init: function() {
	            var initialFadeIn = 100;
	            var itemInterval = 6000;
	            var numberOfItems = $('.rotating-item').length;
	            var i = 0;
				var interval_function = function(){
					$('.rotating-item').eq(i).fadeOut();
					$('.tabs').eq(i).removeClass('active');
	                if(i == numberOfItems -1){
	                    i = 0;	
	                }else{
	                    i++;					
	                }
	                $('.rotating-item').eq(i).fadeIn();
					$('.tabs').eq(i).addClass('active');
					
				};
	            $('.rotating-item').eq(i).fadeIn(initialFadeIn);
	            var infiniteLoop = setInterval(interval_function, itemInterval);
				$('.rotating-item').hover(function(){
					clearInterval(infiniteLoop);
				}, function() {
					infiniteLoop = setInterval(interval_function, itemInterval);
				});
				$('.tabs').click(function(){
					$('.tabs').removeClass('active');
					$(this).addClass('active');
					var tabID = $(this).index();
					clearInterval(infiniteLoop);
					$('.rotating-item').eq(i).fadeOut();
					i = tabID;
					$('.rotating-item').eq(i).fadeIn();
					infiniteLoop = setInterval(interval_function, itemInterval);
					return false;
				});
	        }
	    };
 
	    InfiniteRotator.init();
		
	
	
}); //end ready