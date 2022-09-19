/*
1Blocker解锁永久订阅
***************************
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers url script-response-body https://github.com/WTH200/18/blob/main/QuantumultX/Scripts/1Blocker.js?raw=true
[mitm] 
hostname = api.revenuecat.com

**************************/
var body = JSON.parse($response.body);
var obj = {"request_date":"2022-09-18T23:01:58Z","request_date_ms":1663542118028,"subscriber":{"entitlements":{"premium":{"expires_date":"2099-12-31T23:59:59Z","grace_period_expires_date":null,"product_identifier":"blocker.ios.subscription.yearly","purchase_date":"2022-09-18T23:01:58Z"}},"first_seen":"2022-09-18T23:01:58Z","last_seen":"2022-09-18T23:01:58Z","management_url":"itms-apps://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"0","original_application_version":"900","original_purchase_date":"2022-09-18T23:01:58Z","other_purchases":{},"subscriptions":{"blocker.ios.subscription.yearly":{"billing_issues_detected_at":null,"expires_date":"2099-12-31T23:59:59Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2022-09-18T23:01:58Z","period_type":"trial","purchase_date":"2022-09-18T23:01:58Z","store":"app_store","unsubscribe_detected_at":null}}}};
$done({ body: JSON.stringify(obj) });
