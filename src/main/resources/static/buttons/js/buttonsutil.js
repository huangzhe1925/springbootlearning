function ButtonsUtil(){
	
	this.btnGrpId='';
	var that=this;
		
	this.init=function(btnGrpId){
		that.btnGrpId = btnGrpId;
	}
	
	this.clearButtons=function(){
		$("#"+that.btnGrpId).html('');
	}
	
	this.appendButton=function(btnId,label,onClick){
		$("#"+that.btnGrpId).append("<button data-id=\""+btnId+"\"type=\"button\" class=\"btn btn-default\">"+label+"</button>");
		if(null != onClick ){
			$("#"+that.btnGrpId+" button[data-id='"+btnId+"']").click(function(){
				onClick(btnId);
			});
		}
	}
};
