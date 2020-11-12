import React from "react";
import PropTypes from "prop-types";
import {getFullDurationWithColons} from "../../utils";

const PlayerControlsTime = (props) => {
  const {
    runtime,
    currentTimeInSeconds,
  } = props;

  const runtimeInSeconds = runtime * 60;
  const timeLeft = runtimeInSeconds - currentTimeInSeconds;
  const timeLeftFormatted = getFullDurationWithColons(timeLeft);
  const timeInPercent = Math.round(currentTimeInSeconds / runtimeInSeconds * 100);

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={timeInPercent} max="100"></progress>
        <div className="player__toggler" style={{left: `${timeInPercent}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{timeLeftFormatted}</div>
    </div>
  );
};

PlayerControlsTime.propTypes = {
  runtime: PropTypes.number.isRequired,
  currentTimeInSeconds: PropTypes.number.isRequired,
};

export default PlayerControlsTime;
