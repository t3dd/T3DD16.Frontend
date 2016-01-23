declare function require(name: string);

import * as path from 'path';
import * as express from 'express';

// Angular 2
import {ng2engine, REQUEST_URL, SERVER_LOCATION_PROVIDERS, HTTP_PROVIDERS} from 'angular2-universal-preview';
import {provide, enableProdMode} from 'angular2/core';
import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router';
import {AppStates} from './app/providers/appStates';
import {CmsService} from './app/providers/cmsService';
import {HttpCache} from './app/providers/httpCache';
import {App} from './app/app';
let env = process.env.NODE_ENV || 'development';
let root = path.join(__dirname, (env === 'production' ? '../build' : '..'));
let app = express();

enableProdMode();

app.engine('.html', ng2engine);
app.set('views', __dirname);
app.set('view engine', 'html');

app.use('/app', express.static(path.join(root, 'dist', 'app')));
app.use('/assets', express.static(path.join(root, 'assets')));
app.use(express.static(root, {index: false}));

// ngApp
function ngApp(req, res) {
  console.log(req.originalUrl);
  res.render('index', {
    App,
    providers: [
      provide(APP_BASE_HREF, {useValue: '/'}),
      provide(REQUEST_URL, {useValue: req.originalUrl || '/'}),
      ROUTER_PROVIDERS,
      SERVER_LOCATION_PROVIDERS,
      HTTP_PROVIDERS,
      AppStates,
      CmsService,
      HttpCache
    ],
    preboot: false
  });
}

app.use('*', ngApp);

app.listen(3000, function () {
  console.log('Listen on http://localhost:3000');
});
