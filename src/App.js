import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { getDefaultListCriteria } from './util/globalhelper'

import Search from './components/Search';
import UpdateSetListContainer from './components/UpdateSetListContainer';


class App extends Component {

    constructor(props) {
        super(props);
        this.updateListCriteria = this.updateListCriteria.bind(this);
    }

    updateListCriteria(listCriteria) {
        this.setState({
            listCriteria: listCriteria
        })
    }

    state = {
        listCriteria: getDefaultListCriteria()
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="/images/logos/logo_service-now_light.png" className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {/* <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p> */}
                <div className="main-container">
                    <Search
                        defaultListCriteria={this.state.listCriteria}
                        updateList={this.updateListCriteria}>
                    </Search>
                    <UpdateSetListContainer
                        listCriteria={this.state.listCriteria}>
                    </UpdateSetListContainer>
                </div>
            </div>
        );
    }
}

export default App;
