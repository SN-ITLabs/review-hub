import {connect} from 'react-redux';
import ReviewContent from '../components/ReviewerContent'

import {toggleMode} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    toggleMode : () => {
        dispatch(toggleMode());
    }
})

const ReviewCont = connect(state => ({
    expandMode: state.Review.expandMode,
    contentMode: state.Review.contentMode
}),mapDispatchToProps)(ReviewContent);

export default ReviewCont;