//문서가 로딩됐을때
$(document).ready(function(){	

		
		initDom(); //dom요소와 옵션값 초기화	
		matchHeight(".main-contents>div>div");
		saveVerticalPos(); //배열에 박스위치 저장
		bindingEvent(); //함수와 이벤트를 바인딩하는함수 호출	

		firstPage();



		/*hamburger btn*/
		$('#hamburger').on('click',function(e){
			e.preventDefault();
			if($("#hamburger").hasClass( "open" )){
						$('#hamburger').removeClass('open');
						$('.hamburgerMenuBox').stop(true,true).animate({'height':'0', 'top':'-200px'},400);
						$('.mainContents').css({'opacity':'1'});
						$('.blur-boxtop, .blur-boxbottom').css({'opacity':'0.5'});
			}else{
						$('#hamburger').addClass('open');	
						$('.hamburgerMenuBox').stop(true,true).animate({'height':'100%', 'top':'0'},400);
						$('.mainContents').css({'opacity':'0.2'});
						$('.blur-boxtop, .blur-boxbottom').css({'opacity':'0'});
						
			}
		});



		
		
		
		/*SEE MY PROJECT btn*/
		$('.work-btn').on('click',function(){

			$('.blur-boxtop, .blur-boxbottom').stop(true,true).css({'height':'0px'});
			
			$('.wrapper').stop(true,true).fadeOut(600,function(){
				$('.myProjectBox').stop(true,true).fadeIn(600);
				
			});
			
		});
		

			/*Get In touch 마우스 갖다댈시 라인모션*/
		$('.projTitle>a').on('mouseover',function(){
			$('.projTitle>span').stop(true,true).animate({'left':'10%'},600);
		});
		
		$('.projTitle>a').on('mouseleave',function(){
			$('.projTitle>span').stop(true,true).animate({'left':'5%'},600);
		});


		
		

		//엑스버튼누르면 프로젝트창 사라지는 모션
		$('.closeBtn ').on('click',function(){

			$('.myProjectBox').stop(true,true).fadeOut(600,function(){
				$('.wrapper').stop(true,true).fadeIn(600);
			});
		});
		
		
		
		
});



	
//dom요소가 담길 메모리만 미리 할당
var posArr, len, $header, $navi_li, $wrap_div, $body, $window, class_name, dur, ease, baseLine;

function initDom(){
	$navWrapper = $(".navWrapper");
	$navWrapper_h1 = $('.navWrapper h1');
	$navi_li = $("#navi>li");
	$mainContents_div_div = $(".mainContents>div>div");
	$body = $("body,html");	
	$window = $(window);
	
	
	
	
	$typo = $('.typo');
	$btn = $('#btn');
	
	
	class_name="on";
	dur = 600;
	ease = "swing";
	baseLine =-700; //다음 박스가 아래에서 출현하기 시작할때 다음 네비버튼이 미리 활성화 되도록 하기위해서
}	

//각 박스의 세로 위치값을 배열에 저장하는 함수정의
function saveVerticalPos(){
	posArr = [];   
	len = $navi_li.length;   
	
	for(var i=0; i<len; i++){
		var insertCode = $mainContents_div_div.eq(i).offset().top;
		posArr.push( insertCode );
	}
	posArr.push( $mainContents_div_div.last().offset().top +$mainContents_div_div.last().height());

}	

