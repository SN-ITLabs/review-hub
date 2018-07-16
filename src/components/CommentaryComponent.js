import React from "react";
import CommentPanel from '../components/CommentPanel';
import Rating from "react-rating";

export default class extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            inputComment: ""
        }
        this.captureInput = this.captureInput.bind(this);
        this.changeRating=this.changeRating.bind(this);
        
    }
    componentDidMount(){
        this.props.userInfo();
    }

    captureInput(e) {
        var val = e.target.value;
        this.setState({
            'inputComment': encodeURI(val)
        });
    }

    changeRating(value){
        var fileId=this.props.commentary.header.fileid;
        var params={};
        params.sysparam_change=fileId;
        params.sysparam_rating=value;
        this.props.saveRating(params);
    }
    
    saveComment(){
       
        var params={};
        
        /* fileid, filename, fieldname, level=(file, field, changeset), changesetid, changesetname
        */
        var header=this.props.commentary.header;
        if(header.fileid){
            params.sysparam_changeid=header.fileid;   
        }
        else {
            params.sysparam_changesetid=header.changesetid;
        }
        var comment=this.state.inputComment;
     
        if(comment.trim() === ""){
            return;
        }

        params.sysparam_description = this.state.inputComment;
        
        //params.sysparam_commentedby=this.props.userName;
        params.sysparam_commentedbyrole='0';
        if(this.props.personaTab=='Reviewer');
            params.sysparam_commentedbyrole='1';
        this.props.saveCommentary(params); 
        this.setState({
            'inputComment': ""
        });
    }
    
    editComment(params){
          this.props.editCommentary(params);
    }
    
    deleteComment(params){
      this.props.deleteCommentary(params);
    }
    
    render() {
        var isRatingReadOnly=true;
        if(this.props.personaTab=='Reviewer'){
            isRatingReadOnly=false;
        }


        var initialRating=0;
        var commentaries = this.props.commentary;
        var heading,label;
        var showRating=false;
        if (commentaries.header.changesetid) {
            label=commentaries.header.changesetname?commentaries.header.changesetname:'';
            heading = "Change Set: "+label;
            showRating=false;
        } else {
            label=commentaries.header.filename?commentaries.header.filename:'';
            initialRating=commentaries.header.rating?commentaries.header.rating:initialRating;
            heading = "Change : " +label;
            showRating=true;
        }
        var commentPanels = [];
        var commentaries_data = commentaries.data;
        for (var key in commentaries_data) {
            if (commentaries_data.hasOwnProperty(key)) {
                var commentary = commentaries_data[key];
                var postedBy = commentary.commentedby;
                var postedByUserId=commentary.commentedbyUserId;
                var postedOn = commentary.postedon;
                var description = commentary.description;
                var id=commentary.sysid;
                var cp = <CommentPanel id = {id} currentUserId={this.props.currentUserId} user = {postedBy} userId={postedByUserId} time = {postedOn} content = {description} onEdit={(params)=>{this.editComment(params)}} onDelete={(params)=>{this.deleteComment(params)}}/>
                commentPanels.push(cp);
            }
        }
        
        var textAreaStyle={
            width: '100%',
            maxWidth: '100%',
            minWidth:'100%'
        }
        

        return ( <div>
        			<div class = "col-sm-12">
            			<h3> {heading} </h3> 
                        {showRating ? (
                        <div>
                        <hr/>
                        <div>
                            <h4>How would you rate the quality of work? </h4>
                            <p>{this.state.rating} </p>
                            {isRatingReadOnly? ( <Rating initialRating={initialRating} 
                                    readonly
                                    emptySymbol="fa fa-star-o fa-2x" 
                                    fullSymbol="fa fa-star fa-2x"
                                    onChange={(rating)=>{this.changeRating(rating)}}
                            />):(
                            <Rating initialRating={initialRating} 
                                    emptySymbol="fa fa-star-o fa-2x" 
                                    fullSymbol="fa fa-star fa-2x"
                                    onChange={(rating)=>{this.changeRating(rating)}}
                            />)}
                        </div>
                        <hr/>
                        </div>
                        ):(<hr/>)}
            			<textarea style={textAreaStyle} value={decodeURI(this.state.inputComment)} type = "text" placeholder = "Post your comment here..." onChange = {this.captureInput}/> 
            			<button onClick={()=>{this.saveComment()}} type = "button" class = "btn btn-info btn-sm" > Add Comment </button> 
            	        <hr/>
                	</div> 
            		{commentPanels} 
            	</div>
        )
    }
}