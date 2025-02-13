// WebcamCapture.tsx
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const WebcamCapture: React.FC = () => {
  const webcamRef = useRef<Webcam>(null); // Reference for the webcam
  const [imageSrc, setImageSrc] = useState<string | null>(null); // State to hold the captured image

  // Function to capture the photo
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot(); // Capture screenshot from webcam
    if (imageSrc) {
      setImageSrc(imageSrc); // Set the captured image to the state
    }
  }, [webcamRef]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Webcam V2</h1>

      {/* Display webcam */}
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        videoConstraints={{
          facingMode: "environment", // Optional: Use the back camera if available
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        }}
      />

      {/* Capture button */}
      <button onClick={capture}>Capture</button>

      {/* Display captured image */}
      {imageSrc && (
        <div>
          <h2>Captured Image:</h2>
          <img
            src={imageSrc}
            alt="Captured"
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
