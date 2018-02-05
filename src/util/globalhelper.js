import axios from "axios";
import { HUB_CONST } from "./Constants";

export function getDefaultListCriteria() {
    return "My Team";
}

export let SNAjax = (function() {
    let _config = {};
    if (HUB_CONST.IS_LOCAL) {
        _config.baseURL = "https://" + HUB_CONST.DEV_INSTANCE + ".service-now.com";
    }
    let _httpClient = axios.create(_config);

    _httpClient.defaults.timeout = HUB_CONST.HTTP_CLIENT_TIMEOUT;
    if (HUB_CONST.IS_LOCAL) _httpClient.defaults.headers.common["Authorization"] = _getAuthHeader();
    _httpClient.defaults.headers.post["Content-Type"] = "application/json";
    _httpClient.defaults.headers.put["Content-Type"] = "application/json";

    return _httpClient;
})();

function _getAuthHeader(params) {
    return "Basic " + btoa(HUB_CONST.DEV_INSTANCE_USER_NAME +":"+ HUB_CONST.DEV_INSTANCE_USER_PASSWORD);
}
