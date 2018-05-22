import {connect} from 'react-redux';
import MainDiff from '../components/MainDiff';
import {changesetReviewSuccess,changesetReviewReject} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    changeSetSuccess : (changesetname,change_id) => {
        dispatch(changesetReviewSuccess(changesetname,change_id));
     },
 
     changeSetReject : (changesetname,change_id) => {
        dispatch(changesetReviewReject(changesetname,change_id));
     }
})

const MainDiffCont = connect(state => ({
    differData: state.differData,
    change : state.change_id,
    contentMode: state.contentMode
}),mapDispatchToProps)(MainDiff);

export default MainDiffCont;