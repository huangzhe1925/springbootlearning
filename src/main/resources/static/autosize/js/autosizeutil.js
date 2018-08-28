function AutoSizeUtil(){
	
	this.asTextID='';
	var that=this;
		
	this.init=function(asTextID) {
		that.asTextID = asTextID;
		autosize($('#')+asTextID);
	}
	
	this.append=function(text){
		$("#"+that.asTextID).append(text);
	}
};
