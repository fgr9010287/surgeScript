const path1 = "/1.1/users/";
const path2 = "/1.1/call/getAllFontGroupsWithBoughtStatus";

var body = $response.body;
var url = $request.url;

function modifyUser() {
      var obj = JSON.parse(body);
      obj.lifetimeMembership=true;
      obj.membership=true;
      obj.coins = 100;
      obj.tippedCoins = 100;
	  body = JSON.stringify(obj);
}

function modifyFont(){
    //console.log("modifyFont");
    var obj = JSON.parse(body);
    body = body.replace(/\"isBought\":false/g,'\"isBought\":true');
body = body.replace(/\"membership\":false/g,'\"membership\":true');
    //console.log(body);

}

if (url.indexOf(path1)!=-1){
      modifyUser();
}

if (url.indexOf(path2)!=-1){
      modifyFont();
}

$done({body});
