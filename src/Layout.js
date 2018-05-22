import React from "react";
import './css/App.css';
import Footer from './components/Footer';

import LeftBar from './containers/LeftBarContainer';
import Header from './containers/HeaderContainer';

import MainDiff from './containers/MainDiffContainer';
import RightBar from './components/RightBar';
import Persona from './components/Persona';

import CircularProgress from 'material-ui/CircularProgress';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        // primary1Color: grey900
    }
});


class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>            
                <div className="app-container">
                   { this.props.fetching ? <CircularProgress className="loading_icon"/>  : null}
                    <section className="app-head">
                        <Header/>                        
                    </section>
                    <section className="persona">   
                        <Persona/>                 
                    </section>                    
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;