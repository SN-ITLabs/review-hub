import {connect} from 'react-redux';
import DifferComp from '../components/DifferCom';

const mapDispatchToProps = dispatch => ({
    dispatch : () => {
    }
})

const Differ = connect(state => ({
    showDiffer: state.showDiff
}),mapDispatchToProps)(DifferComp);

export default Differ;