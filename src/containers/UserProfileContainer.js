import {connect} from 'react-redux'

import UserProfile from '../components/UserProfile'

const mapDispatchToProps = dispatch => ({
    dispatch : () =>{
        dispatch();
    }
})

const UserProfileComp = connect(state =>({
    reviewers : state.reviewers
}),()=>({}))(UserProfile);

export default UserProfileComp;