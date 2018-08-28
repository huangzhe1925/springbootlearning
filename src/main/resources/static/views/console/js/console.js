
$(function(){
	
    //----------------editorTabs------------------------------------
    editorTabs=new AppendTabsUtil();
    editorTabs.init('editorTabs');
    
	$('#nodePowerManageBtn').on('click',function(){
		editorTabs.addUniqueNewTab('npm',"Node Power Management",
				"<iframe width=100% height=800px frameborder=0 scrolling=auto src='/web/tools/nodepowermanage'></iframe>");
	});
	
	$('#goldenImageManageBtn').on('click',function(){
		editorTabs.addUniqueNewTab('gim',"Golden Image Management",
				"<iframe width=100% height=800px frameborder=0 scrolling=auto src='/web/tools/goldenimagemanage'></iframe>");
	});
	
	
	
	
//	var frameHeight=$(window).height();
//	$( ".left_part" ).height(frameHeight);
//	$( ".right_part" ).height(frameHeight);
//	
////	$( ".left_resizable" ).resizable({
////		minHeight: frameHeight-3,
////		maxHeight: frameHeight-3,
////		maxWidth:leftWidth-5
////	});
////	$( ".right_resizable" ).resizable({
////		minHeight: frameHeight-3,
////		maxHeight: frameHeight-3,
////		maxWidth:rightWidth-5
////	});
//	
//	
//
//	addNodeModal=new ModalUtil();
//	addNodeModal.init('addNodeModal',{ keyboard: true ,show:false});
//	addNodeModal.onShow=function(){
//		var selNodePath=cmsTree.getSelectedNodeabsolutePath();
//		//console.log(selNodePath);
//		$("#newNodePath").val('');
//		if(null!=selNodePath){
//			$("#newNodePath").val(selNodePath);
//			$("#newNodePath").prop("disabled",true);
//		}else{
//			$("#newNodeName").val();
//			$("#newNodePath").removeAttr("disabled");
//		}
//	}
//	addNodeModal.onSubmitButton=function(){
//		processSubmit();
//	}
//	
//
//	
//	continueModal=new ModalUtil();
//	continueModal.init('continueModal',{ keyboard: true ,show:false});
//	
//	confirmModal=new ModalUtil();
//	confirmModal.init('confirmModal',{ keyboard: true ,show:false});
//	
//	function resetAddNodeModal(){
//		fileUploader.clear();
//		 $("#uploadercb").prop('checked',false);
//		 $("#newFilePropName").val('');
//		 $("#newNodeName").val('');
//		 $("#fileTabContent").hide();
//		 $('#addNodeTabs li:eq(0) a').tab('show');
//		 
//		 inputTableGroups.reset();
//	}
//	
//	//------------------- input groups part ----------------------
//	inputTableGroups=new InputTableGroups();
//	inputTableGroups.init('addPropInputGroups');
//	
//	
//	//-------------------file uploader part-----------------
//	fileUploader=new FileUploader();
//	fileUploader.init('fileuploader',
//		{
//		 uploadUrl: '/cmsrepomgnt/upload', // you must set a valid URL here else you will get an error
//		 fileExistenceCheckUrl: '/cmsrepomgnt/uploadedfilecheck',
//	     uploadExtraData: function getUploadExtraData(){
//	    	 				var newNodeName = $("#newNodeName").val();
//	    	 				var newNodePath = $("#newNodePath").val();
//	    	 				var newFilePropName= $("#newFilePropName").val();
//	    	 				return {'nodeName':newNodeName,'nodePath':newNodePath,'nodeProperyName':newFilePropName};
//	     }
//		}
//	);
//	
//	fileUploader.onFilepreupload=function(event, data, previewId, index){
//		var extra=data.extra;
//		console.log("extra");
//		console.log(extra);
//		console.log(extra.nodeProperyName=="");
//		if (null==extra.nodeName||null==extra.nodePath||
//				extra.nodePath==""||extra.nodeName=="" ||
//					null==extra.nodeProperyName||extra.nodeProperyName=="") {
//			return {
//				message: 'Node Path and Node Name and Property Name must be specified!',
//				data: {'error': 'nodePath'}
//			};
//		}
//	}
//	
//	fileUploader.onFileuploaded=function(event, data, previewId, index){
//		console.log("file uploaded");
//		//console.log(fileUploader.uploadedFiles);
//	}
//	
//	
//	fileUploader.onCheckRemoteUploadedFileExistence=function(data){
//		console.log(data);
//		if(data.isSuccessful&&data.isFileUploaded){
//			createNewNode();
//		}
//	}
//	
//    $("#uploadercb").prop('checked',false);
//    $("#fileTabContent").hide();
//    $("#uploadercb").on("click", function(){
//    	if($(this).prop('checked')){
//    		fileUploader.enable();
//    		$("#fileTabContent").show();
//    	}else{
//    		fileUploader.disable();
//    		$("#fileTabContent").hide();
//    	}
//    });
    
    //----------------editorTabs------------------------------------
//    editorTabs=new AppendTabsUtil();
//    editorTabs.init('editorTabs');
//    editorTabs.addNewTab('newTab1',"TestTab","<div id=\"newTab1-editor\"></div>");
//    editorTabs.addNewTab('newTab2',"TestTab2","test");
    
	
});




