import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="body s10">
        <div className="row">
          <h1 className="col s3 offset-s5">H</h1>
        </div>
        <h2 className="col s12">Start editing to see some magic happen!</h2>
        <div className="row">
          <div className="col s2">1</div>
          <div className="col s2">1</div>
          <div className="col s2">1</div>
          <div className="col s2">1</div>
          <div className="col s2">1</div>
          <div className="col s2">1</div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
