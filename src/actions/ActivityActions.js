import { SNAjax } from "../util/globalhelper"
import {loadUserComments} from "./ReviewActions"


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