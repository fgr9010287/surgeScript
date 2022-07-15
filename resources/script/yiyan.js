var body = $response.body;
var path = $request.url;

function modifyInfo() {
      //var obj = JSON.parse(body);
      body = body.replace(/\"viptype\":"1\"/g,'\"viptype\":"4\"');
      
}



modifyInfo();


$done({body});