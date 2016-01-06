import * as path from 'path';
import * as express from 'express';
import {ng2engine} from 'angular2-universal-preview';

let env = process.env.NODE_ENV || 'development';
let staticFileDir = path.join(__dirname, (env === 'production' ? '../build' : '../'));

import {App} from './../src/app';

let app = express();
app.engine('.ng2.html', ng2engine);
app.set('views', staticFileDir);
app.set('view engine', 'ng2.html');
app.use('/app', express.static(path.join(staticFileDir, 'app')));
app.use('/assets', express.static(path.join(staticFileDir, 'assets')));

app.use('/', (req, res) => {
  res.render('index', {App});
});

app.listen(3000, function () {
  console.log('Listen on http://localhost:3000');
});
