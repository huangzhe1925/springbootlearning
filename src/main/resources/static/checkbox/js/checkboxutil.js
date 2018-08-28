function CheckboxUtil(){
	
	this.checkboxID='';
	var that=this;
		
	this.init=function(checkboxID) {
		that.checkboxID = checkboxID;
	}
	
	this.isChecked=function(){
		return $('#'+that.checkboxID+" input").is(':checked'); 
	}
};
