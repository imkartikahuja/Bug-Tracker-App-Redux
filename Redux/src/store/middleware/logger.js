// const logger = (store, next, action) => {};

// currying
// N => 1
const logger = (param) => (store) => (next) => (action) => {
  console.log("Logging", param);
  next(action);
};

export default logger;
