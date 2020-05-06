import React from "react";
import ReactDOM from "react-dom";

import "fomantic-ui-css/semantic.css";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
