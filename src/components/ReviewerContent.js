import React from "react";

import LeftBar from '../containers/LeftBarContainer';
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
    render() {
        return (<MuiThemeProvider muiTheme={muiTheme}>
                    <aside className="leftbar">
                        <LeftBar />
                    </aside>
                    <MainDiff />
                    <aside className="rightbar">
                        <RightBar />
                    </aside>
                </MuiThemeProvider>)
    }
}
