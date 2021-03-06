var axios = require("axios");
var fs = require("fs");

//const _httpReq = axios.create({ baseURL: "https://itappsrcr.service-now.com" });
//const _httpReq = axios.create({ baseURL: "https://demoplace.service-now.com" });

const _httpReq = axios.create({ baseURL: "https://partnerportalsedev.service-now.com" });

//_httpReq.defaults.headers.post["Content-Type"] = "application/json";
_httpReq.defaults.headers.put["Content-Type"] = "application/json";
//_httpReq.defaults.headers.common["Authorization"] = "Basic cmV2aWV3Lmh1Yjp0ZXN0MTIz";

_httpReq.defaults.headers.common["Authorization"] = "Basic aGFyaWJhYnUuZ2FyYmhhbmE6VkVOS0FUQWR1cmdhQDc1MQ==";

function pushJS(jsName) {
    var data = fs.readFileSync("./build/static/js/" + jsName, "utf-8");

    var _body = {
        script_name: "reviewhub",
        description: "Automated push from git - " + new Date(),
        script: data
    };

    const res = _httpReq
        .request({
            method: "PUT",
            url: "/api/now/table/sys_ui_script/45d8fc05dbae57409d3379398c9619a3",
            data: JSON.stringify(_body) 
        })
        .then(function(res) {
            if (res && res.status == 200) {
                console.log("Success - pushJS");
            }
        })
        .catch(function(err) {
            console.log(err);
        });
}

function pushCSS(cssName) {
    var data = fs.readFileSync("./build/static/css/" + cssName, "utf-8");

    var _body = {
        description: "Automated push from git - " + new Date(),
        style: data
    };

    const res = _httpReq
        .request({
            method: "PUT",
            url: "/api/now/table/content_css/9429b045dbae57409d3379398c961931",
            data: JSON.stringify(_body)
        })
        .then(function(res) {
            if (res && res.status == 200) {
                console.log("Success - pushCSS");
            }
        })
        .catch(function(err) {
            console.log(err);
        });
}

pushJS("main.90c16383.js");
pushCSS("main.ee1e46ad.css");