const TIME_DIVISOR = 60;
const MINUTES_WITH_ZERO = 10;

export const getDateAndTime = (date, withTime = true) => {
  const day = addZeroAsFirstChar(date.getDate());
  const month = addZeroAsFirstChar(date.getMonth() + 1);
  const year = date.getFullYear();
  const time = formatTime(date);

  return `${year}-${month}-${day}${withTime ? `T${time}` : ``}`;
};

export const formatTime = (date) => {
  const hoursAmount = addZeroAsFirstChar(date.getUTCHours() % 12);
  const minutesAmount = addZeroAsFirstChar(date.getUTCMinutes());

  return `${hoursAmount}:${minutesAmount}`;
};

const addZeroAsFirstChar = (value) => {
  return value < MINUTES_WITH_ZERO ? `0${value}` : String(value);
};

export const getFilmDurationHM = (totalMinutesAmount) =>{

  const hoursAmount = Math.trunc(totalMinutesAmount / TIME_DIVISOR);
  const minutesAmount = totalMinutesAmount - hoursAmount * TIME_DIVISOR;

  const results = [];

  if (hoursAmount > 0) {
    results.push(`${hoursAmount}h`);
  }

  if (minutesAmount > 0) {
    results.push(`${addZeroAsFirstChar(minutesAmount)}m`);
  }

  return results.join(` `);
};

export const getVideoDurationHMS = (totalSecondsAmount) =>{

  totalSecondsAmount = Math.trunc(totalSecondsAmount);
  const totalMimutesAmount = Math.trunc(totalSecondsAmount / TIME_DIVISOR);

  const hoursAmount = Math.trunc(totalSecondsAmount / TIME_DIVISOR / TIME_DIVISOR);
  const minutesAmount = totalMimutesAmount - hoursAmount * TIME_DIVISOR;
  const secondsAmount = totalSecondsAmount - minutesAmount * TIME_DIVISOR - hoursAmount * TIME_DIVISOR * TIME_DIVISOR;

  const results = [];

  results.push(`${hoursAmount}`);
  results.push(`${addZeroAsFirstChar(minutesAmount)}`);
  results.push(`${addZeroAsFirstChar(secondsAmount)}`);

  return results.join(`:`);
};

export const getReviewDateMDY = (reviewDate) =>{
  const month = reviewDate.toLocaleString(`en-US`, {month: `long`});
  const year = reviewDate.getFullYear();
  const day = reviewDate.getDate();

  return `${month} ${day}, ${year}`;
};
