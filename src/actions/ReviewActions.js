import thunk from "redux-thunk";

import { SNAjax } from "../util/globalhelper";

import { getChangeSetsForReviewSuccess,setLoadingIcon} from "./SearchActions";

// implement your actions here...

function handleUserInfo(response){
    return {
        type : 'USER_INFO',
        payload: response.name
    }
}

export function setContentMode(modeType) {
    return {
        type: 'SET_CONTENT_MODE',
        payload: modeType
    }    
}

export function refreshActivityStream(currentUser) {    
    return {
        type: 'GET_ACTIVITY_STREAM',
        payload: {activityStream: [
            {
                "Reviewer": "Reviewer1",
                "Developer": "Dev1", 
                "Message": "This is a sample Review comment!",
                "Timestamp": 1526955845262,
                "changeset_id": "1233",
                "file_id": "23112"
            },
            {
                "Reviewer": "Reviewer2",
                "Developer": "Dev1", 
                "Message": "This is another sample Review comment!",
                "Timestamp": 1526955845264,
                "changeset_id": "4232",
                "file_id": "42325"
            }
        ]}
    }    
}

function handleUserComments(response){
   return {
    type : 'LOAD_COMMENTS',
    payload: response.comments
   }
}

export function loadUserComments(){
    return dispatch => {
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "getCommentsForUser",
            scope: "x_snc_review_hub"
        })
            .getJSON()
            .then(function(response) {
                console.log("In Success for loadUserComments");
                dispatch(handleUserComments(response))
            })
            .catch(function(error) {
                console.log("In Error loadUserComments");
            });
    };
}

export function getUserInfo(){
    return dispatch => {
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "getUserDetails",
            scope: "x_snc_review_hub"
        })
            .getJSON()
            .then(function(response) {
                console.log("In Success for getUserInfo");
                dispatch(handleUserInfo(response))
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
