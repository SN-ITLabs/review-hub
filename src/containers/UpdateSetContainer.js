import {connect} from 'react-redux'

import UpdateSet from '../components/UpdateSet'
import {getUpdatesetReviewers} from "../actions/ReviewActions";

import {changesetReviewSuccess,changesetReviewReject} from '../actions/ReviewActions';


const mapDispatchToProps = dispatch => ({
    updateSetReviewers : (updateSetReviewer) => {
        dispatch(getUpdatesetReviewers(updateSetReviewer));
    },

    changesetReviewSuccess : (changesetname,change_id) => {
       dispatch(changesetReviewSuccess(changesetname,change_id));
    },

    changeSetReject : (changesetname,change_id) => {
       dispatch(changesetReviewReject(changesetname,change_id));
    }
})

const UpdateSetCont = connect(()=>({}),mapDispatchToProps)(UpdateSet)

export default UpdateSetCont;