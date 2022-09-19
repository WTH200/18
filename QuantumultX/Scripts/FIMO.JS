/*
FIMO解锁会员
****************************************************
[rewrite_local]
^https:\/\/server\.yoyiapp\.com\/fimo-user\/ url script-response-body https://raw.githubusercontent.com/WTH200/18/main/QuantumultX/Scripts/FIMO.JS
[mitm] 
hostname = server.yoyiapp.com
*/
let body= $response.body;
var obj = JSON.parse(body);
if (body.indexOf("subscribe") !=-1) {;
  obj["subscribe"]["valid"] = true;
  obj["subscribe"]["forever"] = 1; 
  }
$done({body: JSON.stringify(obj)});
