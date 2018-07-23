import { SNAjax } from "../util/globalhelper"
import {loadUserComments} from "./ReviewActions"


function handleFileReviewer(res){
 return{
    type : 'GET_FILE_REVIEWERS',
    payload:res.reviewer 
  }
}



export function getReviewerDetails(changeId){
    return dispatch => {
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "getChangeReviewer",
            scope: "x_snc_review_hub",
            params:{
                sysparam_changeid: changeId
            }
          })
            .getJSON()
            .then(function(response) {
                dispatch(handleFileReviewer(response));
                console.log("In Success for getReviewerDetails");
            })
            .catch(function(error) {
                console.log("In Error getReviewerDetails");
            });
       };
}

export function setCommentAsRead(commentId){
   return dispatch => {
    return SNAjax({
        processor: "ChangeSetAjax",
        action: "setCommentAsRead",
        scope: "x_snc_review_hub",
        params:{
            sysparam_commentid: commentId
        }
      })
        .getJSON()
        .then(function(response) {
            console.log("In Success for setCommentAsRead");
            dispatch(loadUserComments());
        })
        .catch(function(error) {
            console.log("In Error setCommentAsRead");
        });
   };
}

function handlePropertyDetails(res){
    return{
        type : 'GET_CHANGE_PROPERTY',
        payload: res
    }
}

export function getPropertyDetails(change_id){
    return dispatch => {
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "getChangeDetails",
            scope: "x_snc_review_hub",
            params:{
                sysparam_changeid: change_id
            }
          })
            .getJSON()
            .then(function(response) {
                dispatch(handlePropertyDetails(response))
                console.log("In Success for getPropertyDetails");
            })
            .catch(function(error) {
                console.log("In Error getPropertyDetails");
            });
       };
}

function handleUpwards(res){
    return{
        type : 'UPWARD_HANDLERS',
        payload: res.result
    }
}

export function changeDelegationProp(val){
    return {
        type : 'HIDE_DELEGATION',
        payload : val
    }
}

export function getHierarchy(){
    return dispatch => {
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "getUpwardManagement",
            scope: "x_snc_review_hub"
          })
            .getJSON()
            .then(function(response) {
                dispatch(handleUpwards(response))
                console.log("In Success for getHierarchy");
            })
            .catch(function(error) {
                console.log("In Error getHierarchy");
            });
       };
}

export function getRecomendations(type){
    return dispatch => {
        return SNAjax({
            processor: "ChangeSetAjax",
            action: "getRecomendations",
            scope: "x_snc_review_hub",
            params:{
                sysparam_recomond: type
            }
          })
            .getJSON()
            .then(function(response) {
                dispatch(handleRecomendations(response))
                console.log("In Success for getHierarchy");
            })
            .catch(function(error) {
                console.log("In Error getHierarchy");
            });
       };
}


function handleRecomendations(res){
    return{
        type : 'RECOMENDATIONS',
        payload: res.recomendations
    }
}