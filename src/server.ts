declare function require(name: string);

import * as path from 'path';
import * as express from 'express';
let proxyMiddleware = require('http-proxy-middleware');
let env = process.env.NODE_ENV || 'development';
let staticFileDir = path.join(__dirname, (env === 'production' ? '../build' : '../dist'));

let proxy = proxyMiddleware(['/cms', '/fileadmin'], {
  target: 'https://t3dd16.typo3.org',
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/cms' : ''
  },
  proxyTable: {
    'localhost:3000': 'http://t3dd16.dev',
    't3dd16.dev:3000': 'http://t3dd16.dev'
  }
});

let app = express();
app.use(proxy);
if (env === 'development') {
  app.use('/assets', express.static(path.join(staticFileDir, '../assets')));
  app.use('/node_modules', express.static(path.join(staticFileDir, '../node_modules')));
}
app.use(express.static(staticFileDir));

app.get('*', function (req, res, next) {
  res.sendFile(path.join(staticFileDir, '/index.html'));
});

app.listen(3000, function () {
  console.log('Listen on http://localhost:3000');
});
