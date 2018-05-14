import {connect} from 'react-redux';
import HeaderComp from '../components/Header';

import {getLoginUser} from '../actions/ReviewActions';

const mapDispatchToProps = dispatch => ({
    dispatch : () => {
        dispatch(getLoginUser());
    }
})

const Header = connect(state => ({
   user : state.user
}),mapDispatchToProps)(HeaderComp);

export default Header;