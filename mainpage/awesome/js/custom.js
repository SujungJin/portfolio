

$(document).ready(function(){
	
//1번 눌렀을때 이벤트
	$("#navi1 li.first").on('click',function(e){
		e.preventDefault;
		click_1();
	});


//2번 눌렀을때 이벤트
	$("#navi1 li.second").on('click',function(e){
		e.preventDefault;
		click_2();
			
	});
	
//3번 눌렀을때 이벤트
	$("#navi2 li.third").on('click',function(e){
		e.preventDefault;
		click_3();
			
	});
	
//4번 눌렀을때 이벤트
	$("#navi2 li.fourth").on('click',function(e){
		e.preventDefault;
		click_4();
			
	});
	
//hambergar Btn 클릭시 naviBox 창 열리는 이벤트
	$(".hamBtn").on("click",function(e){
		e.preventDefault();
		$(".naviBox").addClass("on");
		$(".hamBtn").css({"display":"none"});
		$(".closeBtn").css({"display":"block"});
		$(".scrollDown,p").css({"display":"none"});
		$(".closeBtn>a>i,#navi1 li a").stop(true,true).css({"color":"#fff"});
		$(".scrollDown a i,span").stop(true,true).css({"display":"none"});
		$("#navi1,#navi2").css({"display":"none"});
		$("h1").stop(true,true).animate({"margin-left":"-10px"},600);
	});

//closeBtn 클릭시 naviBox 창 닫히는 이벤트, h1클릭시 메인화면으로 이동하는 함수
	$(".closeBtn, h1").on("click",function(e){
		e.preventDefault();
		closeEverything();
		click_1();
		$("#navi1,#navi2").css({"display":"block"});
	});

//naviBox 오픈시 menu 클릭시 이벤트
	$("#menu li.one").on("click",function(e){
		e.preventDefault();
		closeEverything();
		click_2();
	});
	
	$("#menu li.two").on("click",function(e){
		e.preventDefault();
		closeEverything();
		click_3();
	});
	
	$("#menu li.three").on("click",function(e){
		e.preventDefault();
		closeEverything();
		click_4();
	});

//마우스 스크롤에 따른 이벤트
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        console.log('Scroll up');
    }
    else {
        console.log('Scroll down');
    }
});


});




//함수정의

	//이미지 사라지기 이벤트 함수
	function disappear1() {
		$(".box1").stop(true,true).animate({"top":"3818px","opacity":"0"},600);		
	}

	function disappear2() {
		$(".box2").stop(true,true).animate({"top":"3818px","opacity":"0"},600,function(){		
			$(".typo2").stop(true,true).animate({"right":"-800px","opacity":"0"},600);
		});
	}

	function disappear3() {
		$(".box3").stop(true,true).animate({"left":"-3100px","opacity":"0"},600,function(){		
			$(".typo3").stop(true,true).animate({"right":"-1100px","opacity":"0"},600);
		});
	}

	function disappear4() {
		$(".box4").stop(true,true).animate({"top":"3818px","opacity":"0"},600,function(){		
			$(".typo4").stop(true,true).animate({"right":"-800px","opacity":"0"},600);
		});
	}

	//이미지 나타나기 이벤트 함수
	function appear1() {
		$(".box1").stop(true,true).delay(1200).animate({"top":"180px","opacity":"1"},600);	
	}

	function appear2() {
		$(".box2").stop(true,true).animate({"top":"0","opacity":"1"},600,function(){		
				$(".typo2").stop(true,true).animate({"right":"0","opacity":"1"},600);			
		});
	}

	function appear3() {
		$(".box3").stop(true,true).animate({"left":"0","opacity":"1"},600,function(){
				$(".typo3").stop(true,true).animate({"right":"0","opacity":"1"},600);
		});
	}

	function appear4() {
		$(".box4").stop(true,true).animate({"top":"0","opacity":"1"},600,function(){		
				$(".typo4").stop(true,true).animate({"right":"0","opacity":"1"},600);			
		});
	}

	//1번 눌렀을때 이벤트함수
	function click_1(){
		$("h1").stop(true,true).animate({"margin-left":"-30px"},600);
		$(".hamBtn>a>i,.scrollDown a i,span,#navi1 li a").stop(true,true).css({"color":"#000"});	
			disappear2();
			disappear3();
			disappear4();
			appear1();
	}

	//2번 눌렀을때 이벤트함수
	function click_2(){
		$("h1").stop(true,true).animate({"margin-left":"80px"},600);
		$(".hamBtn>a>i,.scrollDown a i,span,#navi1 li a").stop(true,true).css({"color":"#000"});
		$("#navi1,#navi2").css({"display":"block"});		
			disappear1();
			disappear3();
			disappear4();
			appear2();
	}
	
	//3번 눌렀을때 이벤트함수
	function click_3(){
		$("h1").stop(true,true).animate({"margin-left":"80px"},600);
		$(".hamBtn>a>i,.scrollDown a i,span,#navi1 li a").stop(true,true).css({"color":"#fff"});
				
		$("#navi1,#navi2").css({"display":"block"});		
			disappear1();
			disappear2();
			disappear4();
			appear3();
	}
	
	//4번 눌렀을때 이벤트함수
	function click_4(){
		$("h1").stop(true,true).animate({"margin-left":"80px"},600);
		$(".hamBtn>a>i,.scrollDown a i,span,#navi1 li a").stop(true,true).css({"color":"#fff"});
		$("#navi1,#navi2").css({"display":"block"});
			disappear1();
			disappear2();
			disappear3();
			appear4();
	}
	
	function closeEverything(){
		$(".naviBox").removeClass("on");
		$(".hamBtn").css({"display":"block"});
		$(".closeBtn").css({"display":"none"});
		$(".scrollDown,p").css({"display":"block"});
		$(".closeBtn>a>i,#navi1 li a").stop(true,true).css({"color":"#000"});
		$(".scrollDown a i,span").stop(true,true).css({"display":"block"});
	}
	
