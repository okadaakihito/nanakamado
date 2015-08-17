
var width,height,center_width,center_height,buttonElements,contentsElements,myLatlng,map,marker;

$(function(){

	//buttonElements = "#left_flower,#right_flower,#nanakamado,#name_na,#name_nana,#name_kamado,#vegetable";
	//displayContentsElements = "#right_flower,#nanakamado,#name_na,#name_nana,#name_kamado,#vegetable";
	buttonElements = "#left_flower,#right_flower,#nanakamado,#vegetable,#name_na";
	displayContentsElements = "#right_flower,#nanakamado,#name_na,#vegetable,#conceptMenu,#accessMenu,#menuMenu,#newsMenu";
	
	mainContents = "#access,#concept,#menu,#news,#menu3,#menu4";
	//mainContents = "#access,#concept,#menu";
	contentsElements = "#front,#contents,#shadow";

	//$(buttonElements).fadeTo(0,0);
	//$(contentsElements).hide().fadeOut(0);
	//$(mainContents).hide().fadeOut(0);

	controlWindowSize();

	$(window).on('orientationchange', function(){
		controlWindowSize();
	});
	
	$(".menu-link").fadeIn(3000);
	$('.menu-link').bigSlide();

	$(".background").hide().fadeIn(500);
	$(".logo").hide().fadeIn(3000);
	$(".social-likes").hide().fadeIn(3000);

	buttonPositionChange();

	$(buttonElements).hover(function(){
		 $(this).stop();
		 $(this).fadeTo(200,0.8);
		},function(){
		 $(this).stop();
		 $(this).fadeTo(500,0);
	})

	$("#close").hover(function(){
		 $(this).stop();
		 $(this).fadeTo(100,1);
		},function(){
		 $(this).stop();
		 $(this).fadeTo(100,0.8);
	})

	$("#shadow,#close").click(function(){
		 $(contentsElements).fadeOut(500);
		 $(mainContents).fadeOut(500);
         $("#main").animate({ scrollTop: 0 }, '1000');
	})

	$('#left_flower').attr("target","_blank");

	$('#left_flower').click(function() {
		window.open('https://www.facebook.com/pages/%E8%8F%9C%E3%80%85%E7%AB%88/449462391846481?fref=ts', '_blank');
	});

	$('#nanakamado').click(function() {
		$("#concept").fadeIn(500);
		$('#mainH1').empty().append("<span class=\"glyphicon glyphicon-leaf\"></span> Concept");
	});

	$('#vegetable').click(function() {
		$("#menu").fadeIn(500);
		$('#mainH1').empty().append("<span class=\"glyphicon glyphicon-book\"></span> Menu");
	});
	
	$('#name_na').click(function() {
		$("#news").fadeIn(500);
		$('#mainH1').empty().append("<span class=\"glyphicon glyphicon-send\"></span> News");
	});
	/*
	$('#name_nana').click(function() {
		$("#menu3").fadeIn(500);
	});
	$('#name_kamado').click(function() {
		$("#menu4").fadeIn(500);
	});*/

	$('#right_flower').click(function() {
		$("#access").fadeIn(500);
		$('#mainH1').empty().append("<span class=\"glyphicon glyphicon-map-marker\"></span> Access");
	});

	$(displayContentsElements).click(function(){
		$(contentsElements).fadeIn(500);
	})
	//////
	$('#conceptMenu').click(function() {
		$("#concept").fadeIn(500);
		$('#mainH1').empty().append("<span class=\"glyphicon glyphicon-leaf\"></span> Concept");
		$('.menu-link').trigger('click');
	});

	$('#menuMenu').click(function() {
		$("#menu").fadeIn(500);
		$('#mainH1').empty().append("<span class=\"glyphicon glyphicon-book\"></span> Menu");
		$('.menu-link').trigger('click');
	});
	
	$('#accessMenu').click(function() {
		$("#access").fadeIn(500);
		$('#mainH1').empty().append("<span class=\"glyphicon glyphicon-map-marker\"></span> Access");
		$('.menu-link').trigger('click');
	});

	$('#newsMenu').click(function() {
		$("#news").fadeIn(500);
		$('#mainH1').empty().append("<span class=\"glyphicon glyphicon-send\"></span> News");
		$('.menu-link').trigger('click');
	});
	
	$('#facebookMenu').attr("target","_blank");

	$('#facebookMenu').click(function() {
		window.open('https://www.facebook.com/pages/%E8%8F%9C%E3%80%85%E7%AB%88/449462391846481?fref=ts', '_blank');
		$('.menu-link').trigger('click');
	});
	/////
	$(window).resize(function(){
		buttonPositionChange();
	})

	//var n = Math.floor(Math.random() * url.length);
	//$('#background,#contents').css('background-image', 'url(' + url[n] + ')');
	//$('#background,#contents').css('background-size', 'cover');	
	$.sublime_slideshow({
        src:[
        {url:"img/IMG_1322.jpg"},
        {url:"img/flower-back0625.jpg"},
        {url:"img/IMG_1317.jpg"},
        {url:"img/IMG_1314.jpg"}
        ],
        duration:   20,
        fade:       1.5,
        scaling:    0,
        rotating:   0,
        overlay:    ""
    });

	function controlWindowSize() {
		$('meta[name=viewport]').remove();
		if ((navigator.userAgent.indexOf('iPhone') > 0
		      && navigator.userAgent.indexOf('iPad') == -1)
		      || navigator.userAgent.indexOf('iPod') > 0
		      || (navigator.userAgent.indexOf('Android') > 0
		      && navigator.userAgent.indexOf('Mobile') > 0)) {
		  if ( $(window).height()>$(window).width() ){
		      $('head').append('<meta name="viewport" content="width=750px">')
		  }
		}
	}	

	function buttonPositionChange() {
		width = $(window).width();
		height = $(window).height();
		map_width = $('#contents').width()*0.8;

		center_width = width/2;
		center_height = height/2;

		$('#logo').css({top:center_height-179,left:center_width-300.5});
		$('#left_flower').css({top:center_height-116,left:center_width-300.5});
		$('#right_flower').css({top:center_height-116,left:center_width+158.5});
		$('#nanakamado').css({top:center_height+38,left:center_width-120.5});
		$('#name_na').css({top:center_height-84,left:center_width-123.5});
		$('#name_nana').css({top:center_height-75,left:center_width-35.5});
		$('#name_kamado').css({top:center_height-86,left:center_width+43.5});
		$('#vegetable').css({top:center_height+75,left:center_width-72.5});
		$('#map').css({width:map_width});
	}

	var formatData = function(date) {
		var d = new Date(date);
		return (d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate());
	};

	$.getJSON(
		'https://graph.facebook.com/v2.4/449462391846481/feed?fields=message,created_time,attachments&access_token=1133492153344844|A186-M94_Kbr09qz9vwrnrrSqw8',
		function (data) {
			$.each(data, function(i, item){
				$.each(item, function(j, json){
					var li = [];
					if (json.message!=null) {
						//console.log(json);
						json.message = json.message.replace(/\n/g, "<br>");
						json.created_time = json.created_time.replace(/\+0000/, "");
						li.push('<span class="fb_date">'+
						formatData(json.created_time)
						+'</span>' + json.message);
					}
					if (li != "" && json.attachments!=null) {
						json = json.attachments;
						if (json.data!=null) {
							json = json.data[0];
							if (json.media!=null) {
								li.push('<br><img src="' + json.media.image.src + '" class="fb-img">');
							}
							if (json.subattachments!=null) {
								li.push('<br>');
								$.each(json.subattachments.data, function(j, json){
									li.push('<img src="' + json.media.image.src + '" class="fb-img">');
								});
							}
						}
					}
					if (li != "") {
						$('#facebook').append('<li><span class="fb_comm fb_textarea">' + li.join('') + '</span></li>');
					}
				});
			});
		}
	);

	$('#likes').socialLikes({
	    url: 'http://7kamado.com/',
	    title: '菜々竈 (ナナカマド) - 阿波座/創作和食',
	    data: {
	        media: 'http://7kamado.com/img/nanakamado_logo.jpg'
	    }
	});
});