import React from "react";
import './App.css';
import Footer from './components/Footer';

import LeftBar from './containers/LeftBarContainer';
import Header from './containers/HeaderContainer';

import MainDiff from './components/MainDiff';
import RightBar from './components/RightBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        // primary1Color: grey900
    }
});


class App extends React.Component {

    handleDiffer(isOpen){
      this.props.dispatch(isOpen);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="app-container">
                    <section className="app-head">
                        <Header/>
                    </section>
                    <aside className="leftbar">
                        <LeftBar differHandler={this.handleDiffer.bind(this)} />
                    </aside>
                        <MainDiff showDiffer={this.props.showDiffer}/>
                    <aside className="rightbar">
                        <RightBar />
                    </aside>
                    <section className="footer">
                    <Footer/>
                    </section>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;