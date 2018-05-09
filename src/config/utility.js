const formatStr = (str, ...args) => {
  return str.replace(/{(\d+)}/g, (match, number) => {
    if (typeof args[number] != "undefined") {
      return args[number];
    }
    return match;
  });
};

export { formatStr };
