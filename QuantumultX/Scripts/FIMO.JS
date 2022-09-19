/*
FIMO测试破解
****************************************************
[rewrite_local]
^https:\/\/server\.yoyiapp\.com\/fimo-user url script-response-body FIMO.js
[mitm] 
hostname = server.yoyiapp.com
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const FIMO = '/user';

if (url.indexOf(FIMO) != -1) {
    obj.valid= true;
    obj.forever = 1;
    body = JSON.stringify(obj);
}
$done({body});