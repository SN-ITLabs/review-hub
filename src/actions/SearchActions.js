import { IS_LOCAL } from "../util/Constants";
import { SNAjax } from "../util/globalhelper";

import thunk from "redux-thunk";

export function getChangeSetsForReviewSuccess(response) {
    return {
        type: "FETCH_ALL_CHANGE_SETS",
        payload: {
            data: response
        }
    };
}

export function setLoadingIcon(fetch) {
    return {
        type: "LOADING_INDICATOR",
        payload: {
            fetching: fetch
        }
    };
}

export function getChangeSetsForReview(personne) {
    return dispatch => {
        dispatch(setLoadingIcon(true));
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "getChangeSetsInReview",
            scope: "x_snc_review_hub",
            params: {
                sysparam_personne: personne
            }
        })
            .getJSON()
            .then(function(response) {
                dispatch(getChangeSetsForReviewSuccess(response));
                console.log("In Success");
                //console.log(JSON.stringify(response.data));
            })
            .catch(function(error) {
                console.log("In Error");
                dispatch(setLoadingIcon(false));                
                //console.dir(error.response);
            });
    };
}
