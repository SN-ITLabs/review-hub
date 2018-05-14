import React from "react";
import ReactDOM from "react-dom";
//import "highlight.js/styles/github.css";

import { Provider } from "react-redux";


import "./index.css";
import App from "./containers/AppContainer";
import registerServiceWorker from "./registerServiceWorker";

import store from "./store";

const app = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    app
);


registerServiceWorker();
