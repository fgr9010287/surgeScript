/*
Surge 实现 Day One Premium

Day One 脚本由本脚本与 dayone-pre.js （以下称 pre 脚本）两部分组成，主脚本用于修改响应内容、pre 脚本用于屏蔽缓存

用法说明：
1. 启用本脚本与 pre 脚本
2. 重启 Day One，稍等片刻等待高级版出现
3. 禁用掉 pre 脚本，重启 Day One，确认高级版状况不变

如果后续误操作导致 Day One 恢复为 Free/Plus 则重复上述操作。

http-response ^https:\/\/dayone\.me\/api\/(users|v2\/users\/account-status)$ requires-body=1,max-size=0,script-path=scripts/dayone.js

MitM = dayone.me

本脚本由 @ImSingee 与 @Mornwind 共同完成，请勿在公开群组、频道或是论坛、博客发布
*/

if ($response.status == 200) {
  if ($request.url.endsWith("account-status")) {
$done({body: JSON.stringify({
  "expirationDate": 1893427199000,
  "startDate": 1546272000000,
  "subscriptionPlan": "com.bloombuilt.dayoneios.subscription.premium.yearly_discounted_trial",
  "lastRenewalDate": 1546531200000,
  "subscriptionName": "premium",
  "bundleReason": "purchase",
  "cancellationDate": 0
} )});
} 
else { let body= $response.body;
	     let obj= JSON.parse(body);
	     const feature= {"bundleName":"premium","features":[{"name":"imagesPerEntry","limit":30,"canUpgrade":false},{"name":"printingDiscount","canUpgrade":false},{"name":"syncMac","canUpgrade":false},{"name":"prioritySupport","canUpgrade":false},{"name":"sync","canUpgrade":false},{"name":"journalLimit","limit":100,"canUpgrade":false},{"name":"audioPerEntry","limit":10,"canUpgrade":false},{"name":"VideoPerEntry","limit":10,"canUpgrade":false},{"name":"DrawPerEntry","limit":10,"canUpgrade":false},
      {
        "name": "scanToPDF",
        "enabled": true,
        "canUpgrade": false
      },
      {
        "name": "attachmentsPerEntry",
        "limit": 100,
        "canUpgrade": false
      },
      {
        "name": "journalViaSMS",
        "enabled": true,
        "canUpgrade": false
      },
      
      {
        "name": "canAttachVideo",
        "enabled": true,
        "canUpgrade": false
      },
      {
        "name": "canAttachAudio",
        "enabled": true,
        "canUpgrade": false
      },
      {
        "name": "canAttachDrawing",
        "enabled": true,
        "canUpgrade": false
      },
      {
        "name": "canAttachPDF",
        "enabled": true,
        "canUpgrade": false
      },
      {
        "name": "colors",
        "enabled": true,
        "canUpgrade": false
      },
      {
        "name": "emailToJournal",
        "enabled": true,
        "canUpgrade": false
      },
      {
        "name": "appIcons",
        "enabled": true,
        "canUpgrade": false
      },
      {
        "name": "moonPhase",
        "enabled": true,
        "canUpgrade": false
      },
      {
        "name": "foursquareNearbyVenues",
        "enabled": true,
        "canUpgrade": false
      }]};
    if(body.indexOf("featureBundle") !=-1)
      {
      obj["featureBundle"]= feature;
      }
       else {
	    	obj["bundle"]= feature;
	    }
	    $done({body: JSON.stringify(obj)});
        }
} else {
	$done({});
}
