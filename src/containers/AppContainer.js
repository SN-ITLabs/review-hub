import {connect} from 'react-redux';
import AppComp from '../App';
import {toggleDifferComp} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    dispatch : () => {
        dispatch();
    }

})

const App = connect(state => ({
    fetching: state.fetching
}),mapDispatchToProps)(AppComp);

export default App;