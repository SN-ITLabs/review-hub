import React from "react"
import ReactDOM from "react-dom"
//import "highlight.js/styles/github.css";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './css/index.css'
import App from "./containers/AppContainer";

// import SlackIntegrator from './containers/SlackIntegratorContainer'

import registerServiceWorker from "./registerServiceWorker";

import store from "./store";

const app = document.getElementById("root")

ReactDOM.render(
    <Router>    
        <Provider store={store}>
            <div>
                <Route exact path="/" component={App} />
                {/* <Route path="/integrator" component={SlackIntegrator} /> */}
            </div>
        </Provider>
    </Router>,
    app
);


registerServiceWorker();
