import {connect} from 'react-redux';
import DifferComp from '../components/DifferCom';

const mapDispatchToProps = dispatch => ({
    dispatch : () => {
    }
})

const Differ = connect(state => ({
    differData: state.differData,
    change : state.change_id,
    file : state.file_id
}),mapDispatchToProps)(DifferComp);

export default Differ;