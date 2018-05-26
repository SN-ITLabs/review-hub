import {connect} from 'react-redux';
import DeveloperContent from '../components/DeveloperContent'

import {toggleMode} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    toggleMode : () => {
        dispatch(toggleMode());
    }
})

const DeveloperCont = connect(state => ({
    expandMode: state.Review.expandMode
}),mapDispatchToProps)(DeveloperContent);

export default DeveloperCont;