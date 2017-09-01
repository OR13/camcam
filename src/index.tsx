import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import {
  Route
  //  Redirect
} from "react-router";
import * as injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { MuiThemeProvider, lightBaseTheme } from "material-ui/styles";
import "./index.css";

import { store, history } from "./store/store";
import HomePage from "./components/Home/HomePage";

const lightMuiTheme = getMuiTheme(lightBaseTheme);

setTimeout(() => {
  let b64Image = localStorage.getItem("lastImage");
  if (b64Image) {
    var urlString = "url(" + b64Image + ")";
    document.body.style.backgroundImage = urlString;
  }
}, 0);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div style={{ height: "100%" }}>
          <Route exact={true} path="/" component={HomePage} />
        </div>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
