import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import {Path} from "../../constants";
import {fetchFilmById} from "../../store/api-actions";
import {selectFilm, selectIsFilmLoaded} from '../../store/films/films';
import browserHistory from "../../utils/browser-history";
import {getVideoDurationHMS} from "../../utils/date-time-formatter";
import {filmPropTypesShape} from "../../utils/props-validation";

const ZERO_DURATION = 0;
const PERCENTS_DIVISOR = 100;

const calculateProgress = (duration, currentTime)=>{
  if (!currentTime || !duration) {
    return ZERO_DURATION;
  }

  return currentTime / duration * PERCENTS_DIVISOR;
};

export const PlayerScreen = (props)=>{
  const {film, isFilmLoaded, loadFilmInfo, id} = props;
  const {title, background, videoSrc} = film;

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(``);
  const [canPlayThrough, setCanPlayThrough] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    if (!isFilmLoaded) {
      loadFilmInfo(id);
    }
  });

  useEffect(()=>{
    if (videoRef) {
      const video = videoRef.current;
      video.oncanplaythrough = () => {
        setDuration(Math.floor(video.duration));
        setIsLoading(false);
        setCanPlayThrough(true);
      };
      video.onerror = ()=>{
        const {code, message} = video.error;
        setIsLoading(false);
        setVideoError(`Video is unavaliable. Error ${code}; details: ${message}`);
        setCanPlayThrough(false);
      };
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Math.floor(videoRef.current.currentTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTime]);

  useEffect(() => {
    setProgress(calculateProgress(duration, currentTime));
    setTimeLeft(duration - currentTime);
  }, [currentTime, duration]);

  return (
    <div className="player">
      <video src={videoSrc} className="player__video" poster={background} ref={videoRef}></video>

      <button
        type="button"
        className="player__exit"
        onClick={()=>{
          browserHistory.push(Path.filmScreen(id));
        }}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getVideoDurationHMS(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          {canPlayThrough && <div>
            {!isPlaying && <button type="button" className="player__play" onClick={()=>{
              setIsPlaying(true);
              videoRef.current.play();
            }}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>}

            {isPlaying && <button type="button" className="player__play" onClick={()=>{
              setIsPlaying(false);
              videoRef.current.pause();
            }}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>}
          </div>}
          {isLoading && <div className="player__name">Loading video...</div>}
          {videoError && <div className="player__name">{videoError}</div>}

          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={()=>{
            videoRef.current.requestFullscreen();
          }}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>);
};

PlayerScreen.propTypes = {
  id: PropTypes.string.isRequired,
  film: filmPropTypesShape.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  loadFilmInfo: PropTypes.func.isRequired
};

const mapStateToProps = (state, {id}) => ({
  film: selectFilm(state),
  isFilmLoaded: selectIsFilmLoaded(id)(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmInfo(id) {
    dispatch(fetchFilmById(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);
