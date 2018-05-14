import {connect} from 'react-redux';
import DifferComp from '../components/DifferCom';

const mapDispatchToProps = dispatch => ({
    dispatch : () => {
    }
})

const Differ = connect(state => ({
    differData: state.differData
}),mapDispatchToProps)(DifferComp);

export default Differ;