import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
