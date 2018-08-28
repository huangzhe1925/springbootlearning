function SelectPickerUtil(){
	
	this.selectPickerID='';
	this.onValueChangeEvent=null;
	var that=this;
		
	this.init=function(selectPickerID) {
		that.selectPickerID = selectPickerID;
		that.innerOnValueChangeEvent();
	}
	
	this.clearOptions=function(){
		$("#"+that.selectPickerID).html('');
		$("#"+that.selectPickerID).selectpicker('refresh');
	}
	
	this.setOptions=function(htmlcontent){
		$("#"+that.selectPickerID).html(htmlcontent);
	}
	
	this.appendOption=function(token,value,content){
		$("#"+that.selectPickerID).append("<option data-tokens=\""+token+"\"  value=\""+value+"\" >"+content+"</option>");
		$("#"+that.selectPickerID).selectpicker('refresh');
	}
	
	this.setSelOptionValue=function(value){
		$("#"+that.selectPickerID).val(value);
		$("#"+that.selectPickerID).selectpicker('render');
	}
	
	this.getSelOptionValue=function(){
		return $("#"+that.selectPickerID).val();
	}
	
	this.innerOnValueChangeEvent=function(){
		$("#"+that.selectPickerID).on('changed.bs.select', function (e) {
			  if(that.onValueChangeEvent != null){
				  that.onValueChangeEvent(e);
			  }
		});
	}
	
	
	

};
