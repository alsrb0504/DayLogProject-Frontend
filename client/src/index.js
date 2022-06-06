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

import { createBrowserHistory } from "history";
import axios from "axios";

// redux-persist
import persistedReducer from "./store";
import { persistStore } from "redux-persist"; //
import { PersistGate } from "redux-persist/integration/react"; //

// axios 기본 설정
axios.defaults.withCredentials = true;

const customHistory = createBrowserHistory({
  forceRefresh: true,
});

const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      logger
    )
  )
);

const persistor = persistStore(store);

// React.strictMode 나중에 지울 것
// alert 2번씩 뜸.
ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HistoryRouter history={customHistory}>
          <App />
        </HistoryRouter>
      </PersistGate>
    </Provider>
  </CookiesProvider>,
  document.getElementById("root")
);
