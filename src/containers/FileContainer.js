import {connect} from 'react-redux';
import FileComp from '../components/File';

import {toggleDifferComp,getFileReviewers,changesetReviewSuccess,changesetReviewReject} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    dispatch : (change_id,fileId) => {
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
     }
})

const File = connect(state => ({
    showDiffer: state.toggleDiff,
}),mapDispatchToProps)(FileComp);

export default File;