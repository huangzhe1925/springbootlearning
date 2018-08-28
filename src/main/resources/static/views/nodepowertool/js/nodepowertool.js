$(function() {
	
	var bsipMap=null;
	
	logta = new AutoSizeUtil();
	logta.init("logta");

	var bssputil = new SelectPickerUtil();
	bssputil.init("BSsp");
	bssputil.onValueChangeEvent=function(e){
		console.log(e.currentTarget.value);
		changeSlotNodeOptions(e.currentTarget.value,null)
	}
	
	var slotsputil = new SelectPickerUtil();
	slotsputil.init("slotsp");
	slotsputil.onValueChangeEvent=function(e){
		console.log(e.currentTarget.value);
		changeSlotNodeOptions(bssputil.getSelOptionValue(),e.currentTarget.value)
	}
	
	var nodesputil = new SelectPickerUtil();
	nodesputil.init("nodesp");
	
	//var slotckUtil=new CheckboxUtil();
	//slotckUtil.init('slotck');
	
	var nodeckUtil=new CheckboxUtil();
	nodeckUtil.init('nodeck');
	
	function initBuildServerOptions(){
		var isSlotReady=false;
		var isNodeReady=false;
		for(var key in bsipMap){
			bssputil.appendOption(bsipMap[key]['buildServerID']+''+bsipMap[key]['buildServerIP'],
					bsipMap[key]['buildServerID'],bsipMap[key]['buildServerID']+' '+bsipMap[key]['buildServerIP']);
			if(!isSlotReady){
				for(var slotKey in bsipMap[key]['slotsMap']){
					var slot=bsipMap[key]['slotsMap'][slotKey];
					slotsputil.appendOption(slot['slotID'],slot['slotID'],slot['slotID']);
					
					if(!isNodeReady){
						for(var nodeKey in slot['nodesMap']){
							var node=slot['nodesMap'][nodeKey];
							nodesputil.appendOption(node['nodeIP']+''+node['nodePSNT'],node['nodeIP'],node['nodePSNT']+' '+node['nodeIP']);
						}
						isNodeReady=true;
					}
				}
				isSlotReady=true;
			}
		}
	}
	
	function changeSlotNodeOptions(buildServerId,slotId){
		
		slotsputil.clearOptions();
		nodesputil.clearOptions();
		
		for(var key in bsipMap){
			if(bsipMap[key]['buildServerID'] != buildServerId){
				continue;
			}
			//slot part 
			var slotsMap=bsipMap[key]['slotsMap'];
			if(Object.keys(slotsMap).length<=0){
				return;
			}

			var slot=null;
			for(var slotKey in slotsMap){
				slotsputil.appendOption(slotsMap[slotKey]['slotID'],slotsMap[slotKey]['slotID'],slotsMap[slotKey]['slotID']);
				if (slotKey == slotId) {
					slot=slotsMap[slotKey];
				}
			}
			slotsputil.setSelOptionValue(slotId)
		
			//Node part 
			var nodesMap=slot['nodesMap'];
			if(Object.keys(nodesMap).length<=0){
				return;
			}
			
			for(var nodeKey in nodesMap){
				var node=nodesMap[nodeKey];
				nodesputil.appendOption(node['nodeIP']+''+node['nodePSNT'],node['nodeIP'],node['nodePSNT']+' '+node['nodeIP']);
			}
		}
	}

	commonUtil.getGetJSONData("/webapi/nodelist", function(data) {
		console.log(data);
		bsipMap=data.buildServerMap;
		initBuildServerOptions();
	});
	
	npsBtnsUtil=new ButtonsUtil(); 
	npsBtnsUtil.init('NPSBtnGrp');
	npsBtnsUtil.appendButton('checkStatusBtn','Check Status',function(btnId){onNPSButtonClicked('status')});
	npsBtnsUtil.appendButton('nodePowerOnBtn','Power On',function(btnId){onNPSButtonClicked('poweron')});
	npsBtnsUtil.appendButton('nodePowerOffBtn','Power Off',function(btnId){onNPSButtonClicked('poweroff')});
	
	function onNPSButtonClicked(action){
		
		var buildServerID=bssputil.getSelOptionValue();
		var slotID=slotsputil.getSelOptionValue();
		var nodeIDs=null;
		console.log("nodeIds "+nodeckUtil.isChecked());
		if(nodeckUtil.isChecked()){
			nodeIDs=nodesputil.getSelOptionValue();
		}
		var data={"buildServerID":buildServerID,"slotID":slotID,"nodeIDs":nodeIDs,"action":action};
		commonUtil.getPostJSONData("/webapi/nodepowerstatus", data,function(retData) {
			logta.append(retData.nodeStatus.nodeStatus);
		});
		
	}
	
});
