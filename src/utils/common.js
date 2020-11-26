export const transformToCamelCase = (string) => {

  return string.replace(/([-_][a-z])/ig, (stringInCamelCase) => {

    return stringInCamelCase.toUpperCase()
      .replace(` `, ``)
      .replace(`-`, ``)
      .replace(`_`, ``);
  });
};

export const splitArrayToSegments = (array, segmentsCount)=> {
  let segmentLength = Math.ceil(array.length / segmentsCount);

  const segments = [];

  let index = 0;
  while (index < array.length) {
    segments.push(array.slice(index, segmentLength + index));
    index += segmentLength;
  }

  return segments;
};

export const capitalizeFirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
