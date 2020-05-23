const searchRouter = require('./search.js');

module.exports = (app) => {
  app.use('/search', searchRouter);
  
}