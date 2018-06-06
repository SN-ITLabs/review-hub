import {connect} from 'react-redux';
import MainDiff from '../components/MainDiff';
import {changesetReviewSuccess,changesetReviewReject,toggleMode} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    changeSetSuccess : (changesetname,change_id, field_name) => {
        dispatch(changesetReviewSuccess(changesetname,change_id, field_name));
     },
 
     changeSetReject : (changesetname,change_id, field_name) => {
        dispatch(changesetReviewReject(changesetname,change_id, field_name));
     },

     toggleMode : () => {
        dispatch(toggleMode());
     }
})

const MainDiffCont = connect(state => ({
    expandMode: state.Review.expandMode,
    differData: state.Review.differData,
    change : state.Review.change_id,
    fieldName: state.Review.field_name,    
    contentMode: state.contentMode,
    personaTab : state.Review.personaTab
}),mapDispatchToProps)(MainDiff);

export default MainDiffCont;