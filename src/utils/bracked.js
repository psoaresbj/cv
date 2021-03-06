export const bracked = (str, vars = {}) => {
  if (!vars || !str) {
      return str;
  }

  return Object.keys(vars).reduce((result, key) => {
      if (!vars[key]) {
          return result;
      }

      const replacePattern = new RegExp(`{({|%)( |)${key}( |)(%|})}`);

      return result.replace(replacePattern, vars[key]);
  }, str);
};
