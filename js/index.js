$(function(){
	//#搜索框显示
	$('.search_tb_index').click(function(){ toolsObj._showSearch(); });
	//#背景遮罩触发隐藏
	$('.shadeScreen').click(function(){ toolsObj._clickBlackBg();});
	//#分类赛选显示
	$(".location_tb_index").click(function(){ toolsObj._showCategory();});
	//#返回顶部
	$('#side .back').click(function(){ toolsObj._backTop();});

	//#侧边栏
	$('#side .menu').click(function(){ toolsObj._mMenuManager();});
	//#屏幕滚动监控和改变浏览器尺寸
	$(window).bind("scroll resize", function(event){ toolsObj._mMenuState();});


	var vm = new Vue({
        el: '#app',
        data: {
            list: []
        },
        methods: {
        },
        ready: function() {
        	var _self = this;
        	$.getJSON("api/getList.json", function(data) {
        		_self.list = data.docs;
        	});
        }
    });
});


