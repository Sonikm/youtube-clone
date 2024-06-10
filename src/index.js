import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FirebaseProvider } from "./contexts/firebase";
import { Provider } from "react-redux";
import store from "./utils/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </FirebaseProvider>
  </React.StrictMode>
);
