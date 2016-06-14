# webapp-es2015-boilerplate
ES2015 Web Application boilerplate

## Dependencies
- [Babel](https://github.com/babel/babel-loader) (ES2015 transpiler)
- [Webpack](https://github.com/webpack/webpack) (Module bundler)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (Web server with Hot Module Replacement for development usage)
- [eslint](https://github.com/eslint/eslint) and [csslint](https://github.com/CSSLint/csslint) (Source code linters)

## Usage
```
npm install
npm start
```
Go to http://localhost:8080

## Linting
```
npm run lint      # All
npm run lint:js   # Javascript
npm run lint:css  # CSS
```

## Build
```
npm run build
```
It builds full project to `dist` folder. Then you can copy this folder content to use it with your favourite static web server (Apache, Nginx, etc.).
