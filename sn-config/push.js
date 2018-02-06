var axios = require("axios");
var fs = require("fs");

var data = fs.readFileSync(
    "/Users/haribabu.garbhana/SN/ReviewHub/review-hub/build/static/js/main.605fd1ca.js",
    "utf-8"
);

const _httpReq = axios.create({ baseURL: "https://itappsrcr.service-now.com" });
_httpReq.defaults.headers.post["Content-Type"] = "application/json";
_httpReq.defaults.headers.common["Authorization"] = "Basic cmV2aWV3Lmh1Yjp0ZXN0MTIz";

var _body = {
    script_name: "reviewhub",
    description: "Automated push from git - " + new Date(),
    script: data
};

const res = _httpReq
    .request({
        method: "POST",
        url: "/api/now/table/sys_ui_script",
        data: JSON.stringify(_body)
    })
    .then(function(res) {
        if (res && res.status == 200) {
            if (!res.data || !Array.isArray(res.data.result) || res.data.result.length <= 0) {
                console.log("No response");
                return [];
                console.log(res);
            }
            //const _result = res.data.result;
            //console.log(_result);
            console.log("Success");
        }
    })
    .catch(function(err) {
        console.log(err);
    });