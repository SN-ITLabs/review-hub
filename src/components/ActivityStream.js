import React from "react";

export default class extends React.Component {
    render() {
        console.log('activityStream = ' + this.props.activityStream);
        return (<div>This is the live activity stream!!</div>)
    }
}