//hamburger menu bottom
function hamburger_menu(){

	$('a.home').on("click",function(){
		//close hamburger menu-box
					$('#hamburger').removeClass('open');
					$('.hamburgerMenuBox').stop(true,true).animate({'height':'0', 'top':'-200px'},400);
					$('.mainContents').css({'opacity':'1'});
					$('.blur-boxtop, .blur-boxbottom').css({'opacity':'0.5'});
		//scroll move
					moveScroll(0);
	});

	$('a.skillset').on("click",function(){
		//close hamburger menu-box
					$('#hamburger').removeClass('open');
					$('.hamburgerMenuBox').stop(true,true).animate({'height':'0', 'top':'-200px'},400);
					$('.mainContents').css({'opacity':'1'});
					$('.blur-boxtop, .blur-boxbottom').css({'opacity':'0.5'});
		//scroll move
					moveScroll(1);
	});

	$('a.portfolio').on("click",function(){
		//close hamburger menu-box
					$('#hamburger').removeClass('open');
					$('.hamburgerMenuBox').stop(true,true).animate({'height':'0', 'top':'-200px'},400);
					$('.mainContents').css({'opacity':'1'});
					$('.blur-boxtop, .blur-boxbottom').css({'opacity':'0.5'});
		//scroll move
					moveScroll(2);
	});

	$('a.contact').on("click",function(){
		//close hamburger menu-box
					$('#hamburger').removeClass('open');
					$('.hamburgerMenuBox').stop(true,true).animate({'height':'0', 'top':'-200px'},400);
					$('.mainContents').css({'opacity':'1'});
					$('.blur-boxtop, .blur-boxbottom').css({'opacity':'0.5'});
		//scroll move
					moveScroll(3);
	});
}



//함수와 이벤트를 바인딩
function bindingEvent(){
	
	hamburger_menu();
	//브라우저를 스크롤할 때마다
		$window.on("scroll",function(){
		var scroll = $(this).scrollTop();		
		activateBtn(scroll); //스크롤 버튼 활성화 함수 호출
		
		if(scroll<=2000 && scroll>1){	//intro typo 모션
			

				$typo.addClass('on');
	
				$('.typo').css({'opacity':'1'},1600);
			
			$('.buttonfx').addClass('on'); //SEE HOW I WORK, RESUME 버튼모션
			
			
			
		}else if(scroll<1){
		$typo.addClass('show');
			$typo.removeClass('on');
			$('.typo').css({'opacity':'1'},800);
			
			$('.buttonfx').removeClass('on');
			
		}else if (scroll>2000){ 
	
			$('.typo').css({'opacity':'0'},800);
			$('.buttonfx').removeClass('on');
			
		}else{
		
		}

	});	
	
	
	//네비 버튼 클릭시 
	$navi_li.on("click",function(e){
		e.preventDefault();
		var i = $(this).index();

		$navi_li.removeClass('on');
		$navi_li.eq(i).addClass('on');
		moveScroll(i);
	});	
	
	
	
	$navWrapper_h1.on('click',function(){
		moveScroll(0);
	});
	
	

	



/*브라우저 리사이즈시
	$window.on("resize",function(){
		matchHeight($mainContents_div_div);
			
	});*/
}















//버튼클릭시 이전화면 모두 사라지게 하는 모션
function disappearAll(){
	$('.wrapper').stop(true,true).css({'display':'none'},1000);
	$('.myProjectBox').stop(true,true).css({'display':'block'});
	$('.blur-boxtop, .blur-boxbottom').stop(true,true).css({'height':'0px'});
	

}


//스크롤 위치값을 인수로 받아서 버튼 활성화 시키는 함수 정의
function activateBtn(k){
	//버튼, 박스 활성화
	$navi_li.removeClass(class_name);	

	$mainContents_div_div.removeClass(class_name);
	
	for(var i=0; i<len; i++){
		
		if(k>=posArr[i]+baseLine && k<posArr[i+1]+baseLine){			
			$navi_li.eq(i).addClass(class_name);
			$mainContents_div_div.eq(i).addClass(class_name);
			
			$('.skillset').addClass('on');
			$('.bg-typo').removeClass('on');
			$('.bg-typo').eq(i).addClass('on');
		}

		

	}	

}





//인수로 순서값을 이용해 해당 순서의 박스의 세로 위치로 자동 스크롤하는 함수
function moveScroll(i){
	$body.stop(true,true).animate({"scrollTop": posArr[i]},dur,ease);

}	


//특정박스를 풀스크린으로 만드는 함수 정의
function matchHeight(item){
	var winH = $window.height();
	$(item).height(winH);
		
}







//첫화면 로딩시
function firstPage(){
	$('.navWrapper').stop(true,true).animate({'top':'0', 'opacity':'1'},800);	
	$('.typo').stop(true,true).animate({'top':'18%', 'opacity':'1'});
	$('#btn').stop(true,true).animate({'top':'0', 'opacity':'1'},800);
	$('.footer').stop(true,true).animate({'bottom':'15%', 'opacity':'1'},800);
}







