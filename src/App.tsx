import React from "react";
import CameraComponent from "./CameraComponent";

const App: React.FC = () => {
  return (
    <div className="App p-4">
      <h1 className="text-xl font-bold text-center">Camera PoC</h1>
      <CameraComponent />
    </div>
  );
};

export default App;
