$(function () {		

	//Main Navigation Megamenu
	$(".megamenu").megamenu();
	
	//Tablestyles
	$(".tablestyle tbody tr:even").css("background-color", "#f9f9f9");
	$(".tablestyle tbody tr:odd").css("background-color", "#ffffff");
	
	
	//Change Password 
	$(".new-pwd").hide();
	$(".change-pwd").click(function() {			
		$(".old-pwd").hide();
		$(".new-pwd").show();
	});
	
	$(".cancel-pwd").click(function() {	
		$(".new-pwd").hide();		
		$(".old-pwd").show();
	});
	
	
//Dialog Popup--------------------------------------	  
	$( ".dialog-popup, .dialog-popup2" ).dialog({ autoOpen: false, draggable: true, resizable: false, modal: true, autoReposition: true,});
		
	$(window).resize(function(){ $(".dialog-popup, .dialog-popup2").dialog("option","position","center"); });
	
	$( ".dialog-popup" ).dialog({ width:800 });
	
	$( ".dialog-popup2" ).dialog({
		  width: 600,
		  buttons: {
			"Save": function() {
			  $( this ).dialog( "save" );
			},
			Cancel: function() {
			  $( this ).dialog( "close" );
			}
		  }
	});
	
	$( ".open-popup" ).click(function() {
		$( ".dialog-popup" ).dialog( "open" );
	});
	
	$( ".close-popup" ).click(function() {
	  $( ".dialog-popup" ).dialog( "close" );
	});
	
	$( ".open-popup2" ).click(function() {
		$( ".dialog-popup2" ).dialog( "open" );
	});
	
		
	//BehestBuy Tabs
	$('.tabpages').each(function(){
		var $active, $content, $links = $(this).find('a');
		$active = $links.first().addClass('active');
		$content = $($active.attr('href'));
		$links.not(':first').each(function () {
		$($(this).attr('href')).hide();
	});
	$(this).on('click', 'a', function(e){
		$active.removeClass('active');
		$content.hide();
		$active = $(this);
		$content = $($(this).attr('href'));
		$active.addClass('active');
		$content.show();
		e.preventDefault();
		});
	});
	
	//BehestBuy Menu Tabs
	$('.tabmenu').each(function(){
		var $active, $content, $links = $(this).find('a');
		$active = $links.first().addClass('active');
		$content = $($active.attr('href'));
		$links.not(':first').each(function () {
		$($(this).attr('href')).hide();
	});
	$(this).on('hover', 'a', function(e){
		$active.removeClass('active');
		$content.hide();
		$active = $(this);
		$content = $($(this).attr('href'));
		$active.addClass('active');
		$content.show();
		e.preventDefault();
		});
	});
	
	//Main Banner Slider
	$('.bbslider').bxSlider({
	  	infiniteLoop: true,
	  	auto: true,
  		hideControlOnEnd: true
	});
	
	//Category List Slider
	$('.bblist-slider').bxSlider({
	  minSlides: 2,
	  maxSlides: 5,
	  slideWidth: 220,
	  slideMargin:0
	});
	
	//Client List Slider
	$('.client-list').bxSlider({
	  minSlides: 2,
	  maxSlides: 5,
	  slideMargin:0
	});
		
	
	//More
	$("a.more-dialog").click(function() {
		var $div = $(this).next('.more-dropdown');
		$(".more-dropdown").not($div).hide();
		$div.show();
    });
    $(document).click(function(e){
        var p = $(e.target).closest('.actionbtns').length
        if (!p) {
			$(".more-dropdown").hide();
        }
    });	
	
});	


