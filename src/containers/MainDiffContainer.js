import {connect} from 'react-redux';
import MainDiff from '../components/MainDiff';
import {checkRatingBeforeChangeStateUpdate,toggleMode} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({

     toggleMode : () => {
        dispatch(toggleMode());
     },
    
    checkRatingBeforeChangeStateUpdate: (changesetname,change_id, field_name,isAccepted) =>{
          dispatch(checkRatingBeforeChangeStateUpdate(changesetname,change_id, field_name,isAccepted));     
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