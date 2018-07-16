import thunk from "redux-thunk";

import { SNAjax } from "../util/globalhelper";

import { getChangeSetsForReviewSuccess,setLoadingIcon} from "./SearchActions";

// implement your actions here...


export function saveReviewerNavigationTree(navigationTree) {
    return {
        type: 'SET_REVIEWER_NAVIGATION',
        payload: navigationTree
    }
}

export function saveDeveloperNavigationTree(navigationTree) {
    return {
        type: 'SET_DEVELOPER_NAVIGATION',
        payload: navigationTree
    }
}

function loadCommentary(response) {
    return {
        type: 'LOAD_COMMENTARY',
        payload:response
    }
}

export function saveRating(params) {
    return dispatch => {
        return  SNAjax({
            processor: "ChangeSetAjax",
            action: "updateRating",
            scope: "x_snc_review_hub",
            params:params
        }).getJSON()
        .then(function(response) {
            console.log("In Success for changeRating");
        })
        .catch(function(error) {                
            console.log("In Error for changeRating");
        });
    };
}

export function checkRatingBeforeChangeStateUpdate(changesetname,change_id, field_name,isAccepted) {
    return dispatch => {
        return  SNAjax({
            processor: "ChangeSetAjax",
            action: "checkRatingBeforeChangeStateUpdate",
            scope: "x_snc_review_hub",
            params:{
                sysparam_changeId:change_id
            }
        }).getJSON()
        .then(function(response) {
            if(response.canUpdate){
                if(isAccepted)
                    dispatch(changesetReviewSuccess(changesetname,change_id, field_name));
                else
                    dispatch(changesetReviewReject(changesetname,change_id, field_name));
            }
            else{
                alert("Please provide rating before accepting/rejecting Change!");
            }
            console.log("In Success for changeRating");
        })
        .catch(function(error) {                
            console.log("In Error for changeRating");
        });
    };
}

export function saveCommentary(params) {
    return dispatch => {
        dispatch(setLoadingIcon(true))
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "saveComment",
            scope: "x_snc_review_hub",
            params: params
        })
            .getJSON()
            .then(function(response) {
                dispatch(loadCommentary(response));
            })
            .then(function(response) {
                console.log("In Success for saveCommentary");                
                dispatch(setLoadingIcon(false))
            })
            .catch(function(error) {
                console.log("In Error");
                dispatch(setLoadingIcon(false))
            });
        };
}

export function deleteCommentary(params) {
    return dispatch => {
        dispatch(setLoadingIcon(true))
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "deleteComment",
            scope: "x_snc_review_hub",
            params: params
        })
            .getJSON()
            .then(function(response) {
                dispatch(loadCommentary(response));
            })
            .then(function(response) {
                console.log("In Success for deleteCommentary");                
                dispatch(setLoadingIcon(false))
            })
            .catch(function(error) {
                console.log("In Error");
                dispatch(setLoadingIcon(false))
            });
        };
}

export function editCommentary(params) {
    return dispatch => {
        dispatch(setLoadingIcon(true))
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "editComment",
            scope: "x_snc_review_hub",
            params: params
        })
            .getJSON()
            .then(function(response) {
                dispatch(loadCommentary(response));
            })
            .then(function(response) {
                console.log("In Success for deleteCommentary");                
                dispatch(setLoadingIcon(false))
            })
            .catch(function(error) {
                console.log("In Error");
                dispatch(setLoadingIcon(false))
            });
        };
}

export function toggleCommentary(changesetId, fileId, fieldname) {
    return dispatch => {
        var params = {};
        if(changesetId) {
            params.sysparm_changeset_id = changesetId;
        }
        if(fileId){
            params.sysparm_file_id = fileId;
        }
        if(fieldname) {
            params.sysparm_fieldname = fieldname;
        }

        return SNAjax({
            processor: "ChangeSetAjax",
            action: "getCommentary",
            scope: "x_snc_review_hub",
            params: params                
        })
            .getJSON()
            .then(function(response) {
                console.log("In Success for getCommentary");
                dispatch(handleCommentaryInfo(response))
            })
            .catch(function(error) {
                console.log("In Error");
            });
        };
}

export function switchPersona(value) {
    return {
        type: 'SWITCH_PERSONA', 
        payload: value
    }
}

export function toggleMode() {
    return {
        type: 'TOGGLE_DIFFER_VIEW_MODE'
    }
}

export function toggleLiveStream(value) {
    return {
        type: 'TOGGLE_LIVE_STREAM',
        payload: value
    }
}

function handleCommentaryInfo(response){
    return {
        type : 'TOGGLE_COMMENTARY',
        payload: response
    }
}

function handleUserInfo(response){
    return {
        type : 'USER_INFO',
        payload: response
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

function handleToogleDiffSuccess(data,change,file,fieldName){
    return {
        type : 'TOGGLE_DIFF',
        payload:{
            differData : data.compare,
            change_id : change,
            file_id : file,
            field_name: fieldName
        }
    }
}


function setCurrentReviewedChange(changeset,change){
    return{
        type:'SET_CURRENT_REVIEWED_CHANGE',
        payload:{
            fieldReviewed:true,
            changeset:changeset,
            change:change
        }
        
    }
    
}

export function toggleDifferComp(change_id,fileId,fieldName){
    var fieldName = (!fieldName)?'configuration':fieldName;
    return dispatch => {
        dispatch(setLoadingIcon(true))
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "getDifferCode",
            scope: "x_snc_review_hub",
            params: {
                sysparam_changeid: change_id,
                sysparm_fieldName: fieldName
            }
        })
            .getJSON()
            .then(function(response) {
                dispatch(handleToogleDiffSuccess(response,change_id,fileId,fieldName));
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


export function changesetReviewSuccess(changeset,change,fieldName) {

    return dispatch => {
        dispatch(setCurrentReviewedChange(changeset,change))
        dispatch(setLoadingIcon(true))
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "changeSetStateUpdate",
            scope: "x_snc_review_hub",
            params: {
                sysparam_changeset: changeset,
                sysparam_state: "review_completed",
                sysparam_change:change,
                sysparam_fieldName: fieldName
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

export function changesetReviewReject(changeset,change,fieldName) {
    return dispatch => {
        dispatch(setLoadingIcon(true))
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "changeSetStateUpdate",
            scope: "x_snc_review_hub",
            params: {
                sysparam_changeset: changeset,
                sysparam_state: "review_failed",
                sysparam_change : change,
                sysparam_fieldName: fieldName
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

function handleChangeReviewer(res){
    return{
        type : 'GET_FILE_REVIEWERS',
        payload:res.reviewer 
      }
}

export function updateChangeReviewer(reviewer,changeId){
    return dispatch => {
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "updateReviewer",
            scope: "x_snc_review_hub",
            params: {
                sysparam_rev: reviewer,
                sysparam_change : changeId
            }
        })
            .getJSON()
            .then(function(response) {
                dispatch(handleChangeReviewer(response));
                console.log("In updateChangeReviewer success");
            })
            .catch(function(error) {
                console.log("In Error updateChangeReviewer");
            });
    };
}