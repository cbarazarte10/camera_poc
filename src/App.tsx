import React from "react";
import WebcamCapture from "./WebcamCapture";

const App: React.FC = () => {
  return (
    <div className="App p-4">
      <h1 className="text-xl font-bold text-center">Camera PoC</h1>
      <WebcamCapture />
    </div>
  );
};

export default App;
