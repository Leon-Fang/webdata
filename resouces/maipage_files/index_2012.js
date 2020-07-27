function showAdsInfo(top,left,imgwidth,imgheight,imgnode,adid,isAjax,adprefix,attr){
	$("#zoomer").css({
		"display":"none"
	});
	$("#zoomer").html('');
	var span_height = imgheight - 7;
	var span_width = imgwidth - 7;
 	if(imgwidth == 263 || imgwidth == 278 || imgwidth == 281 || imgwidth == 137 || imgwidth == 290 || imgwidth == 317){
 		$("#zoomer").attr("class","p1");
 	}else if(imgwidth == 590 || imgwidth == 965){
 		$("#zoomer").attr("class","p2");
 	}else if(imgwidth == 155){
 		$("#zoomer").attr("class","p3");
 	}else if(imgwidth == 187){
 		$("#zoomer").attr("class","p4");
 	}
 	if(top == 0){
 		top += 2;
 	}else if(imgwidth == 317 || imgwidth ==  155){
 		
 	}else if(imgwidth == 965 && attr =="ad_a"){
 		top -= 2;
 	}else{
 		top -= 3;
 	}
 	left -= 3;
 	imgwidth  = parseInt(imgwidth)+2;
	if(1 == isAjax){
		var joburl = getUrlFromAdid(adprefix,adid);
		joburl += "?callback=?&adid="+adid;
		$.getJSON(joburl,function(data){
			data = data.content;
			var z = $("#zoomer");
			z.append(imgnode);
			var flashnode = $("#f_"+adid).clone();
			if(flashnode.length > 0){
				flashnode.css({
					"margin-top" : "1px",
					"margin-left" : "1px"
				});
				z.append(flashnode);
			}
			style = 'margin-top:' + span_height + 'px;margin-left:'+ span_width +'px;';
			z.append(data);
			 	z.find(".index_ad_popup").find(".ad_more").attr('style',style);
			 	z.css({
			 		"z-index" : "10",
			 		"top" : top+"px",
			 		"margin-bottom" : "10px",
			 		"left" : left+"px",
			 		"width" : imgwidth + "px",
			 		"display" : "block",
			 		"overflow" : "hidden"
			 	});
			
 			var h = z.offset().top + z.height() - ($(window).height() + $(window).scrollTop());
 			0 < h && $("html,body").animate({
				scrollTop: $(window).scrollTop() + h + 2
			}, 500);
			
			
		});
	}else {
		var data = $("#"+adid).html();
		var z = $("#zoomer");
		z.append(imgnode);
		var flashnode = $("#f_"+adid).clone();
		flashnode.css({
			"margin-top" : "1px",
			"margin-left" : "1px"
		});
		z.append(flashnode);
		z.append(data);
		
		var style = 'margin-top:' + span_height + 'px;margin-left:'+ span_width +'px;';
	 	z.find(".index_ad_popup").find(".ad_more").attr('style',style);
	 
	 	z.css({
	 		"z-index" : "10",
	 		"top" : top+"px",
	 		"margin-bottom" : "10px",
	 		"left" : left+"px",
	 		"width" : imgwidth + "px",
	 		"display" : "block"
	 	});
		var h = z.offset().top + z.height() - ($(window).height() + $(window).scrollTop());
		0 < h && $("html,body").animate({
			scrollTop: $(window).scrollTop() + h + 2
		}, 500);

	}
 }
function getUrlFromAdid(adprefix,adid){
 	return adprefix+"/include/ajax/adcontent.php";
}
function over4Html(node,adid){
	var imgwidth = $(node).find("img").attr("width");
	var imgheight = $(node).find("img").attr("height");
	
	var top= $(node).parent().offset().top;
	var left= $(node).offset().left;
	var imgnode = $(node).html();
	var a = '<a adid=\"' + adid + '\" onmousedown="return AdsClick('+ adid +')" class="'+$(node).attr('class')+'" href="' + $(node).attr('href')+ '" target="_blank" style="'+$(node).attr('style')+'">' + imgnode + '</a>';
	var isAjax = 0;
	handle = setTimeout(function(){
		showAdsInfo(top,left,imgwidth,imgheight,a,adid,isAjax,'');
	},1000);
	$(node).mouseout(function(){
		clearTimeout(handle);
	});	
}
function over4Ajax(adprefix,node,adid){
	var imgwidth = $(node).find("img").attr("width");
	var imgheight = $(node).find("img").attr("height");
	
	var top= $(node).parent().offset().top;
	var left= $(node).offset().left;
	var imgnode = $(node).html();
	var a = '<a adid=\"' + adid + '\" onmousedown="return AdsClick('+ adid +')" class=\"index_ad_popup\" style=\"'+$(node).attr('style')+'\" href=\"' + $(node).attr('href')+ '\" target=\"_blank\">' + imgnode + '</a>';
	var isAjax = 1;
	var attr = $(node).attr("attr");
	handle = setTimeout(function(){
		showAdsInfo(top,left,imgwidth,imgheight,a,adid,isAjax,adprefix,attr);
		},1000);

	$(node).mouseout(function(){
		clearTimeout(handle);
	});
}
