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
        payload: res.property
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