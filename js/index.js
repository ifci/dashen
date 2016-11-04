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

	Vue.filter('timeAgo', function(value) {
		var nowTime = Date.parse(new Date()) / 1000;
		var diff = nowTime - value;
		var result = '';
		if (diff < 60) {
			result = diff + '秒前';
		} else if (diff < 3600) {
			result = parseInt(diff / 60) + '分钟前';
		} else if (diff < 3600 * 24) {
			result = parseInt(diff / 3600) + '小时前';
		} else {
			result = parseInt(diff / 3600 / 24) + '天前';
		}
		return result;
    });

	var vm = new Vue({
        el: '#app',
        data: {
            list: [],
            stateActive: '',
            page: 0,
            totalPage: 0
        },
        methods: {
        	getList: function() {
	        	var _self = this;
	        	$.getJSON("api/getList.json?state=" + this.stateActive + '&p=' + this.page, function(data) {
	        		_self.totalPage = parseInt(data.numFound / 10) + 1;
	        		_self.list = _self.list.concat(data.docs);
	        	});
        	},
        	state: function(val) {
        		this.page = 0;
        		this.stateActive = val;
        		this.list = [];
        		this.getList();
        	},
        	more: function() {
        		this.page++;
        		this.getList();
        	},
        	search: function() {
        		console.log(this.$els);
        		location.href = 'search?q=' + this.$els.searchText.value;
        	}
        },
        ready: function() {
        	this.getList();
        }
    });
});


