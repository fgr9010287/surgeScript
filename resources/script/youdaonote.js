//

const path1 = "/yws/mapi/user";
const path2 = "/yws/api/self";
const path3 = "/yws/mapi/payment"
const path4 = "/yws/api/vipPromotion"
const path5 = "/yws/mapi/user"
var body = $response.body;
var url = $request.url;

if (url.indexOf(path1) != -1){
	let obj = JSON.parse(body);
	if(obj.groupTrial) obj.groupTrial=true;
	if(obj.is_vip) obj.is_vip=true;
	body = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1){
	let obj = JSON.parse(body);
	obj.vip=true;
	if(obj.properties) obj.properties={"FEED_BACK_ID":"0","isvip":"true","pinyin":"Super","realInfo":"true"};
	body = JSON.stringify(obj);
}

if (url.indexOf(path3) != -1){
	let obj = JSON.parse(body);
	obj = {"service":1,"allowRefund":false,"start":1563198011000,"end":1664416000000,"ituneRemaining":0,"remaining":0,"remainTime":1217953692,"um":{"nn":"Super","u":29134,"q":54761881600,"dq":200,"dp":0},"payYear":true};
	body = JSON.stringify(obj);
}

if (url.indexOf(path4) != -1){
	let obj = JSON.parse(body);
	obj = {"status":"1","erroCode":"0","TrialEndTime":"1664407611000"};
	body = JSON.stringify(obj);
}


/*if (url.indexOf(path5 != -1)){
	let obj = JSON.parse(body);
	if(obj.ic) obj.ic= {"ic":null,"hvrs":{"3":1,"10":4,"15":7,"2":1,"20":10,"5":1.5},"org_trial_ts":-1,"nn":"Super","groupTrial":true,"bindEmails":"","tv":0,"org_enabled":false,"esi":"15000","ut":1,"vq":"3","wn":false,"isq":"10737418240","hvc":3,"es":"0","password":"","ocr_vmco":"40","ier":null,"roleLogoM":{"ocr_mico_new":40,"ocr_mico":40,"id":2,"ocr_mppo":40,"ocr_ecpm":2147483647,"ocr_mppo_new":40},"logo_edu":false,"pr":"ROLE_VIP","mb":"false","163mg":false,"df":"SVR94842D72D4F9494B9D34D32F97800214","ti":"20000","max_res_size":1073741824,"ug":"YNote-iPhone;Other","MYSHARE_UPDATE_TIME":-1,"esq":"10737418240","multi":true,"pasa":false,"is":"0","sn":1,"ef":false,"mrs":"1073741824","ll":"1563199443637","is_vip":true,"nbsq":-1,"rt":"1563197830410","org_purchase_ts":-1,"q":"54763978752","tn":"3","uid":"weixinobU7VjivXF2BPPHsvyPG3MGF1Gl8","163sq":"2147483648","changeable_properties":{},"ebvt":0,"ssu":"0","rv":10,"163su":"0","dn":false,"uwor":"29134","cp":"","lp":"1563198048280","mm":"20971520","u":"29134","sts":"-1","dp":"0","POSITION_INDEX_UP":"0","dq":"200","tt":"0","suq":10};
	body = JSON.stringify(obj);
}*/

$done({body});
