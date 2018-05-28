import React from "react";

import LeftBar from '../containers/LeftBarContainer';
//import MainContent from '../containers/MainContainer';
import MainDiff from '../containers/MainDiffContainer';

import RightBar from './RightBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        // primary1Color: grey900
    }
});

export default class extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
            expandMode: this.props.expandMode
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({expandMode: nextProps.expandMode});
    }

    render() {
        var overlayPane, mainClassName = "main";
        if('full_screen' == this.props.expandMode) {
            overlayPane = (<div class="overlay"></div>);
            mainClassName = "main-expandmode";
        }
    
        return (<MuiThemeProvider muiTheme={muiTheme}>
                    {overlayPane}
                    <aside className="leftbar">
                        <LeftBar personne="Reviewer"/>
                    </aside>
                    <div className={mainClassName}>
                        <MainDiff/>
                    </div>                    
                    <aside className="rightbar">
                        <RightBar />
                    </aside>
                </MuiThemeProvider>)
    }
}
