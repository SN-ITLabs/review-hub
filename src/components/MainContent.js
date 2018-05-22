import React from 'react';

import MainDiff from '../containers/MainDiffContainer';
import ActivityStream from '../containers/ActivityStreamContainer'

class MainContent extends React.Component{
    constructor(props, context) {
        super(props);
        this.state = {
            contentMode: this.props.contentMode
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({contentMode: nextProps.contentMode});
    }

    render(){
        var contentContainer;
        var contentMode = this.state.contentMode;
        contentMode = (!contentMode)? "ActivityStream":contentMode;
        console.log('Content Mode = ' + contentMode);
        switch(contentMode) {
            case 'Differ': 
                contentContainer = (<MainDiff/>);
                break;
            case 'ActivityStream': 
                contentContainer = (<ActivityStream/>);
                break;
        }

        return (<React.Fragment>{contentContainer}</React.Fragment>)
    }
}

export default MainContent;