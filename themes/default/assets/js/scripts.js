YUI().use('node', 'scrollview', function (Y) {
	var toTopWrap  = Y.one('#back-to-top');
		toTopLink  = toTopWrap.all('a'),
		scrollview = new Y.ScrollView({
			srcNode: '#back-to-top'
		});
		// how to do window scroll with YUI?
/*
		$(window).scroll(function(e){ 
		  $el = $('.fixedElement'); 
		  if ($(this).scrollTop() > 200 && $el.css('position') != 'fixed'){ 
		    $('.fixedElement').css({'position': 'fixed', 'top': '0px'}); 
		  } 
		});
*/
	console.log(toTopLink)
});