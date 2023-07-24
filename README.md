# Dashboard vuejs y vuetify

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/yourusername/dashboard)
[![License](https://img.shields.io/badge/license-public-red.svg)](https://github.com/yourusername/dashboard/blob/main/LICENSE)

## Descripcion

Dashboard es una aplicación web creada con Vue.js y Vuetify para crear una interfaz de panel de control dinámica y con capacidad de respuesta.

## Instalacion

Antes de ejecutar la aplicación, asegúrate de que tienes las siguientes version de de nodejs:v18.16.1
npm: 9.5.1
1. Clonar el repositorio:

```bash
git clone git@github.com:BalmoreRamirez/template-dashboard-vuejs.git
```

2. Navegue hasta el directorio del proyecto:

```bash
cd dashboard
```

3. Instalar las dependencias:

```bash
npm install
```

## Usage

### Development Server

Para ejecutar el servidor de desarrollo, utilice el siguiente comando:
```bash
npm run serve
```

El servidor de desarrollo estará accesible en `http://localhost:8080`.

### Building el Projecto

Para compilar el proyecto para producción, utilice el siguiente comando:
```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Linting

To run ESLint for linting the project, use the following command:

```bash
npm run lint
```

## Dependencias

- core-js: ^3.8.3
- vue: ^2.6.14
- vue-router: ^3.6.5
- vuetify: ^2.6.0

## Dev Dependencias

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

## ESLint Configuracion

El proyecto utiliza ESLint con la siguiente configuración:
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
## Licencia

Este proyecto es publico de código abierto.
## Autor

Balmore Ramirez
