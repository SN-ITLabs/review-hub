import React from "react";

export default class extends React.Component {
    render() {
        console.log('commentary container = ' + this.props.commentary);        
        return (<div>This is the  commentary container!!</div>)
    }
}
