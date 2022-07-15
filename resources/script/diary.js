const path1 = "/api/profile";

var body = $response.body;
var path = $request.url;

function modify() {
      var obj = JSON.parse(body);
      if(obj.data.membership_status) obj.data.membership_status="premium";
      if(obj.data.expires_at) obj.data.expires_at="2029-08-02T16:49:13.257608";
      
	  body = JSON.stringify(obj);
	  
}

if (path.indexOf(path1) != -1){
   modify();
}

$done({body});
