import {connect} from 'react-redux';
import ActivityStreamComp from '../components/ActivityStream'
const mapDispatchToProps = dispatch => ({    
})

const ActivityStreamContainer = connect(state => ({    
    contentMode: state.contentMode,
    activityStream: state.activityStream
}),mapDispatchToProps)(ActivityStreamComp);

export default ActivityStreamContainer;