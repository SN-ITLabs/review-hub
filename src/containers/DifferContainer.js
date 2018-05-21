import {connect} from 'react-redux';
import DifferComp from '../components/DifferCom';

import {getUserInfo} from '../actions/ReviewActions';

const mapDispatchToProps = dispatch => ({
    userInfo : () => {
        dispatch(getUserInfo());
    }
})

const Differ = connect(state => ({
    differData: state.differData,
    change : state.change_id,
    file : state.file_id,
    user : state.userName
}),mapDispatchToProps)(DifferComp);

export default Differ;