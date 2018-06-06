import {connect} from 'react-redux';
import Navigator from '../components/Navigator';
// import LeftBarComp from '../components/LeftBar';

import {getChangeSetsForReview } from "../actions/SearchActions";
import {toggleCommentary,toggleDifferComp,getFileReviewers,changesetReviewSuccess,changesetReviewReject,refreshActivityStream,setContentMode} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    loadPendingReviews : (personne) => {
        dispatch(getChangeSetsForReview(personne));
    },
    toggleDifferComp : (change_id,fileId,fieldName) => {
        dispatch(toggleDifferComp(change_id,fileId,fieldName));
    },
    fileReviewers : (fileReviewer) => {
        dispatch(getFileReviewers(fileReviewer));
    },
    changesetReviewSuccess : (changesetname,change_id) => {
        dispatch(changesetReviewSuccess(changesetname,change_id));
     },
 
     changeSetReject : (changesetname,change_id) => {
        dispatch(changesetReviewReject(changesetname,change_id));
     },

     refreshActivityStream: (currentUser) => {
         dispatch(refreshActivityStream(currentUser));
     },

     setContentMode: (modeType) => {
         dispatch(setContentMode(modeType));
     },

     toggleCommentary: (change_id, file_id, fieldname) => {
        dispatch(toggleCommentary(change_id, file_id, fieldname));
     }
})

const LeftBar = connect(state => ({
    changeSets: state.Review.changeSets,
    showDiffer: state.Review.toggleDiff
    // myActivityStream: state.Review.activityStream
}),mapDispatchToProps)(Navigator);

export default LeftBar;