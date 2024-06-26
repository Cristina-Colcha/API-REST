

# Proyecto REST API en JavaScript

Este proyecto implementa una REST API básica utilizando JavaScript y Express.js para la creación de un sistema de gestión de clientes. Incluye tanto el servidor como un cliente mínimo para interactuar con la API.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

API-REST/
│
├── server/              # Carpeta del servidor
│   ├── index.js         # Archivo principal del servidor
│   ├── controllers/     # Controladores para manejar peticiones
│   ├── models/          # Modelos de datos
│   ├── routes/          # Rutas de la API
│   ├── services/        # Lógica de negocio
│   └── swagger/         # Configuración de Swagger
│       └── swagger.yaml # Archivo de especificación OpenAPI (Swagger)
│
├── client/              # Carpeta del cliente (opcional si no hay cliente)
│   ├── index.html       # Página de inicio del cliente
│   ├── script.js        # Scripts del cliente
│   └── style.css        # Estilos del cliente (opcional)
│
├── README.md            # Documentación del proyecto (en inglés)
└── package.json         # Archivo de configuración de Node.js



## Funcionalidades Implementadas

- **Operaciones CRUD**: Permite la gestión básica de clientes (Crear, Leer, Actualizar, Eliminar).
- **API RESTful**: Implementación de endpoints REST para interactuar con los clientes.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express.js**: Framework web para Node.js utilizado para la creación de la API REST.
- **Fetch API**: Utilizado en el cliente para realizar peticiones HTTP al servidor.

## Instalación y Ejecución

1. **Clonar el repositorio**:

   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-proyecto>

## Instalación

1. Clona este repositorio.
2. Instala las dependencias usando `npm install`.

## Uso

- Ejecuta `node server/index.js` para iniciar el servidor.
- Puedes acceder al API a través de `http://localhost:3000/api-docs`.

## Endpoints

- `GET /customers`: Obtener todos los clientes.
- `GET /customers/:id`: Obtener un cliente por ID.
- `POST /customers`: Crear un nuevo cliente.
- `PUT /customers/:id`: Actualizar un cliente por ID.
- `DELETE /customers/:id`: Eliminar un cliente por ID.

## Ejemplos

### GET /customers

Response:
```json
{
  "message": "Obtener todos los clientes"
}

# Contribuciones


Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor abre un issue para discutir los cambios propuestos.

Autor
Nombre: [Cristina Colcha, Edwin Proaño]
GitHub: https://github.com/Cristina-Colcha/API-REST.git

### Paso 4: Ejecución del API

Para ejecutar el API, asegúrate de que estás en la carpeta del proyecto y ejecuta:

```bash
npm start
