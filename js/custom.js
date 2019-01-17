

$(document).ready(function(){


$('.welcomeText').stop(true,true).animate({'top':'50%', 'opacity':'1'},1000,function(){
	$('.welcomeText>span').eq(0).animate({'opacity':'1'});
	$('.welcomeText>span').eq(1).delay(500).animate({'opacity':'1'});
	$('.welcomeText>span').eq(2).delay(1000).animate({'opacity':'1'});
	$('.welcomeText>span').eq(3).delay(1500).animate({'opacity':'1'});
	$('.welcomeText>span').eq(4).delay(2000).animate({'opacity':'1'});
	$('.welcomeText>span').eq(5).delay(2500).animate({'opacity':'1'});
	$('.welcomeText>span').eq(6).delay(3000).animate({'opacity':'1'});
	$('.welcomeText>span').eq(7).delay(3500).animate({'opacity':'1'});
	$('.welcomeText>span').eq(8).delay(4000).animate({'opacity':'1'});
	$('.wrapper').stop(true,true).delay(4500).animate({'left':'-100%'},1000, function(){
		$(location).attr('href','mainpage/home.html');
		history.pushState(null,null,'mainpage');
	});
	
});



//화면클릭시 메인페이지로 이동
$('html,body').on('click',function(){
	
	$(location).attr('href','mainpage/home.html');
	history.pushState(null,null,'mainpage');
});

//myStory 나타나게
$('.myStory').stop(true,true).animate({ 'opacity':'1'},1000);

});


