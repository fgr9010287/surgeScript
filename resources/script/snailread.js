const path = "/gain/readtime/";

var body = $response.body;
var url = $request.url;

function modify() {
      var obj = JSON.parse(body);
      obj.tradeEndTime = 1679685290000;
	  body = JSON.stringify(obj);
}

if (url.indexOf(path) != -1){
   modify();
}

$done({body});
