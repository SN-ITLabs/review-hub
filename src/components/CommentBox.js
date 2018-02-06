import React from 'react';

export default class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
       //// this.hljs = require('highlight.js');
    }
    render(){
        return (
            <div className="row comment-box">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-2"><div className="profile-icon">{this.props.user[0]}</div></div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-12 profile-name">{this.props.user}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-box">
                                    <textarea className="comment-box-post-textarea"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-right"><input type="button" value="Post" className="comment-box-post-button"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}