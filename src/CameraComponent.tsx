import React, { useRef, useState } from "react";

const CameraComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const startCamera = async (): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { exact: "environment" }, // Back camera
        },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Unable to access the camera. Check permissions.");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={startCamera}
        className="p-2 bg-blue-500 text-white rounded-lg mt-4"
      >
        Start Camera
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      <video
        ref={videoRef}
        className="mt-4 w-full max-w-md border rounded-lg"
        autoPlay
      />
    </div>
  );
};

export default CameraComponent;
