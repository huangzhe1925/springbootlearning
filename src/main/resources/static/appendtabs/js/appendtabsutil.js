function AppendTabsUtil(){
	
	this.appendTabsID='';
	this.appendTabsContentID='';
	this.onCloseTab=null;
	this.appendTabIdsMap=null;
	var that=this;

	this.init=function(appendTabsID) {
		that.appendTabsID = appendTabsID;
		that.appendTabIdsMap=new Object();
		that.appendTabsContentID=appendTabsID+"Content";
	}
/*
 * html text : CKEDITOR.instances.editor.getData()
 * origin text : CKEDITOR.instances.editor.document.getBody().getText();
 * */
	
	this.showLog=function(msg){
		//console.log(msg);	
	}
	
	this.registeCloseBtn=function(newTabID){
		$("#"+that.appendTabsID+" ."+newTabID+"-CloseBtn").on("click",function(){
			that.appendTabIdsMap[newTabID] = '0';
			that.innerCloseTab(newTabID);
		});
	}
	
	this.innerCloseTab=function(newTabID){
		var continueCloseTab=true;
		if(that.onCloseTab!=null){
			continueCloseTab=that.onCloseTab(newTabID);
		}
		if(that.onCloseTab!=null&&!continueCloseTab){
			return;
		}
		$("#"+that.appendTabsID+" ."+newTabID+"").remove();
		$("#"+that.appendTabsID+"-"+newTabID).remove();
	}
	
	this.addNewTab=function(newTabID,newTabTitle,newTabContent){
		if(null==newTabID||newTabID==''){
			return;
		}
		
		$("#"+that.appendTabsID).append("<li data-tabid=\""+newTabID+"\" class=\""+newTabID+"\"><a href=\"#"+that.appendTabsID+"-"+newTabID+"\" data-toggle=\"tab\">"+newTabTitle
				+"<button type=\"button\" class=\"btn-xs btn-danger "+newTabID+"-CloseBtn"+"\">[x]</button></a></li>");
		$("#"+that.appendTabsContentID).append("<div class=\"tab-pane\" id=\""+that.appendTabsID+"-"+newTabID+"\"></div>");
		$("#"+that.appendTabsID+"-"+newTabID).html(newTabContent);
		
		that.registeCloseBtn(newTabID);
	}
	
	this.addUniqueNewTab=function(newTabID,newTabTitle,newTabContent){
		if(null==newTabID||newTabID==''){
			return;
		}
		
		if('1' == that.appendTabIdsMap[newTabID]){
			console.log("already have this tab");
			return
		}else{
			that.appendTabIdsMap[newTabID] = '1';
		}
		
		that.addNewTab(newTabID,newTabTitle,newTabContent);
	}
	
	this.getActiveTabId=function(){
		var activeTabid=null;
		$("#"+that.appendTabsID+" li").each(function(index,curTab) {
			if($(curTab).hasClass("active")){
				//alert($(curTab).attr("data-tabid"));
				activeTabid=$(curTab).attr("data-tabid")
			}
		});
		
		return activeTabid;
	}
	
};



















