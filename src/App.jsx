import { useState, useEffect } from "react";
import { ORG_ID, API_KEY } from "./utils/keys";
import { callApi } from "./utils/token";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [bodyScannerURL, setbodyScannerURL] = useState();
  useEffect(() => {
    // Assuming you have ORG_ID and API_KEY from somewhere
    Result();
  }, []);

  const Result = async () => {
    const TOKEN = await callApi(ORG_ID, API_KEY);
    console.log(TOKEN);
    setData(TOKEN.token);
    setbodyScannerURL(
      `https://platform.bodygram.com/en/${ORG_ID}/scan?token=${data}&system=metric&screens=form,how-to-scan,can-hear-voice,put-device-vertically,gyro,scan`
    );
    console.log(bodyScannerURL);
  };

  if (data == null) {
    return;
  }

  return (
    <div>
      <h1>SCANNER</h1>

      {/* <iframe
        height={560}
        width={1222}
        src={bodyScannerURL}
        allow="camera; microphone; accelerometer; magnetometer; gyroscope"
      /> */}
    </div>
  );
};

export default App;
