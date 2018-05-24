import {connect} from 'react-redux'
import AppComp from '../Layout'
import {loadUserComments} from "../actions/ReviewActions"


const mapDispatchToProps = dispatch => ({
    dispatch : () => {
        dispatch(loadUserComments());
    }
})

const App = connect(state => ({
    fetching: state.Review.fetching,
    comments : state.Activity.comments
}),mapDispatchToProps)(AppComp);

export default App;