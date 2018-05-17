import {connect} from 'react-redux';
import FileComp from '../components/File';

import {toggleDifferComp,getFileReviewers} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    dispatch : (change_id,fileId) => {
        dispatch(toggleDifferComp(change_id,fileId));
    },
    fileReviewers : (fileReviewer) => {
        dispatch(getFileReviewers(fileReviewer));
    }
})

const File = connect(state => ({
    showDiffer: state.toggleDiff,
}),mapDispatchToProps)(FileComp);

export default File;