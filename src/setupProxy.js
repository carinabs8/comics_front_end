const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require("morgan");

module.exports = app => {
  app.use(
    "/backend/book_covers",
    createProxyMiddleware({
      target: 'http://localhost:3001',//process.env.REACT_APP_REPORT_URL,
      changeOrigin: true,
      pathRewrite: {
        "/backend/book_covers": "/book_covers"
      }
    })
  );
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://api.jquery.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
  app.use(morgan('combined'));
};