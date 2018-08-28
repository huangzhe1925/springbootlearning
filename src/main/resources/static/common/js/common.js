function getContextPath() {
    var pathName = document.location.pathname;
    var index = pathName.substr(1).indexOf("/");
    var result = pathName.substr(0,index+1);
    return result;
}


String.prototype.startWith = function(str) {
	if (str == null || str == "" || this.length == 0
			|| str.length > this.length)
		return false;
	if (this.substr(0, str.length) == str)
		return true;
	else
		return false;
	return true;
};

String.prototype.endWith = function(str) {
	if (str == null || str == "" || this.length == 0
			|| str.length > this.length)
		return false;
	if (this.substring(this.length - str.length) == str)
		return true;
	else
		return false;
	return true;
};

Array.prototype.del=function(n) {　//n表示第几项，从0开始算起。
	//prototype为对象原型，注意这里为对象增加自定义方法的方法。
	　if(n<0)　//如果n<0，则不进行任何操作。
	return this;
	　else
	return this.slice(0,n).concat(this.slice(n+1,this.length));
}

function CommonUtil(){
	var that=this;
	
	this.getGetJSONData=function(requestUrl,recall) {
		$.ajax({
			type : 'GET',
			url : requestUrl,
			dataType : 'json',
			contentType : 'application/json;charset=utf-8',
			success : function(data) {
				if(data.isSuccessful){
					recall(data);
				}else{
					console.log(data);
					recall(null);
				}
			},
			error : function(msg) {
				console.log(msg);
				recall(null);
			}
		});
	}
	
	this.getPostJSONData=function(requestUrl,inputData,recall) {
		var ret=null;
		$.ajax({
			type : 'POST',
			url : requestUrl,
			dataType : 'json',
			contentType : 'application/json;charset=utf-8',
			data : JSON.stringify(inputData),
			success : function(data) {
				if(data.isSuccessful){
					recall(data);
				}else{
					console.log(data);
					recall(null);
				}
			},
			error : function(msg) {
				console.log(msg);
				recall(null);
			}
		});
		
		return ret;
	}

};
commonUtil=new CommonUtil();
