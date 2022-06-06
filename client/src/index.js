import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

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
    applyMiddleware(ReduxThunk.withExtraArgument({ history: customHistory }))
  )
);

const persistor = persistStore(store);

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode).render(
  <CookiesProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HistoryRouter history={customHistory}>
          <App />
        </HistoryRouter>
      </PersistGate>
    </Provider>
  </CookiesProvider>
);
