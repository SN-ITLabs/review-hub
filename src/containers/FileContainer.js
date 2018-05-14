import {connect} from 'react-redux';
import FileComp from '../components/File';

import {toggleDifferComp,getFileReviewers} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    dispatch : (change_id) => {
        dispatch(toggleDifferComp(change_id));
    },
    fileReviewers : (fileReviewer) => {
        dispatch(getFileReviewers(fileReviewer));
    }
})

const File = connect(state => ({
    showDiffer: state.toggleDiff,
}),mapDispatchToProps)(FileComp);

export default File;