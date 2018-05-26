import {connect} from 'react-redux';
import Layout from '../components/Layout'

const mapDispatchToProps = dispatch => ({
})

const LayoutCont = connect(state => ({
    contentMode: state.contentMode,
    expandMode: state.Review.expandMode
}),mapDispatchToProps)(Layout);

export default LayoutCont;