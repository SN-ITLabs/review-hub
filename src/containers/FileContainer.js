import {connect} from 'react-redux';
import FileComp from '../components/File';

import {toggleDifferComp,getFileReviewers} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    dispatch : (isOpen) => {
        dispatch(toggleDifferComp(isOpen));
    },
    fileReviewers : (fileReviewer) => {
        dispatch(getFileReviewers(fileReviewer));
    }
})

const File = connect(state => ({
    showDiffer: state.toggleDiff,
}),mapDispatchToProps)(FileComp);

export default File;