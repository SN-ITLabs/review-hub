import {connect} from 'react-redux'
import UserProfile from '../components/UserProfile'
import {getHierarchy,changeDelegationProp} from '../actions/ActivityActions'
import {updateChangeReviewer} from '../actions/ReviewActions'

const mapDispatchToProps = dispatch => ({
    getUpwardHierarchy : () =>{
        dispatch(getHierarchy());
    },
    handlePopupDelegation : (val) =>{
        dispatch(changeDelegationProp(val));
    },
    updateReviewer : (reviewer,changeid) => {
        dispatch(updateChangeReviewer(reviewer,changeid));
    }
})

const UserProfileComp = connect(state =>({
    reviewers : state.Review.reviewers,
    upwardHierarchy : state.Activity.upwardHierarchy,
    showDelegation : state.Activity.showDelegation,
    change : state.Review.change_id
}),mapDispatchToProps)(UserProfile);

export default UserProfileComp;