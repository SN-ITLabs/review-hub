import {connect} from 'react-redux';
import Persona from '../components/Persona';
import {switchPersona} from '../actions/ReviewActions';

const mapDispatchToProps = dispatch => ({
    changePersona : (name) => {
        dispatch(switchPersona(name));
    }
})

const PersonaContainer = connect(state => ({
    personaTab: state.Review.personaTab
}),mapDispatchToProps)(Persona);

export default PersonaContainer;