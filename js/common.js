var toolsObj = {
	_showSearch: function(){
		$('.toolbar_realSearch').addClass('hide');//搜索框
		$('.shadeScreen').addClass('show');//背景遮罩
		$(".city_select_pop").removeClass('show');//隐藏分类
	},
	_clickBlackBg: function(){
		$('.toolbar_realSearch').removeClass('hide');//搜索框
		$(".city_select_pop").removeClass('show');//分类
		$(".shadeScreen").removeClass('show');
	},
	_showCategory: function(){
		if($(".shadeScreen").hasClass('show')) {
			$(".city_select_pop").removeClass('show');//分类
			$(".shadeScreen").removeClass('show');//背景遮罩
		}else{
			$(".city_select_pop").addClass('show');//分类
			$(".shadeScreen").addClass('show');//背景遮罩
		}
	},
	_backTop: function(){
		$("html,body").animate({ scrollTop:0}, 500 );
	},
	_mMenuState: function(){
		if($("#container").css('position') == 'relative') {
			toolsObj._hiddenMMenu();
		}
	},
	_mMenuManager: function(){
		if($("#container").css('position') == 'relative') {
			toolsObj._hiddenMMenu();
		}else{
			toolsObj._showMMenu();
		}
	},
	_showMMenu: function(){
		$('#container').css({'position':'relative'});
		$('#container .list').css({'position':'relative', 'left':'-260px'});
		$('#m-menu').css('display','inline-block');
		$("#m-menu").stop(true,true) .animate({'right':"0px"});
	},
	_hiddenMMenu: function(){
		$('#container').css({'position':'static'});
		$('#container .list').css({'position':'static'});
		$('#m-menu').css('display','none');	
		$("#m-menu").stop(true,true).animate({'right':"-240px"});
	}
}
var anbgColor = "#F7FAFC", anbgSpeed = "10", anbgPnum = 50;