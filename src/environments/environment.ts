// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseServerUrl:'http://localhost:8081/',
  serverUrl: 'http://localhost:8081/game-backend',
  webSocketServerUrl: 'http://localhost:8080/game-server',
  clientUrl: 'http://appuhafeez.github.io/tik-tok-toe-fe/',
  enableIvy:false,
  gitHubUrl:'https://github.com/appuhafeez',
  instagramUrl:'https://www.instagram.com/appu_hafeez/',
  linkedInUrl:'https://www.linkedin.com/in/hafeez-shaik-540890122/',
  twitterUrl: 'https://twitter.com/appuhafeez',
  loginServerUrl:'http://localhost:8081/oauth-server',
  securedEndpoint:'http://localhost:8081/game-backend',
  securedEndpoint2:'http://localhost:8081/game-history',
  historyUrl:'http://localhost:8081/game-history'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
