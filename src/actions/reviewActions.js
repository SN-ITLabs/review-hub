import thunk from "redux-thunk";

import { SNAjax } from "../util/globalhelper";

import { getChangeSetsForReviewSuccess } from "./SearchActions";

// implement your actions here...

export function handlechangesetReviewSuccess() {
    return dispatch => {
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "getChangeSetsInReview",
            scope: "x_snc_review_hub"
        })
            .getJSON()
            .then(function(response) {
                dispatch(getChangeSetsForReviewSuccess(response));
                console.log("In Success");
                //console.log(JSON.stringify(response.data));
            })
            .catch(function(error) {
                console.log("In Error");
                console.dir(error.response);
            });
    };
}

export function changesetReviewSuccess(changeset) {
    return dispatch => {
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "changeSetStateUpdate",
            scope: "x_snc_review_hub",
            params: {
                sysparam_changeset: changeset,
                sysparam_state: "surf_codereviewd"
            }
        })
            .getJSON()
            .then(function(response) {
                dispatch(handlechangesetReviewSuccess());
                console.log("In Success for changeset success");
                //console.log(JSON.stringify(response.data));
            })
            .catch(function(error) {
                console.log("In Error");
                console.dir(error.response);
            });
    };
}

export function changesetReviewReject(changeset) {
    return dispatch => {
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "changeSetStateUpdate",
            scope: "x_snc_review_hub",
            params: {
                sysparam_changeset: changeset,
                sysparam_state: "review_failed"
            }
        })
            .getJSON()
            .then(function(response) {
                dispatch(handlechangesetReviewSuccess());
                console.log("In changesetReviewReject success");
                //console.log(JSON.stringify(response.data));
            })
            .catch(function(error) {
                console.log("In Error");
                console.dir(error.response);
            });
    };
}
