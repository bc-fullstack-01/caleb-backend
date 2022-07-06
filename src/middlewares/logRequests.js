const logRequest = (req, res, next) => {
  console.log(`Request from : ${req.originalUrl}​​​​​​​`);
  console.log(`Request type : ${req.method}​​​​​​​`);
  console.log(`Request params : ${req.params}​​​​​​​`);
  next();
};

module.exports = logRequest;
