var axios = require("axios");

const _httpReq = axios.create({ baseURL: "https://demoplace.service-now.com" });
_httpReq.defaults.headers.common["Authorization"] = "Basic cmV2aWV3Lmh1Yjp0ZXN0MTIz";

var _body = {
    name: "fck",
    script: "var test = 'TEst!@#';"
};

const res = _httpReq
    .request({
        method: "POST",
        url: "/api/now/table/sys_script_include",
        body: JSON.stringify(_body)
    })
    .then(function(res) {
        console.log(res.data);

        if (res && res.status == 200) {
            if (!res.data || !Array.isArray(res.data.result) || res.data.result.length <= 0) {
                console.log("No response");
                return [];
            }
            const _result = res.data.result;

            console.dir(_result);
        }
    })
    .catch(function(err) {
        console.log(err);
    });
