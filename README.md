Proyecto 6: Aplicación Backend con Autenticación


Este proyecto es parte del Bootcamp Fullstack - COHORT 14, 2024 y consiste en una API backend que maneja autenticación de usuarios y operaciones CRUD de productos.

Tecnologías Utilizadas
Node.js y Express para el servidor
MongoDB y Mongoose para la base de datos
JWT para autenticación
Swagger para la documentación
Render.com para el despliegue
Endpoints Principales
Usuario
POST /api/user/register - Registro de usuario
POST /api/user/login - Inicio de sesión
GET /api/user/verifytoken - Verificar token
PUT /api/user/update - Actualizar usuario
Producto
POST /api/product/create - Crear producto
GET /api/product/readall - Leer todos los productos
GET /api/product/readone/:id - Leer producto por ID
PUT /api/product/update/:id - Actualizar producto
DELETE /api/product/delete/:id - Eliminar producto
Instalación
Clona el repositorio:
bash
Copiar código
git clone https://github.com/carlosfariasgaldames/Proyecto-6-aplicacion-backend.git
cd Proyecto-6-aplicacion-backend
Instala las dependencias:
bash
Copiar código
npm install
Crea un archivo .env y configura las variables:
plaintext
Copiar código
MONGO_URI=tu_uri_de_mongodb_atlas
JWT_SECRET=tu_secreto_jwt
PORT=5000
Inicia el servidor:
bash
Copiar código
npx nodemon server.js
Documentación
La documentación de la API está disponible en Swagger.

Autor
Carlos Farias Galdames
GitHub

