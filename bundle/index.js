!function(){var o={loadHash:!0,init:function(){var o=this;$(".worker .main, .worker .job h2, .worker .job .container, .worker .job .btn, .worker .job .mt, .worker .job .solar_box").addClass("wow fadeInUp"),$(".wow").css("visibility","hidden"),this.menuSet(),this.hashSet(),this.scrollSet(),(new WOW).init(),$(window).on("load",function(){o.loadHash=!1}).on("scroll",function(){o.scrollSet()})},menuSet:function(){$(".js-toggle-menu").click(function(o){o.preventDefault(),$(".mobile-header-nav").slideToggle(),$(this).toggleClass("open")}),$("header .logo").click(function(o){o.preventDefault(),$("html, body").stop().animate({scrollTop:0},500)}),$(".pc_nav li, .mobile-nav-wrap li").click(function(o){o.preventDefault();var e=$(this).index(),i="";switch(e){case 0:i="worker";break;case 1:i="learning";break;case 2:i="welfare"}$("html, body").stop().animate({scrollTop:$("."+i).position().top},500),$(".js-toggle-menu").hasClass("open")&&$(".js-toggle-menu").click()}),$(".apply_btn").click(function(o){o.preventDefault(),$(".pc_nav li:eq(0)").click()})},hashSet:function(){var o=this,e=""!=location.hash&&location.hash.indexOf("#hash")>-1?location.hash.replace("#hash",""):"1";$(".worker .tab li").click(function(e){e.preventDefault();var i=$(this).index()+1;$(".worker .tab li").find("a").removeClass("active"),$(".worker .p1, .worker .p2, .worker .p3, .worker .p4, .worker .p5").hide(),$(this).find("a").addClass("active"),$(".worker .p"+i).show(),o.loadHash||(location.hash="#hash"+i)}).eq(e-1).click()},scrollSet:function(){var o=$(window).scrollTop(),e=$("header").position().top,i=$(".learning").position().top-$(".learning").height();o>e?$("header").css("position","fixed"):$("header").css("position","absolute"),o>i?$(".apply_btn").addClass("show"):$(".apply_btn").removeClass("show")}};o.init()}();