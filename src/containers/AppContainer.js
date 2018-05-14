import {connect} from 'react-redux';
import AppComp from '../App';
import {toggleDifferComp} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    dispatch : (isOpen) => {
        dispatch(toggleDifferComp(isOpen));
    }

})

const App = connect(state => ({
    showDiffer: state.toggleDiff
}),mapDispatchToProps)(AppComp);

export default App;