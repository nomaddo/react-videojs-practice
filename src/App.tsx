import * as React from "react";
import { render } from "react-dom";

import VideoPlayer from "./videoplayer";

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: "http://vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4",
    },
  ],
};

function App() {
  return <VideoPlayer { ...videoJsOptions } />
}
export default App;
