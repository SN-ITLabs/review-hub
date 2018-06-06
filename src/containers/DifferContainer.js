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
    fieldName: state.Review.field_name,
    user : state.Review.userName,
    expandMode: state.Review.expandMode,
    showLiveStream: state.Review.showLiveStream,
    personaTab : state.Review.personaTab
}),mapDispatchToProps)(DifferComp);

export default Differ;