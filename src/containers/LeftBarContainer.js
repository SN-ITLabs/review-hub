import {connect} from 'react-redux';
import Navigator from '../components/Navigator';
// import LeftBarComp from '../components/LeftBar';

import {getChangeSetsForReview } from "../actions/SearchActions";
import {toggleDifferComp,getFileReviewers,changesetReviewSuccess,changesetReviewReject,refreshActivityStream,setContentMode} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    loadPendingReviews : () => {
        dispatch(getChangeSetsForReview());
    },
    toggleDifferComp : (change_id,fileId) => {
        dispatch(toggleDifferComp(change_id,fileId));
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
     }

})

const LeftBar = connect(state => ({
    changeSets: state.changeSets,
    showDiffer: state.toggleDiff,
    myActivityStream: state.activityStream
}),mapDispatchToProps)(Navigator);

export default LeftBar;