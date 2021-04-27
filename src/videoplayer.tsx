import * as React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

type VideoPlayerProps = videojs.PlayerOptions;
export default class VideoPlayer extends React.Component {
  player: videojs.Player | undefined;
  videoNode: HTMLVideoElement | null;
  props: VideoPlayerProps;

  constructor(props: VideoPlayerProps) {
    super(props);
    this.videoNode = null;
    this.props = props;
  }

  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady");
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={(node) => (this.videoNode = node)}
            className="video-js"
          ></video>
        </div>
      </div>
    );
  }
}
