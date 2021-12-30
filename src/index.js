import { StrictMode } from "react";
import ReactDOM from "react-dom";
// Main Component
import App from "./components/App/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
