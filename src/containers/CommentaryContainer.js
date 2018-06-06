import {connect} from 'react-redux'
import CommentaryComponent from '../components/CommentaryComponent'


const mapDispatchToProps = dispatch => ({   
})

const CommentaryContainer = connect(state => ({    
    commentary : state.Review.comments
}),mapDispatchToProps)(CommentaryComponent);

export default CommentaryContainer;