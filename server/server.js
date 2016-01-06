var path = require('path');
var express = require('express');
var proxyMiddleware = require('http-proxy-middleware');
var env = process.env.NODE_ENV || 'development';
var staticFileDir = path.join(__dirname, (env === 'production' ? '../build' : '..'));


if (env === 'development') {
}

if (env === 'production') {

}

var proxy = proxyMiddleware(['/cms', '/fileadmin'], {
  target: 'https://api-t3dd16.typo3.org',
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    "^/cms" : ''
  },
  proxyTable: {
    'localhost:3000': 'http://t3dd16.dev',
    't3dd16.dev:3000': 'http://t3dd16.dev'
  }
});

var app = express();
app.use(proxy);
app.use('/node_modules', express.static(path.join(staticFileDir, '/node_modules')));
app.use('/app', express.static(path.join(staticFileDir, '/app')));
app.use('/assets', express.static(path.join(staticFileDir, '/assets')));


app.get('*', function (req, res, next) {
  res.sendFile(path.join(staticFileDir, '/index.ng2.html'));
});

app.listen(3000, function () {
  console.log('Listen on http://localhost:3000');
});
