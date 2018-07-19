import {connect} from 'react-redux';
import SlackIntegrator from '../components/SlackIntegrator'

import {switchPersona,toggleDifferComp,setContentMode} from "../actions/ReviewActions"
import {getReviewerDetails} from '../actions/ActivityActions'

const mapDispatchToProps = dispatch => ({
    switchPersona : (name) => {
        dispatch(switchPersona(name));
    },
    toggleDifferComp : (change_id,fileId,fieldName) => {
        dispatch(toggleDifferComp(change_id,fileId,fieldName));
    },
    setContentMode: (modeType) => {
         dispatch(setContentMode(modeType));
    },
    getReviewDet : (change_id) => {
       dispatch(getReviewerDetails(change_id));
    }
})

const SlackIntegratorCont = connect(state => ({
}),mapDispatchToProps)(SlackIntegrator);

export default SlackIntegratorCont;