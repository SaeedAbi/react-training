import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Components/Layout";
// import { Header } from "src/Components/header";

function App() {
  return (
    <div className={"container"}>
      <Layout />
    </div>
  );
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// react.render(<App />);
