import {useState} from "react";
import video from "../data/video.js";
import Video from "./Video";

function App() {
  console.log("Here's your data:", video);
  const [data, setData] = useState(video);

  return (
    <div className="App">
      <Video data={data} onChangeHandle={setData} />
    </div>
  );
}

export default App;
