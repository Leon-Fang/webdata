function switchKeywordType(objname, stype) {
	var sclass_1;
	var sclass_2;
	var sclass_3;
	
	if(stype == 'kt'){
		sclass_1 = 'kt_bg1';
		sclass_2 = 'kt_bg2';
		sclass_3 = 'kt_bg3';
	}else if(stype == 'it'){
		sclass_1 = 'it_bg1';
		sclass_2 = 'it_bg2';
		sclass_3 = 'it_bg3';
	}else if(stype == 'xs'){
		sclass_1 = 'xy_bg1';
		sclass_2 = 'xy_bg2';
		sclass_3 = 'xy_bg3';
	}else if(stype == 'adv'){
		sclass_1 = 'adv_bg1';
		sclass_2 = 'adv_bg2';
		sclass_3 = 'adv_bg3';
	}else if(stype == 'kt2013'){
		sclass_1 = 'kt2013_bg1';
		sclass_2 = 'kt2013_bg2';
		sclass_3 = 'kt2013_bg3';
	}
	
	if(objname == 'keyword_type_all'){
		document.getElementById('keyword_type_all').className = sclass_2;
		document.getElementById('keyword_type_job').className = sclass_3;
		document.getElementById('keyword_type_company').className = sclass_3;
		$("#frmKeywordSearch")[0].keywordtype.value = 2;
	}
	
	if(objname == 'keyword_type_job'){
		document.getElementById('keyword_type_all').className = sclass_1;
		document.getElementById('keyword_type_job').className = sclass_2;
		document.getElementById('keyword_type_company').className = sclass_3;
		$("#frmKeywordSearch")[0].keywordtype.value = 0;
	}
	
	if(objname == 'keyword_type_company'){
		document.getElementById('keyword_type_all').className = sclass_1;
		document.getElementById('keyword_type_job').className = sclass_1;
		document.getElementById('keyword_type_company').className = sclass_2;
		$("#frmKeywordSearch")[0].keywordtype.value = 1;
	}
}