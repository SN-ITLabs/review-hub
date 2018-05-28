import React from "react";
import getDifferScript from "../util/DifferService";
import CommentBox from "./CommentBox";
import commentsFactory from "../util/CommentService"

//var hl = require("highlight").Highlight;

class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComment: false
        };
        //this.hljs = require('highlight.js');
    }
    toggleLineComment(){
        this.setState({
            showComment: !this.state.showComment
        });

       // console.log(this.state.showComment);
    }

    render() {
        //console.log(this.props.difference);
      //  if (this.props.compare && this.props.difference) {
            var _differenceCode = "";
            if(this.props.difference){
                _differenceCode = this.props.difference;
                _differenceCode = _differenceCode.replace(/<ins>/g, "_ins_");
                _differenceCode = _differenceCode.replace(/<\/ins>/g, "_inse_");
                _differenceCode = _differenceCode.replace(/<del>/g, "_del_");
                _differenceCode = _differenceCode.replace(/<\/del>/g, "_dele_");
    
                // _differenceCode = this.hljs.highlightAuto(_differenceCode).value;
    
                _differenceCode = _differenceCode.replace(/_ins_/g, "<ins>");
                _differenceCode = _differenceCode.replace(/_inse_/g, "</ins>");
                _differenceCode = _differenceCode.replace(/_del_/g, "<del>");
                _differenceCode = _differenceCode.replace(/_dele_/g, "</del>");
            }
            
            
            return (
                <div className="row highlight-row">
                    <div className="no-padding col-md-12">
                        <div className="row script-code highlight">
                            <div className="no-padding col-md-1 line-comment">
                                <span className="line-comment-action" line-id={this.props.lineNumber} onClick={this.toggleLineComment.bind(this)}/>
                                {
                                    this.props.commentInstanceRef.get(this.props.lineNumber).length > 0 ?
                                        (<span className="comments-present"/>)
                                    : <span />
                                }
                            </div>
                            <div className="col-md-1 line-number">{this.props.lineNumber}</div>
                            {/* <div className="col-md-10 line-code" dangerouslySetInnerHTML={{__html: this.hljs.highlightAuto(this.props.script).value}}></div> */}
                            <div className="col-md-10 line-code" dangerouslySetInnerHTML={{__html: this.props.script}}></div> 
                        </div>
                        <div className="row script-code highlight">
                            <div className="no-padding col-md-1 line-comment"></div>
                            <div className="col-md-1 line-number"></div>
                            {/* <div className="col-md-10 line-code replace" dangerouslySetInnerHTML={{__html: _differenceCode}}></div> */}
                            <div className="col-md-10 line-code replace" dangerouslySetInnerHTML={{__html: _differenceCode}}></div> 
                        </div>
                        {
                            this.state.showComment ?
                                (<div className="row script-code highlight">
                                    <div className="no-padding col-md-1" />
                                    <div className="col-md-1" />
                                    <div className="col-md-10">
                                        <CommentBox user={this.props.user} line={this.props.lineNumber} commentInstance={this.props.commentInstanceRef}/>
                                    </div>
                                </div>
                                )
                            : <div></div>
                        }
                    </div>
                </div>
            );
        // }
        // return (
        //     <div className="row">
        //         <div className="no-padding col-md-12">
        //             <div className="row script-code">
        //                 <div className="no-padding col-md-1 line-comment" />
        //                 <div className="col-md-1 line-number">{this.props.lineNumber}</div>
        //                 {/* <div className="col-md-10 line-code" dangerouslySetInnerHTML={{__html: this.hljs.highlightAuto(this.props.script).value}}></div> */}
        //                 <div className="col-md-10 line-code" dangerouslySetInnerHTML={{__html: this.props.script}}></div>
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}

export default class Differ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           // differData: getDifferScript()
           commentFactoryInstance: commentsFactory(this.props.change,this.props.file),
           expandMode: this.props.expandMode, 
           showLiveStream: this.props.showLiveStream
        };
       // console.log(this.props.change);
    }

    componentDidMount(){
        this.props.userInfo();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            commentFactoryInstance: commentsFactory(nextProps.change,this.props.file),
            expandMode: nextProps.expandMode,
            showLiveStream: nextProps.showLiveStream
         });
    }

    render() {
        var _this = this;
        var topClassName = "row differ-main-com";        

        if(false == this.state.showLiveStream) {
            topClassName = "row differ-main-com-streamActive"
        }
        if("full_screen" == this.state.expandMode) {
            topClassName = "row differ-main-com-expandmode"
        }        
        return (
            <div className={topClassName}>
                <div className="col-md-12 differ-com">
                    {this.props.differData && this.props.differData.map(function(object, i) {
                        //console.log(object);
                        return (
                            <Line
                                lineNumber={object.line_number}
                                script={object.script}
                                key={i}
                                compare={object.compare}
                                difference={object.difference}
                                // file={_this.props.change}
                                commentInstanceRef={_this.state.commentFactoryInstance}
                                user = {_this.props.user}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
