/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material'
};

/** User packages configuration. */
const packages: any = {};

const materialPkgs: string[] = [
  'core',
  'sidenav',
  'button',
  'input'
];

materialPkgs.forEach((pkg) => {
  packages[ `@angular2-material/${pkg}` ] = {main: `${pkg}.js`};
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/model',
  'app/layout',
  'app/layout/header',
  'app/layout/footer',
  'app/layout/loading',
  'app/layout/navigation',
  'app/layout/sidenav-content',
  'app/page',
  'app/content-link',
  'app/session',
  'app/session/session-create',
  'app/session/session-list',
  'app/session/session-detail',
  'app/session/session-item',
  'app/session/session-speakers',
  'app/login',
  'app/session/speaker-image',
  'app/material',
  'app/material/textarea',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
