import React from 'react';

export default class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.commentFactoryInstance = this.props.commentInstance
        this.state = {
            comments: this.commentFactoryInstance.get(this.props.line),
            message: ''
        };
      //  console.log(this.state.comments);
       //// this.hljs = require('highlight.js');
    }
    getComments(){
        var _comments = this.commentFactoryInstance.get(this.props.line)
       // console.log(_comments);
        this.setState({
            comments: _comments
        })
    }
    handleTextAreaValue(event){
        this.setState({
            message: event.target.value
        });
    }

    refreshComments(){
        this.getComments(); 
    }

    setComment(){
        this.commentFactoryInstance.set(this.props.line, this.state.message, this.props.user,this.refreshComments.bind(this));
        this.setState({
            message: ''
        });
        //this.getComments();
    }
    render(){
        return (
            <div className="row comment-box">
                <div className="col-md-12">
                    {
                        this.state.comments.map(function(object, i) {
                            return(
                                <div className="row comment">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-12 comment-user">{object.user}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 comment-message">{object.message}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="row comment-box-container">
                        <div className="col-md-2"><div className="profile-icon">{this.props.user[0]}</div></div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-12 profile-name">{this.props.user}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-box">
                                    <textarea className="comment-box-post-textarea" value={this.state.message} onChange={this.handleTextAreaValue.bind(this)}></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-right"><input type="button" value="Post" className="comment-box-post-button" onClick={this.setComment.bind(this)}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}