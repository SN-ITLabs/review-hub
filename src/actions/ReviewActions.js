import thunk from "redux-thunk";

import { SNAjax } from "../util/globalhelper";

import { getChangeSetsForReviewSuccess,setLoadingIcon} from "./SearchActions";

// implement your actions here...

export function getUserInfo(){
    return dispatch => {
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "getUserDetails",
            scope: "x_snc_review_hub",
            params: {
            }
        })
            .getJSON()
            .then(function(response) {
                console.log("In Success for getUserInfo");
                return {
                    type : 'USER_INFO',
                    payload: response
                }
            })
            .catch(function(error) {
                console.log("In Error");
            });
    };
}

export function getLoginUser(){
    return {
        type : 'LOGIN_USER',
        payload: {
            name: "Haribabu Garbhana",
            id: 23
        }
    }
}

function handleToogleDiffSuccess(data,change,file){
    return {
        type : 'TOGGLE_DIFF',
        payload:{
            differData : data.compare,
            change_id : change,
            file_id : file
        }
    }
}

export function toggleDifferComp(change_id,fileId){
    return dispatch => {
        dispatch(setLoadingIcon(true))
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "getDifferCode",
            scope: "x_snc_review_hub",
            params: {
                sysparam_changeid: change_id
            }
        })
            .getJSON()
            .then(function(response) {
                dispatch(handleToogleDiffSuccess(response,change_id,fileId));
                console.log("In Success for getdiff");
                dispatch(setLoadingIcon(false));
                //console.log(JSON.stringify(response.data));
            })
            .catch(function(error) {
                console.log("In Error");
                dispatch(setLoadingIcon(false));
                //console.dir(error.response);
            });
    };
}

export function getFileReviewers(fileReviewer){
  return {
      type : 'GET_FILE_REVIEWERS',
      payload:fileReviewer
  }
}

export function getUpdatesetReviewers(updateSetReviewers){
    return {
        type : 'GET_UPDATE_SET_REVIEWERS',
        payload:updateSetReviewers
    }
}


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


export function changesetReviewSuccess(changeset,change) {
    return dispatch => {
        dispatch(setLoadingIcon(true))
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "changeSetStateUpdate",
            scope: "x_snc_review_hub",
            params: {
                sysparam_changeset: changeset,
                sysparam_state: "surf_codereviewd",
                sysparam_change:change,
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
                dispatch(setLoadingIcon(false));
                //console.dir(error.response);
            });
    };
}

export function changesetReviewReject(changeset,change) {
    return dispatch => {
        dispatch(setLoadingIcon(true))
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "changeSetStateUpdate",
            scope: "x_snc_review_hub",
            params: {
                sysparam_changeset: changeset,
                sysparam_state: "review_failed",
                sysparam_change : change
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
                dispatch(setLoadingIcon(false));
               // console.dir(error.response);
            });
    };
}
