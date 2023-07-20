# Dashboard

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/yourusername/dashboard)
[![License](https://img.shields.io/badge/license-Private-red.svg)](https://github.com/yourusername/dashboard/blob/main/LICENSE)

## Descripcion

Dashboard es una aplicación web creada con Vue.js y Vuetify para crear una interfaz de panel de control dinámica y con capacidad de respuesta.
## Instalacion

Antes de ejecutar la aplicación, asegúrate de que tienes Node.js y npm instalados.
nodejs:v18.16.1
npm: 9.5.1
1. Clone this repository:

```bash
git clone https://github.com/yourusername/dashboard.git
```

2. Navigate to the project directory:

```bash
cd dashboard
```

3. Install the dependencies:

```bash
npm install
```

## Usage

### Development Server

To run the development server, use the following command:

```bash
npm run serve
```

The development server will be accessible at `http://localhost:8080`.

### Building the Project

To build the project for production, use the following command:

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Linting

To run ESLint for linting the project, use the following command:

```bash
npm run lint
```

## Dependencies

- core-js: ^3.8.3
- vue: ^2.6.14
- vue-router: ^3.6.5
- vuetify: ^2.6.0

## Dev Dependencies

- @babel/core: ^7.12.16
- @babel/eslint-parser: ^7.12.16
- @vue/cli-plugin-babel: ~5.0.0
- @vue/cli-plugin-eslint: ~5.0.0
- @vue/cli-service: ~5.0.0
- eslint: ^7.32.0
- eslint-plugin-vue: ^8.0.3
- sass: ~1.32.0
- sass-loader: ^10.0.0
- vue-cli-plugin-vuetify: ~2.5.8
- vue-template-compiler: ^2.6.14
- vuetify-loader: ^1.7.0

## ESLint Configuration

The project uses ESLint with the following configuration:

```json
{
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "@babel/eslint-parser"
  },
  "rules": {}
}
```

## Browserslist

The project targets the following browsers:

- > 1%
- last 2 versions
- not dead

## License

This project is private and not open source.

## Author

Your Name
