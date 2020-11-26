import PropTypes from 'prop-types';
import React, {useEffect, useRef} from "react";
import {FILM_PREVIEW_TIMEOUT} from '../../constants';

export const VideoPlayer = (props) => {
  const {poster, src} = props;
  const videoRef = useRef(null);
  const videoSourceRef = useRef(null);

  useEffect(()=>{
    const video = videoRef.current;
    videoRef.current.oncanplaythrough = () => {
      setTimeout(()=>{
        video.play();
      }, FILM_PREVIEW_TIMEOUT);
    };

    return ()=>{
      videoRef.current.oncanplaythrough = null;
    };
  });

  return (
    <>
      <video
        width="280"
        height="175"
        muted="muted"
        poster={poster}
        ref = {videoRef}>
        <source src={src} ref = {videoSourceRef}/>
      </video>
    </>);
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;

