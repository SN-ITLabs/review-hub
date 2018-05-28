import {connect} from 'react-redux';
import Layout from '../components/Layout'
import {toggleLiveStream} from "../actions/ReviewActions";

const mapDispatchToProps = dispatch => ({
    toggleLiveStream : (value) => {
        dispatch(toggleLiveStream(value));
     }
})

const LayoutCont = connect(state => ({
    contentMode: state.contentMode,
    expandMode: state.Review.expandMode
}),mapDispatchToProps)(Layout);

export default LayoutCont;