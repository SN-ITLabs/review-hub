import {connect} from 'react-redux';
import Layout from '../components/Layout'
import {switchPersona, toggleLiveStream, toggleDifferComp,getFileReviewers,changesetReviewSuccess,changesetReviewReject,refreshActivityStream,setContentMode} from "../actions/ReviewActions";

import {setCommentAsRead,getReviewerDetails} from '../actions/ActivityActions'

const mapDispatchToProps = dispatch => ({
    switchPersona : (name) => {
        dispatch(switchPersona(name));
    },
    toggleLiveStream : (value) => {
        dispatch(toggleLiveStream(value));
     },
    toggleDifferComp : (change_id,fileId) => {
        dispatch(toggleDifferComp(change_id,fileId));
    },
    // fileReviewers : (fileReviewer) => {
    //     dispatch(getFileReviewers(fileReviewer));
    // },
    refreshActivityStream: (currentUser) => {
         dispatch(refreshActivityStream(currentUser));
    },
    setContentMode: (modeType) => {
         dispatch(setContentMode(modeType));
    },
    setCommentRead : (commentId) => {
        dispatch(setCommentAsRead(commentId));
    },
    getReviewDet : (change_id) => {
       dispatch(getReviewerDetails(change_id));
    }
})

const LayoutCont = connect(state => ({
    contentMode: state.contentMode,
    expandMode: state.Review.expandMode,
    personaTab: state.Review.personaTab
}),mapDispatchToProps)(Layout);

export default LayoutCont;