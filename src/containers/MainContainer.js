import {connect} from 'react-redux';
import MainContent from '../components/MainContent'

const mapDispatchToProps = dispatch => ({
})

const MainCont = connect(state => ({
    contentMode: state.contentMode    
}),mapDispatchToProps)(MainContent);

export default MainCont;