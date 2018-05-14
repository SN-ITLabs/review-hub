import {connect} from 'react-redux';
import Differ from '../components/DifferCom';

const DifferCont = connect(state => ({
    differData : state.differData
}),()=>({}))(Differ);


export default DifferCont;