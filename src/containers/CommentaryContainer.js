import {connect} from 'react-redux'
import CommentaryComponent from '../components/CommentaryComponent'
import {saveCommentary,editCommentary,deleteCommentary} from "../actions/ReviewActions";

const mapStateToProps = (state) => ({ 
  commentary : state.Review.commentary,
  userName:state.Review.userName,
  personaTab:state.Review.personaTab
});

const mapDispatchToProps = dispatch => ({
    saveCommentary : (payload) => {
        dispatch(saveCommentary(payload));
    },
    editCommentary : (payload) => {
        dispatch(editCommentary(payload));
    },
    deleteCommentary : (payload) => {
        dispatch(deleteCommentary(payload));
    }   
})

const CommentaryContainer = connect(mapStateToProps,mapDispatchToProps)(CommentaryComponent);

export default CommentaryContainer;