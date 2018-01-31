import React from "react";

// material ui related imports
//import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey900} from 'material-ui/styles/colors';

import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey900
    }
});

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="App">
                    <Header />
                    <MainContainer />
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}
