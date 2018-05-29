var axios = require("axios");
var fs = require("fs");

//const _httpReq = axios.create({ baseURL: "https://itappsrcr.service-now.com" });
const _httpReq = axios.create({ baseURL: "https://demoplace.service-now.com" });

//_httpReq.defaults.headers.post["Content-Type"] = "application/json";
_httpReq.defaults.headers.put["Content-Type"] = "application/json";
_httpReq.defaults.headers.common["Authorization"] = "Basic cmV2aWV3Lmh1Yjp0ZXN0MTIz";

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
            url: "/api/now/table/sys_ui_script/24902036dbd61700b557f9151d9619c5",
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
            url: "/api/now/table/content_css/881bf7d2db809f00a86a5404ce96193b",
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

pushJS("main.6a03e9ba.js");
pushCSS("main.f4bdff06.css");
