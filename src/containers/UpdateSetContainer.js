import {connect} from 'react-redux'

import UpdateSet from '../components/UpdateSet'
import {getUpdatesetReviewers} from "../actions/ReviewActions";


const mapDispatchToProps = dispatch => ({
    updateSetReviewers : (updateSetReviewer) => {
        dispatch(getUpdatesetReviewers(updateSetReviewer));
    }
})

const UpdateSetCont = connect(()=>({}),mapDispatchToProps)(UpdateSet)

export default UpdateSetCont;