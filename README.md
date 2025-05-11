# NodeJS-Blog-Backend

Este proyecto es un backend para un blog desarrollado con Node.js. Proporciona una API RESTful para gestionar publicaciones, usuarios y comentarios.

## Características

- CRUD de publicaciones de blog
- Gestión de usuarios y autenticación
- Manejo de comentarios
- API segura con JWT
- Uso de base de datos (por ejemplo, MongoDB o PostgreSQL)

## Requisitos

- Node.js (v14 o superior)
- npm o yarn
- Base de datos (MongoDB/PostgreSQL)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/NodeJS-Blog-Backend.git
   cd NodeJS-Blog-Backend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Configura las variables de entorno en un archivo `.env`:
   ```
   PORT=3000
   DB_URI=tu_cadena_de_conexion
   JWT_SECRET=tu_secreto
   ```

4. Inicia el servidor:
   ```bash
   npm start
   # o
   yarn start
   ```

## Uso

La API estará disponible en `http://localhost:3000`. Puedes probar los endpoints usando Postman o cualquier cliente HTTP.

## Scripts útiles

- `npm start` — Inicia el servidor en modo producción
- `node --watch index.js` — Inicia el servidor en modo desarrollo con recarga automática

## Estructura del proyecto

```
/src
  /helpers
  /middlewares
  /posts
  /public
```

## Licencia

MIT