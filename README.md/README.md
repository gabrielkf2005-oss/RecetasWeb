# RecetasWeb 🍳

RecetasWeb es una aplicación web dinámica desarrollada con **Node.js**, **Express**, **MongoDB** y el motor de plantillas **EJS**. El sistema permite a los usuarios registrarse, iniciar sesión de forma segura y gestionar un libro de cocina digital mediante un sistema completo de CRUD (Crear, Leer, Actualizar y Eliminar) para recetas organizadas por categorías.

---

## 🚀 Características Clave

- **Autenticación Segura:** Registro e inicio de sesión de usuarios con contraseñas encriptadas mediante `bcryptjs`.
- **Gestión de Sesiones:** Manejo de sesiones activas con `express-session` para proteger las rutas del dashboard y recetas.
- **Estructura CRUD Completa:** - Visualización de recetas personalizadas en un panel central.
  - Creación de nuevas recetas especificando nombre, ingredientes, instrucciones y categoría.
  - Edición y eliminación de recetas existentes.
- **Base de Datos Relacional (Mongoose):** Relación entre los modelos de Recetas, Categorías y Usuarios en MongoDB.
- **Script de Inicialización (Seed):** Incluye un archivo para limpiar la base de datos y cargar datos de prueba automáticamente.

---

## 🛠️ Tecnologías Utilizadas

- **Backend:** Node.js, Express.js (Framework)
- **Base de Datos:** MongoDB, Mongoose (ODM)
- **Vistas/Frontend:** EJS (Embedded JavaScript templates)
- **Seguridad:** Bcryptjs, Express-session
- **Variables de Entorno:** Dotenv (Preparado para configuraciones seguras)

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu equipo:
- [Node.js](https://nodejs.org/) (Versión v14 o superior recomendado)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) corriendo localmente en el puerto de fábrica (`27017`).

---

## 🔧 Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu entorno local:

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/RecetasWeb.git](https://github.com/TU_USUARIO/RecetasWeb.git)
   cd RecetasWeb
   Instala las dependencias del proyecto:

Este comando leerá el archivo package.json e instalará todo lo necesario:

Bash
npm install
Ejecuta el script de datos de prueba (Seed):
Para poblar la base de datos con categorías iniciales ("Postres", "Comida Mexicana", "Sopas") y un usuario de prueba, ejecuta:

Bash
npm run seed
Credenciales del usuario demo creadas por el script:

Email: demo@demo.com

Contraseña: Demo1234

Inicia el servidor:

Bash
npm start

Accede a la aplicación:
Abre tu navegador web e ingresa a: http://localhost:3000 (o el puerto configurado en tu servidor).

📂 Estructura del Proyecto
Plaintext
RecetasWeb/
│
├── models/               # Modelos de esquemas de Mongoose
│   ├── Usuario.js        # Modelo para las credenciales de usuarios
│   ├── Categoria.js      # Categorías de recetas (ej. Postres, Sopas)
│   └── Receta.js         # Modelo principal de la receta con ingredientes e instrucciones
│
├── views/                # Plantillas EJS para el renderizado del frontend
│   ├── login.ejs         # Formulario de inicio de sesión
│   ├── dashboard.ejs     # Panel principal con la lista de recetas y formularios de creación
│   └── recetas.ejs       # Formulario y vista para la edición de recetas
│
├── seed.js               # Script automático para limpiar y poblar la Base de Datos
├── server.js             # Archivo principal del servidor Express y rutas de la aplicación
├── package.json          # Archivo de configuración de dependencias de Node.js
└── README.md             # Documentación del proyecto (este archivo)
🔒 Seguridad y Rutas Protegidas
La aplicación cuenta con un middleware de verificación que impide el acceso a /dashboard, /recetas/crear, /recetas/editar/:id y /recetas/eliminar/:id si el usuario no ha iniciado sesión previamente, redireccionándolo de forma automática hacia el /login.


---

### 🛠️ Pasos para agregarlo e ir a GitHub:

1. Crea el archivo y guarda el código anterior dentro de tu proyecto.
2. Recuerda cambiar `TU_USUARIO` en el enlace de clonación por tu nombre real de GitHub.
3. Aprovechando que usas **Node.js**, te sugiero fuertemente crear un archivo llamado **`.gitignore`** en la raíz (al lado de `server.js`) y escribir adentro esto:
   ```text
   node_modules/
   .e