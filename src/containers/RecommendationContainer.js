import {connect} from 'react-redux';
import Recomendations from '../components/Recommendations'

import {getRecomendations} from '../actions/ActivityActions'

const mapDispatchToProps = dispatch => ({
    fetchRecomendations : (type) => {
        dispatch(getRecomendations(type));
    }
})

const RecomendationsContainer = connect(state => ({
   rows : state.Activity.recomendations,
}),mapDispatchToProps)(Recomendations);

export default RecomendationsContainer;