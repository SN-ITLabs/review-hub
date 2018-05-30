import {connect} from 'react-redux';
import PropertiesPane from '../components/PropertiesPane'

import {getPropertyDetails} from '../actions/ActivityActions'

const mapDispatchToProps = dispatch => ({
    propertyDetails : (changeId) => {
        dispatch(getPropertyDetails(changeId));
    }
})

const PropertiesCont = connect(state => ({
   changeDetails : state.Activity.changeDetails,
   changeComments : state.Activity.changeComments,
   changeHistory : state.Activity.changeHistory,
   change : state.Review.change_id
}),mapDispatchToProps)(PropertiesPane);

export default PropertiesCont;