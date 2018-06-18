import React from "react";

export default class extends React.Component {

     

    constructor(props, context) {
        super(props);
        this.state = {
            content:encodeURI(this.props.content),
            oldContent:encodeURI(this.props.content),
            isDisabled:"disabled",
            isEditing:false
        }  
        this.captureInput = this.captureInput.bind(this);
    }

        componentWillReceiveProps(nextProps){
            this.setState({content:encodeURI(nextProps.content),oldContent:encodeURI(nextProps.content)});
        }

       onDelete(){
            var id=this.props.id;
            var params = {
                    sysparam_comment_id : id
            }
           	this.props.onDelete(params);
        }

        captureInput(e) {
            var val = e.target.value;
            this.setState({
                'content': encodeURI(val)
            });
        } 

        onEdit(){
            this.setState({isEditing:true,isDisabled:false});
        }
        
        onOk(){
            var oldComment=this.state.oldContent;
            var comment = this.state.content;
            this.setState({isEditing:false,isDisabled:"disabled"});
            if(comment && comment.trim() !== "" && comment !== oldComment){  
                var id=this.props.id;
                var params = {
                    sysparam_commentId : id,
                    sysparam_description:comment
                }
                this.props.onEdit(params);
                this.setState({oldContent:comment});
            }else{
                this.setState({content:oldComment});
            }
        }

        onCancel(){
            var content=this.state.oldContent;
            this.setState({isEditing:false,isDisabled:"disabled",content:content});
        }

        render() {    
            var hideWhileEditing = {
                display: this.state.isEditing ? "none" : "inline-block"
            }
            var showWhileEditing={
                display:this.state.isEditing?"inline-block":"none"
            }
            var buttonStyle = {
                float: 'right',
                marginTop: -5
            }
            var textAreaStyle={
                border: this.state.isEditing? '1px solid gray': 0,
                width: '100%',
                maxWidth: '100%',
                minWidth:'100%'
            }
            return ( 
                <div class = "col-sm-12" >
                    <div class = "panel panel-default" >
                        <div class = "panel-heading" >
                            <strong > {this.props.user}</strong> 
                            <span class="text-muted">{this.props.time}</span >
                            <div style = {buttonStyle} >
                                <button  style={hideWhileEditing} type = "button" class = "btn btn-default btn-sm" onClick = {() => {this.onEdit()}}>
                                    <span class = "glyphicon glyphicon-edit" > </span> Edit 
                                </button> 
                                <button style={showWhileEditing} type = "button" class = "btn btn-default btn-sm" onClick = {() => {this.onOk()}} >
                                    <span class = "glyphicon glyphicon-ok"></span> Ok  
                                </button> 
                                <button style={showWhileEditing} type = "button" class = "btn btn-default btn-sm" onClick = {() => {this.onCancel()}} >
                                    <span class = "glyphicon glyphicon-remove" > </span> Cancel  
                                </button> 
                                <button type = "button" class = "btn btn-default btn-sm" onClick = {() => {this.onDelete()}} >
                                    <span class = "glyphicon glyphicon-bin" > </span> Remove  
                                </button> 
                            </div> 
                        </div> 
                        <div class = "panel-body" > 
                            <textarea style={textAreaStyle} disabled={this.state.isDisabled}  value={decodeURI(this.state.content)} onChange = {this.captureInput}></textarea>
                        </div> 
                    </div> 
                </div>
            )
        }
}