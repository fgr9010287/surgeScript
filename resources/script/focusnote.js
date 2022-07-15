const path1 = "/user/info";
//const path2 = "/course/main_home_info";

var body = $response.body;
var url = $request.url;

function modifyUser() {
      var obj = JSON.parse(body);
      obj.data.consumerBodyList = [{"userId":1381,"goodType":401,"goodName":"note_month_subscription","orderNo":"1482169748920770561","payStatus":true,"express":false,"payTime":"2286-01-15 09:56:10","exchangeCode":null,"totalFree":0.0,"equipmentId":115513,"loginEquipmentId":null,"loginEquipmentType":null,"platform":"ios","iosReceipt":null,"termTime":"2286-02-15 09:56:20","transactionId":"250001031145059","applicationId":0},{"userId":1381,"goodType":6,"goodName":"note_season_subscription","orderNo":"250000638154798","payStatus":true,"express":false,"payTime":"2286-03-14 17:29:51","exchangeCode":null,"totalFree":0.0,"equipmentId":null,"loginEquipmentId":null,"loginEquipmentType":null,"platform":"","iosReceipt":null,"termTime":"2286-02-15 09:56:20","transactionId":null,"applicationId":0}];
   
	  body = JSON.stringify(obj);
	  
}


if (url.indexOf(path1) != -1){
   modifyUser();
}


$done({body});
