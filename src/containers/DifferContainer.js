import {connect} from 'react-redux';
import DifferComp from '../components/DifferCom';

import {getUserInfo} from '../actions/ReviewActions';

const mapDispatchToProps = dispatch => ({
    userInfo : () => {
        dispatch(getUserInfo());
    }
})

const Differ = connect(state => ({
    differData: state.Review.differData,
    change : state.Review.change_id,
    file : state.Review.file_id,
    user : state.Review.userName,
    expandMode: state.Review.expandMode
}),mapDispatchToProps)(DifferComp);

export default Differ;