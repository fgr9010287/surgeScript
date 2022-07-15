var body = $response.body;
var url = $request.url;

var obj = JSON.parse(body);
      obj.isCustomer = true;
      obj.isPro=true;
      
body = JSON.stringify(obj);


$done({body});