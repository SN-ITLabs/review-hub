import React from "react";
import getDifferScript from "../util/DifferService";
import CommentBox from "./CommentBox";
//var hl = require("highlight").Highlight;

class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this.hljs = require('highlight.js');
    }
    render() {
        //console.log(this.props.difference);
        if (this.props.compare && this.props.difference) {
            var _differenceCode = this.props.difference;
            // _differenceCode = _differenceCode.replace(/<ins>/g, "_ins_");
            // _differenceCode = _differenceCode.replace(/<\/ins>/g, "_inse_");
            // _differenceCode = _differenceCode.replace(/<del>/g, "_del_");
            // _differenceCode = _differenceCode.replace(/<\/del>/g, "_dele_");

            // // _differenceCode = this.hljs.highlightAuto(_differenceCode).value;

            // _differenceCode = _differenceCode.replace(/_ins_/g, "<ins>");
            // _differenceCode = _differenceCode.replace(/_inse_/g, "</ins>");
            // _differenceCode = _differenceCode.replace(/_del_/g, "<del>");
            // _differenceCode = _differenceCode.replace(/_dele_/g, "</del>");

            return (
                <div className="row highlight-row">
                    <div className="no-padding col-md-12">
                        <div className="row script-code highlight">
                            <div className="no-padding col-md-1 line-comment">
                                <span className="line-comment-action" line-id={this.props.line_number} />
                            </div>
                            <div className="col-md-1 line-number">{this.props.lineNumber}</div>
                            {/* <div
                                className="col-md-10 line-code"
                                dangerouslySetInnerHTML={{ __html: this.hljs.highlightAuto(this.props.script).value }}
                            /> */}
                        </div>
                        <div className="row script-code highlight">
                            <div className="no-padding col-md-1 line-comment" />
                            <div className="col-md-1 line-number" />
                            <div
                                className="col-md-10 line-code replace"
                                dangerouslySetInnerHTML={{ __html: _differenceCode }}
                            />
                        </div>
                        <div className="row script-code highlight">
                            <div className="no-padding col-md-1" />
                            <div className="col-md-1" />
                            <div className="col-md-10">
                                <CommentBox user="Avishek Dalal" />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="row">
                <div className="no-padding col-md-12">
                    <div className="row script-code">
                        <div className="no-padding col-md-1 line-comment" />
                        <div className="col-md-1 line-number">{this.props.lineNumber}</div>
                        {/* <div
                            className="col-md-10 line-code"
                            dangerouslySetInnerHTML={{ __html: this.hljs.highlightAuto(this.props.script).value }}
                        /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default class Differ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            differData: getDifferScript()
        };
        //console.log(this.state.differData);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12 differ-com">
                    {this.state.differData.map(function(object, i) {
                        //console.log(object);
                        return (
                            <Line
                                lineNumber={object.line_number}
                                script={object.script}
                                key={i}
                                compare={object.compare}
                                difference={object.difference}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
