import {connect} from 'react-redux';
import LeftBarComp from '../components/LeftBar';

import {getChangeSetsForReview } from "../actions/SearchActions";

const mapDispatchToProps = dispatch => ({
    dispatch : () => {
        dispatch(getChangeSetsForReview());
    }
})

const LeftBar = connect(state => ({
    changeSets: state.changeSets
}),mapDispatchToProps)(LeftBarComp);

export default LeftBar;