const path1 = "/get_course_detail";
const path2 = "/course/main_home_info";
const path3 = "/get_course_meta";
//https://article.hundun.cn/article_list?
const path4 = "/course/expire_course_list";
const path5 = "/search/main_study_search";
const path6 = "/boutique/daily_package/get_menu";

var body = $response.body;
var url = $request.url;


function modifyCourseMeta() {
      var obj = JSON.parse(body);
      obj.course_meta.is_buy = 1;
      obj.course_meta.allow_play=1;
      obj.course_meta.allow_download=1;
	  body = JSON.stringify(obj);
	  
}

function modifyCourseExpire() {
      var obj = JSON.parse(body);
      obj.data.expire_course_ids = null;
      obj.data.expire_courses = null;
	  body = JSON.stringify(obj);

}


  body = body.replace(/\"free_trial\":\d/g,'\"free_trial\":1');
  body = body.replace(/\"allow_play\":\d/g,'\"allow_play\":3');
  body = body.replace(/\"allow_play_title\": \"\w+\"/g,'\"allow_play_title\":\"可试看\"');
  


if (url.indexOf(path3) != -1){
   modifyCourseMeta();
}

if (url.indexOf(path4) != -1){
   modifyCourseExpire();
}


$done({body});
