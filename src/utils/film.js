export default (rate) => {
  switch (rate) {
    case (rate >= 0 && rate < 3):
      return `Bad`;
    case (rate >= 3 && rate < 5):
      return `Normal`;
    case (rate >= 5 && rate < 8):
      return `Good`;
    case (rate >= 8 && rate < 10):
      return `Very good`;
    case (rate === 10):
      return `Awesome`;
    default:
      throw new Error(`Unexpected rate`);
  }
};
