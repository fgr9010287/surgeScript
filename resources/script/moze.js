/**

surge3+

http-response ^https:\/\/(gateway-)*api\.dushu\.io\/ requires-body=1,max-size=0,script-path=resources/script/dushu.js

mitm:api.revenuecat.com

*/

const path1 = "/v1/subscribers";
const path2 = "/v1/receipts";



var body = $response.body;
var url = $request.url;

function modifySubscriber() {
  
 if (body.indexOf("expires_date")!= -1 ) {
      body = body.replace(/\"expires_date":"\d{4}/g,'\"expires_date": "2028');
      body = body.replace(/\"grace_period_expires_date": "\d{4}/g,'\"grace_period_expires_date":"2028');
      body = body.replace(/\"ownership_type":"\w+/g,'\"ownership_type": "PURCHASED');
    } else {
      body=JSON.stringify({"request_date_ms":1647423599353,"request_date":"2022-03-16T09:39:59Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-03-16T09:31:11Z","original_application_version":"112","other_purchases":{},"management_url":null,"subscriptions":{"filebox_pro":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"trial","expires_date":"2028-02-27T04:55:23Z","grace_period_expires_date":null,"unsubscribe_detected_at":"2022-02-20T04:57:04Z","original_purchase_date":"2022-02-20T04:55:24Z","purchase_date":"2022-02-20T04:55:23Z","store":"app_store"}},"entitlements":{"pro":{"expires_date":"2028-02-27T04:55:23Z","purchase_date":"2022-02-20T04:55:23Z","product_identifier":"filebox_pro","grace_period_expires_date":null}},"original_purchase_date":"2022-03-15T14:47:38Z","original_app_user_id":"$RCAnonymousID:606ee8d5d5884d729024457e4eac0e57","last_seen":"2022-03-16T09:38:37Z"}});
    }
    

    
}





if (url.indexOf(path1) != -1 ||
    url.indexOf(path2) != -1
){
  
  if (url.indexOf("offerings") != -1) {
    
  }else {
    modifySubscriber();
  }
   
}


$done({body});