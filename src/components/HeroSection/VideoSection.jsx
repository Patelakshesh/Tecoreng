import { useState, useRef, useMemo } from "react";
import "./HeroSection.css";
import prevideo from "../../assets/videos/Tecoreng_previewVideo.mp4";
import fullvideo from "../../assets/videos/Tecoreng_fullVideo.mp4";
import { SiGoogledisplayandvideo360 } from "react-icons/si";

const VideoSection = () => {
  const previewVideoSrc = useMemo(() => prevideo, []);
  const fullVideoSrc = useMemo(() => fullvideo, []);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const previewVideoRef = useRef(null);
  const fullVideoRef = useRef(null);

  const handleFullScreenToggle = () => {
    if (!isFullScreen) {
      if (fullVideoRef.current) {
        if (fullVideoRef.current.requestFullscreen) {
          fullVideoRef.current.requestFullscreen();
        } else if (fullVideoRef.current.webkitRequestFullscreen) {
          fullVideoRef.current.webkitRequestFullscreen();
        } else if (fullVideoRef.current.mozRequestFullScreen) {
          fullVideoRef.current.mozRequestFullScreen();
        } else if (fullVideoRef.current.msRequestFullscreen) {
          fullVideoRef.current.msRequestFullscreen();
        }

        fullVideoRef.current.play();
        previewVideoRef.current.pause();
        setIsFullScreen(true);
      }
    } else {
      exitFullScreen();
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    fullVideoRef.current.pause();

    setTimeout(() => {
      previewVideoRef.current.currentTime = 0;
      previewVideoRef.current.play();
    }, 100);
    setIsFullScreen(false);
  };

  const handleVideoEnd = () => {
    exitFullScreen();
  };

  return (
    <div className="a-8 z-11">
      <div className="container">
        <div className="video-container">
          {!isFullScreen && (
            <video
              autoPlay
              playsInline
              loop
              muted
              className="video-player"
              ref={previewVideoRef}
            >
              <source src={previewVideoSrc} type="video/mp4" />
            </video>
          )}
          <span className="play-button" onClick={handleFullScreenToggle}>
            <SiGoogledisplayandvideo360 />
          </span>
          <video
            controls
            style={{ display: isFullScreen ? "block" : "none" }}
            className="video-player"
            ref={fullVideoRef}
            onEnded={handleVideoEnd}
          >
            <source src={fullVideoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
