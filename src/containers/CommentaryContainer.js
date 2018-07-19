import {connect} from 'react-redux'
import CommentaryComponent from '../components/CommentaryComponent'
import {saveCommentary,editCommentary,deleteCommentary,saveRating,getUserInfo} from "../actions/ReviewActions";

const mapStateToProps = (state) => ({ 
  commentary : state.Review.commentary,
  userName:state.Review.userName,
  currentUserId:state.Review.userId,
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
    },
    saveRating : (payload) => {
        dispatch(saveRating(payload));
    },
    userInfo : () => {
        dispatch(getUserInfo());
    }
})

const CommentaryContainer = connect(mapStateToProps,mapDispatchToProps)(CommentaryComponent);

export default CommentaryContainer;