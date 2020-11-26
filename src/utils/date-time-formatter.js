const TIME_DIVISOR = 60;

export const getDateAndTime = (date, withTime = true) => {
  const day = addZeroAsFirstChar(date.getDate());
  const month = addZeroAsFirstChar(date.getMonth() + 1);
  const year = date.getFullYear();
  const time = formatTime(date);

  return `${year}-${month}-${day}${withTime ? `T${time}` : ``}`;
};

export const formatTime = (date) => {
  const hours = addZeroAsFirstChar(date.getUTCHours() % 12);
  const minutes = addZeroAsFirstChar(date.getUTCMinutes());

  return `${hours}:${minutes}`;
};

const addZeroAsFirstChar = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const getFilmDurationHM = (totalMimutes) =>{

  const hours = Math.trunc(totalMimutes / TIME_DIVISOR);
  const minutes = totalMimutes - hours * TIME_DIVISOR;

  const result = [];

  if (hours > 0) {
    result.push(`${hours}h`);
  }

  if (minutes > 0) {
    result.push(`${addZeroAsFirstChar(minutes)}m`);
  }

  return result.join(` `);
};

export const getVideoDurationHMS = (totalSeconds) =>{

  totalSeconds = Math.trunc(totalSeconds);
  const totalMimutes = Math.trunc(totalSeconds / TIME_DIVISOR);

  const hours = Math.trunc(totalSeconds / TIME_DIVISOR / TIME_DIVISOR);
  const minutes = totalMimutes - hours * TIME_DIVISOR;
  const seconds = totalSeconds - minutes * TIME_DIVISOR - hours * TIME_DIVISOR * TIME_DIVISOR;

  const result = [];

  result.push(`${hours}`);
  result.push(`${addZeroAsFirstChar(minutes)}`);
  result.push(`${addZeroAsFirstChar(seconds)}`);

  return result.join(`:`);
};

export const getReviewDateMDY = (reviewDate) =>{
  const month = reviewDate.toLocaleString(`en-US`, {month: `long`});
  const year = reviewDate.getFullYear();
  const day = reviewDate.getDate();

  return `${month} ${day}, ${year}`;
};
