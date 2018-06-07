import React from "react";

export default class extends React.Component {
       onDelete(){
            var id=this.props.id;
            var params = {
                    sysparam_comment_id : id
            }
           	this.props.onDelete(params);
        }
    	
        render() {
            var buttonStyle = {
                float: 'right',
                marginTop: -5
            }
            return ( <
                div class = "col-sm-12" >
                <
                div class = "panel panel-default" >
                <
                div class = "panel-heading" >
                <
                strong > {
                    this.props.user
                } < /strong> <span class="text-muted">{this.props.time}</span >
                <
                div style = {
                    buttonStyle
                } >
                <
                button type = "button"
                class = "btn btn-default btn-sm" >
                <
                span class = "glyphicon glyphicon-edit" > < /span> Edit < /
                button > <
                button type = "button"
                class = "btn btn-default btn-sm"
                onClick = {
                    () => {
                        this.onDelete()
                    }
                } >
                <
                span class = "glyphicon glyphicon-remove" > < /span> Remove  < /
                button > <
                /div> < /
                div > <
                div class = "panel-body" > {
                    this.props.content
                } <
                /div> < /
                div > <
                /div>
            )
        }
}