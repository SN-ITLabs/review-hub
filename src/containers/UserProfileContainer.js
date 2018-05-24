import {connect} from 'react-redux'

import UserProfile from '../components/UserProfile'

const mapDispatchToProps = dispatch => ({
    dispatch : () =>{
        dispatch();
    }
})

const UserProfileComp = connect(state =>({
    reviewers : state.Review.reviewers
}),()=>({}))(UserProfile);

export default UserProfileComp;