import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Storybar from "./components/Storybar";
import Profilebar from "./components/Profilebar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="row">
      <Sidebar />
      <div style={{ height: "1000px" }} className="col-6">
        <div className="row" style={{ height: "170px" }}>
          <Storybar />
        </div>
        <Feed />
      </div>
      <Profilebar />
    </div>
  );
}

export default App;
