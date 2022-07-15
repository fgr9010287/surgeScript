const path1 = "/_res/devices";
const path2 = "/_res/user_sub_status";
const path3 = "/_res/appstore/sub";

var body = $response.body;
var path = $request.url;

function modifyAppstore() {
      var obj = JSON.parse(body);
      obj.license.status="sub";
	  body = JSON.stringify(obj);
}

function modifyStatus() {
      var obj = JSON.parse(body);
      obj.ios.status="sub";
      obj.ios.expireTime=3070928235000;
	  body = JSON.stringify(obj);
}

function modify(){

var obj = JSON.parse(body);

obj = {
   "raw_data": "DBcBHgojrvPgruIJMfb4KK/76CmjxSHSp9KipRwOnQUuf+Gt2FncFUzNvxZydUeXEzDZt/XWEm91lHFYrvT0f2AFap2L4psLI/34sKU9VLGH7kFsBYlexU/nifBtosMJqQxL4TU1pjvjl+1uyWsFAeGR42aEnVhQWgvJB5Ovcd0=",
   "license": {
     "status": "sub",
     "expireTime": 3070928235000
   },
   "_code": 200
 };
 
 body = JSON.stringify(obj);
}


if (path.indexOf(path1) != -1){
   modify();
}

if (path.indexOf(path2) != -1){
   modifyStatus();
}


$done({body});
