import axios from "axios";
import { HUB_CONST } from "./Constants";

export function getDefaultListCriteria() {
    return "My Team";
}

/*
 Config for SN Ajax, To call scipt include

        {
            processor: "ChangeSetAjax",
            action: "getChangeSetsInReview",
            scope: "x_snc_review_hub",
            params: {
                sysparam_changeset: changeset,
                sysparam_state: "surf_codereviewd"
        }
*/

export let SNAjax = function(config) {
    var _httpClient = getAxiosHTTPClient();

    function getJSON(_httpClient) {
        let url = "/xmlhttp.do";
        if (HUB_CONST.IS_LOCAL) url = "/api/x_snc_review_hub/jsonhttp";

        //1. scope
        url += "?sysparm_scope=" + this.scope;

        //2. processor
        url += "&sysparm_processor=" + this.processor;

        //3. callable function
        url += "&sysparm_name=" + this.action;

        //4. params
        for (const key in this.params) {
            if (this.params.hasOwnProperty(key)) {
                url += "&" + key + "=" + this.params[key];
            }
        }

        return new Promise((resolve, reject) => {
            _httpClient
                .get(url)
                .then(function(response) {
                    let res = {};
                    if (HUB_CONST.IS_LOCAL) {
                        res = response.data.result;
                        resolve(res);
                    } else {
                        const resAns = response.request.responseXML.documentElement.getAttribute(
                            "answer"
                        );
                        try {
                            const res = JSON.parse(resAns);
                            resolve(res);
                        } catch (error) {
                            reject(error);
                        }
                    }
                })
                .catch(function(err) {
                    reject(err);
                });
        });

        // if (HUB_CONST.IS_LOCAL) return _httpClient.get(url);

        // return _httpClient.request({
        //     method: "POST",
        //     url: url
        //     //data: JSON.stringify(_body)
        // });
    }

    return {
        getJSON: getJSON.bind(config, _httpClient)
    };
};
/**
 *
 */
function getAxiosHTTPClient() {
    let config = {};
    if (HUB_CONST.IS_LOCAL)
        config.baseURL = "https://" + HUB_CONST.DEV_INSTANCE + ".service-now.com";
    /**
     * Create base axios client
     */
    let _httpClient = axios.create(config);

    _httpClient.defaults.timeout = HUB_CONST.HTTP_CLIENT_TIMEOUT;
    if (HUB_CONST.IS_LOCAL) {
        _httpClient.defaults.headers.common["Authorization"] = _getAuthHeader();
        _httpClient.defaults.headers.post["Content-Type"] = "application/json";
    } else {
        // set X-UserToken

        console.log(window.g_ck);
        debugger;

        //if (typeof g_ck != "undefined" && g_ck != "")
        _httpClient.defaults.headers.common["X-UserToken"] = window.g_ck;
        //_httpClient.defaults.headers.common[""] = "application/json";
        _httpClient.defaults.headers.common["Content-Type"] =
            "application/x-www-form-urlencoded; charset=UTF-8";
    }

    return _httpClient;
}

function _getAuthHeader(params) {
    return (
        "Basic " +
        btoa(
            HUB_CONST.DEV_INSTANCE_USER_NAME + ":" + HUB_CONST.DEV_INSTANCE_USER_PASSWORD
        )
    );
}
