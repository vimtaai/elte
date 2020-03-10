import React from "react";
import { Track } from "./Track";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ul>
        <Track artist="AC/DC" title="Highway to hell" length="2:45" />
        <Track artist="Bon Jovi" title="It's my life" length="3:12" />
        <Track artist="AC/DC" title="Thunderstruck" length="4:01" />
      </ul>
    </div>
  );
}

export default App;
