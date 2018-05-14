import {connect} from 'react-redux';
import MainDiff from '../components/MainDiff';

const MainDiffCont = connect(state => ({
    differData: state.differData
}),()=>({}))(MainDiff);

export default MainDiffCont;