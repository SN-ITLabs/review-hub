import {connect} from 'react-redux';
import MainDiff from '../components/MainDiff';
import {changesetReviewSuccess,changesetReviewReject,toggleMode} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    changeSetSuccess : (changesetname,change_id) => {
        dispatch(changesetReviewSuccess(changesetname,change_id));
     },
 
     changeSetReject : (changesetname,change_id) => {
        dispatch(changesetReviewReject(changesetname,change_id));
     },

     toggleMode : () => {
        dispatch(toggleMode());
     }
})

const MainDiffCont = connect(state => ({
    expandMode: state.Review.expandMode,
    differData: state.Review.differData,
    change : state.Review.change_id    
    // contentMode: state.Activity.contentMode
}),mapDispatchToProps)(MainDiff);

export default MainDiffCont;