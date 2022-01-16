/*
 *
 *
脚本功能：69萝莉网页版解锁会员
网页地址：https://h5x.307you.me
脚本作者：FlechazoPh
更新时间：2022-01-16
电报频道：https://t.me/github_chats
问题反馈：https://t.me/github_chats
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# > 69萝莉解锁会员
^https?:\/\/h5x\.370you\.me\/h5\/login\/loginAccount$ url script-response-body https://raw.githubusercontent.com/FlechazoPh/AwesomeScripts/master/QuantumultX/Scripts/LLSPCrack.js

[mitm] 

hostname = h5x.307you.me
*
*
*/


var body = $response.body;
    
    body = '{"time":"2022-01-12 14:59:54","version":"1.0","status":"y","data":"wUSfe803UxQfxrlZRjO3jBfBW+h551+8969BXgEdoa\/J\/ar\/UGt7gV7GNWR2LL\/\/s\/Y27BDBVgvLghYl31bl2Da5STGT6nuoKyY06eQkDuXrgRVIAdwRWUoQY3Tn8ulMMFb8ufjb\/w3xgnOCVydgyAPUcxgEZLSNNOHGTR\/nfHRij3Lk7TwfrrVV7tATUCGR+XgteVZrwETns4WrcdNqdx7vED9nvfZFEDWZHrqF8xk\/xmVU6fJN1dzysLo9EswBXWuGSC8AZcBSVvDN+cJ5oPy5JjuqKZz1MFIBqED\/0Q\/pz7W4naJGvBoWAPq9Nwdlhg2ep55SKaPAa6JoRTzBaek5h2Y1AK8i5hqaUfBNc+KP7rF2hkufkNimP5DPRzT6FYMmaQXutUnmuEUaeu2ZKyk\/ZyK0sD3wrOSeHEH5fdQ=","sign":"17c9eb229a8ac2d4c954067c25839401"}';

$done({body});
