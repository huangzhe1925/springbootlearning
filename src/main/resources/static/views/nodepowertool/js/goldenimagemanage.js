$(function() {
	
	var bsipMap=null;
	var bsvMap=null;
	var givMap=null;
	
	var gilogta = new AutoSizeUtil();
	gilogta.init("gilogta");

	var gimgivsp = new SelectPickerUtil();
	gimgivsp.init("gimgivsp");
	
	var gimgitypesp = new SelectPickerUtil();
	gimgitypesp.init("gimgitypesp");
	gimgitypesp.appendOption("dell","dell","dell");
	gimgitypesp.appendOption("legacy","legacy","legacy");
	
	var gimbsvsp = new SelectPickerUtil();
	gimbsvsp.init("gimbsvsp");
	
	var gimBSsp = new SelectPickerUtil();
	gimBSsp.init("gimBSsp");
	
	function initBuildServerOptions(){
		var isSlotReady=false;
		var isNodeReady=false;
		for(var key in bsipMap){
			gimBSsp.appendOption(bsipMap[key]['buildServerID']+''+bsipMap[key]['buildServerIP'],
					bsipMap[key]['buildServerID'],bsipMap[key]['buildServerID']+' '+bsipMap[key]['buildServerIP']);
		}
	}
	
	commonUtil.getGetJSONData("/webapi/nodelist", function(data) {
		console.log(data);
		bsipMap=data.buildServerMap;
		initBuildServerOptions();
	});
	
	commonUtil.getGetJSONData("/webapi/givmap", function(data) {
		console.log(data);
		givMap=data.giMap;
		for(var key in givMap){
			gimgivsp.appendOption(key,key,key);
		}
	});
	
	commonUtil.getGetJSONData("/webapi/bsvmap", function(data) {
		console.log(data);
		bsvMap=data.bsMap;
		for(var key in bsvMap){
			gimbsvsp.appendOption(key,key,key);
		}
	});

	var gimBtnsUtil=new ButtonsUtil(); 
	gimBtnsUtil.init('GIMBtnGrp');
	gimBtnsUtil.appendButton('replaceGIBtn','Replace Golden Image Version',function(btnId){onGIMButtonClicked('gi')});
	gimBtnsUtil.appendButton('replaceBSBtn','Replace Build Server Version',function(btnId){onGIMButtonClicked('bs')});
	
	function onGIMButtonClicked(action){
		
		var buildServerID=gimBSsp.getSelOptionValue();
		var giv=gimgivsp.getSelOptionValue();
		var bsv=gimbsvsp.getSelOptionValue();
		var gitype=gimgitypesp.getSelOptionValue();
		
		var data={"buildServerID":buildServerID,"goldenImageVersion":giv,"buildServerVersion":bsv,"goldenImageType":gitype,"action":action};
		
		if(action=='gi'){
			gilogta.append("Golen Image Upgrade In Progress,Please wait...");
		}else if(action=='bs'){
			gilogta.append("Build Server Upgrade In Progress,Please wait...");
		}
		
		commonUtil.getPostJSONData("/webapi/bsvupdate", data,function(retData) {
			console.log(retData);
			gilogta.append(retData.message+"\n");
		});
		
	}
	
});
