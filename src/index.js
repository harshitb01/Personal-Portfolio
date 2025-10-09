import ReactDOM from "react-dom";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

ReactDOM.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
  document.querySelector("#root")
);
