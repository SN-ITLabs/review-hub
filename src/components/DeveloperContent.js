import React from "react";

import LeftBar from '../containers/LeftBarContainer';
import MainDiff from '../containers/MainDiffContainer';

import RightBar from './RightBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CommentaryContainer from "../containers/CommentaryContainer";

const muiTheme = getMuiTheme({
    palette: {
        // primary1Color: grey900
    }
});

export default class extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
            expandMode: this.props.expandMode,
            contentMode: 'Differ'
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({expandMode: nextProps.expandMode,contentMode: nextProps.contentMode});
    }

    render() {
        var overlayPane, mainClassName = "main";
        if('full_screen' == this.props.expandMode) {
            overlayPane = (<div class="overlay"></div>);
            mainClassName = "main-expandmode";
        }
        
        var mainContent;
        switch(this.state.contentMode) {
            case "Commentary": 
                mainContent = (<CommentaryContainer/>);
                break;
            default: 
                mainContent = (<MainDiff/>);
                break;            
        }

    
        return (<MuiThemeProvider muiTheme={muiTheme}>
                    {overlayPane}
                    <aside className="leftbar">
                        <LeftBar personne="Developer"/>
                    </aside>
                    <div className={mainClassName}>
                        {mainContent}
                    </div>                    
                    <aside className="rightbar">
                        <RightBar />
                    </aside>
                </MuiThemeProvider>)
    }
}
