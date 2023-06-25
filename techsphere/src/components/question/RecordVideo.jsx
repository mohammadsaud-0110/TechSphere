import { useRecordWebcam } from "react-record-webcam";
import React, { useEffect } from "react";

export const RecordVideo = (props) => {
  const recordWebcam = useRecordWebcam({
    frameRate: 90,
    mimeType: "video/mp4",
    aspectRatio: 1,
  });
  useEffect(() => {
    (async () => {
      await recordWebcam.open();
      await recordWebcam.start();
    })();

    return () => {};
  }, []);

  return (
    <div className="w-3/4 m-auto">
      <p className="mt-10">Camera status: {recordWebcam.status}</p>
      <div>
        <p className="mt-5 text-2xl">Q. What is React JS</p>
        {/* <button onClick={recordWebcam.stop}>Stop recording</button>
        <button onClick={recordWebcam.start}>Start recording</button>
        <button onClick={recordWebcam.download}>Download recording</button> */}
        <video
          className=" bottom-10 mb-10"
          ref={recordWebcam.webcamRef}
          width={400}
          height={300}
          autoPlay
        />
      </div>
    </div>
  );
};
