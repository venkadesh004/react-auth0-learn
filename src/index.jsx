import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientid = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientid}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>, 
  document.getElementById("root"));
