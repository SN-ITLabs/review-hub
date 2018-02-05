import thunk from 'redux-thunk';

import { SNAjax } from "../util/globalhelper";

import {getChangeSetsForReviewSuccess} from './SearchActions';


// implement your actions here...

export function handlechangesetReviewSuccess(){
    const TAG_URL = "/api/x_snc_review_hub/jsonhttp?sysparm_processor=ChangeSetAjax&sysparm_scope=x_snc_review_hub&sysparm_name=getChangeSetsInReview";
   // const TAG_URL = "/api/snc/jsonhttp?sysparm_processor=ReviewHubChangePush&sysparm_scope=global&sysparm_name=testAjaxCall&sysparm_username=hari";

    return dispatch => {
        return  SNAjax.get(TAG_URL)
        .then(function(response) {
            dispatch(getChangeSetsForReviewSuccess(response))
            console.log("In Success");
            //console.log(JSON.stringify(response.data));
        })
        .catch(function(error) {
            console.log("In Error");
            console.dir(error.response);
        });
    }
}

export function changesetReviewSuccess(changeset){
   const TAG_URL = "/api/x_snc_review_hub/jsonhttp?sysparm_processor=ChangeSetAjax&sysparm_scope=x_snc_review_hub&sysparm_name=changeSetStateUpdate&sysparam_changeset="+changeset+"&sysparam_state=surf_codereviewd";
    return dispatch => {
        return  SNAjax.get(TAG_URL)
        .then(function(response) {
            dispatch(handlechangesetReviewSuccess())
            console.log("In Success for changeset success");
            //console.log(JSON.stringify(response.data));
        })
        .catch(function(error) {
            console.log("In Error");
            console.dir(error.response);
        });
    }

}

export function changesetReviewReject(changeset){
    const TAG_URL = "/api/x_snc_review_hub/jsonhttp?sysparm_processor=ChangeSetAjax&sysparm_scope=x_snc_review_hub&sysparm_name=changeSetStateUpdate&sysparam_changeset="+changeset+"&sysparam_state=review_failed";
    return dispatch => {
        return  SNAjax.get(TAG_URL)
        .then(function(response) {
            dispatch(handlechangesetReviewSuccess())
            console.log("In changesetReviewReject success");
            //console.log(JSON.stringify(response.data));
        })
        .catch(function(error) {
            console.log("In Error");
            console.dir(error.response);
        });
    }
}