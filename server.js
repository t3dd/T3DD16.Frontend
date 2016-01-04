var express = require('express');
var proxyMiddleware = require('http-proxy-middleware');
var env = process.env.NODE_ENV || 'development';
var staticFileDir = __dirname + (env === 'production' ? '/build' : '');


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
app.use('/node_modules', express.static(staticFileDir + '/node_modules'));
app.use('/app', express.static(staticFileDir + '/app'));
app.use('/assets', express.static(staticFileDir + '/assets'));


app.get('*', function (req, res, next) {
  res.sendFile(staticFileDir + '/index.html')
});

app.listen(3000, function () {
  console.log('Listen on http://localhost:3000');
});
