const limitString = (string: string, limit = 15) =>
  string.length > limit ? string.substring(0, limit) + ' ...' : string;

export default limitString;
