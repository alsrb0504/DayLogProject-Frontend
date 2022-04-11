import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { CookiesProvider } from "react-cookie";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./store";
import { createBrowserHistory } from "history";
import axios from "axios";

// axios 기본 설정
axios.defaults.withCredentials = true;

const customHistory = createBrowserHistory({
  forceRefresh: true,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      logger
    )
  )
);

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <HistoryRouter history={customHistory}>
          <App />
        </HistoryRouter>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// 성능
// reportWebVitals(console.log);
