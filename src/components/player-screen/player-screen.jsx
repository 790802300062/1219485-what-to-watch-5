import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import {FilmTypeProps} from "../../prop-types-validations";
import VideoPlayer from "../video-player/video-player";
import PlayerTimeControls from "../player-time-controls/player-time-controls";

const getPlayerPlayButtonTemplate = (isPlaying) => {
  if (isPlaying) {
    return (
      <>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </>
    );
  }

  return (
    <>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </>
  );
};

class PlayerScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isFullscreen: false,
      isPlaying: false,
      currentTimeInSeconds: 0
    };

    this._playerRef = createRef();

    this._handlePlayerButtonClick = this._handlePlayerButtonClick.bind(this);
    this._handleFullscreenButtonClick = this._handleFullscreenButtonClick.bind(this);
    this._handleCurrentTimeChange = this._handleCurrentTimeChange.bind(this);
  }

  _handlePlayerButtonClick() {
    if (this.state.isPlaying) {
      this._pauseVideo();
    } else {
      this._playVideo();
    }
  }

  _handleFullscreenButtonClick() {
    if (this.state.isFullscreen) {
      this._closeFullscreen();
    } else {
      this._openFullscreen();
    }
  }

  _handleCurrentTimeChange(currentTimeInSeconds) {
    this.setState({
      currentTimeInSeconds
    });
  }

  _playVideo() {
    this.setState({
      isPlaying: true,
    });
  }

  _pauseVideo() {
    this.setState({
      isPlaying: false,
    });
  }

  _openFullscreen() {
    this._playerRef.current.requestFullscreen();

    this.setState({
      isFullscreen: true,
    });
  }

  _closeFullscreen() {
    document.exitFullscreen();
    this.setState({
      isFullscreen: false,
    });
  }

  render() {
    const {
      video,
      runtime,
      fullSizePoster,
      title,
    } = this.props.film;

    const {onExitButtonClick} = this.props;
    const {isPlaying, currentTimeInSeconds} = this.state;
    const playerPlayButtonTemplate = getPlayerPlayButtonTemplate(isPlaying);

    return (
      <div className="player">
        <VideoPlayer
          isPlaying={isPlaying}
          additionalClasses="player__video"
          src={video}
          poster={fullSizePoster}
          onCurrentTimeChange={this._handleCurrentTimeChange}
        />

        <button
          type="button"
          className="player__exit"
          onClick={onExitButtonClick}
        >
          Exit
        </button>

        <div className="player__controls">
          <PlayerTimeControls
            runtime={runtime}
            currentTimeInSeconds={currentTimeInSeconds}
          />
          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={this._handlePlayerButtonClick}>

              {playerPlayButtonTemplate}
            </button>
            <div className="player__name">{title}</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={this._handleFullscreenButtonClick}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

PlayerScreen.propTypes = {
  film: FilmTypeProps.filmCard,
  onExitButtonClick: PropTypes.func.isRequired,
};

export default PlayerScreen;
