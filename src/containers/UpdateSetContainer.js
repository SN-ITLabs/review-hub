import {connect} from 'react-redux'

import UpdateSet from '../components/UpdateSet'
import {getUpdatesetReviewers} from "../actions/ReviewActions";

import {changesetReviewSuccess,changesetReviewReject} from '../actions/ReviewActions';


const mapDispatchToProps = dispatch => ({
    updateSetReviewers : (updateSetReviewer) => {
        dispatch(getUpdatesetReviewers(updateSetReviewer));
    },

    changesetReviewSuccess : (changesetname) => {
       dispatch(changesetReviewSuccess(changesetname));
    },

    changeSetReject : (changesetname) => {
       dispatch(changesetReviewReject(changesetname));
    }
})

const UpdateSetCont = connect(()=>({}),mapDispatchToProps)(UpdateSet)

export default UpdateSetCont;