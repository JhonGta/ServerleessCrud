# API RESTful Serverless con AWS Lambda y DynamoDB

**Estudiante:** Jhon Guaman  
**Universidad:** Universidad de las Fuerzas Armadas ESPE  
**Fecha de entrega:** 30 de mayo de 2025

---

## 🧠 Introducción

Este proyecto consiste en la creación de una API RESTful utilizando tecnologías **serverless** como AWS Lambda, DynamoDB y API Gateway. La API permite gestionar productos (crear, leer, actualizar y eliminar) desde una interfaz web futurista.

El propósito es demostrar la capacidad de construir aplicaciones web modernas sin necesidad de administrar servidores, aprovechando la escalabilidad y eficiencia de la nube.

### Importancia del enfoque serverless:

- Escalabilidad automática sin intervención.
- Reducción de costos por uso.
- Rápido despliegue y facilidad de mantenimiento.
- Ideal para arquitecturas distribuidas modernas.

---

## ✅ Requisitos del Proyecto

### Funcionalidades implementadas:
- Agregar nuevos productos a la base de datos.
- Mostrar la lista completa de productos registrados.
- Actualizar la información de un producto.
- Eliminar productos por su ID.
- Visualización e interacción desde una interfaz web.

### Tecnologías utilizadas:
- AWS Lambda
- Amazon DynamoDB
- Amazon API Gateway
- Serverless Framework
- HTML, CSS, JavaScript (Vanilla)
- Imgur (para hosting de imágenes)

---

## ⚙️ Implementación del Proyecto

### Estructura del proyecto

- `handler.js`: Define las funciones Lambda para cada operación CRUD.
- `serverless.yml`: Define los recursos de AWS y las rutas HTTP.
- `index.html`: Página web con estilo futurista para gestionar productos.
- `README.md`: Documento de presentación y explicación del proyecto.

### Operaciones CRUD implementadas

- **GET** `/productos`: Lista todos los productos.
- **GET** `/productos/{id}`: Devuelve un producto por su ID.
- **POST** `/productos`: Crea un nuevo producto.
- **PUT** `/productos/{id}`: Actualiza un producto existente.
- **DELETE** `/productos/{id}`: Elimina un producto por ID.

---

### 💻 Capturas de pantalla

**1. Despliegue exitoso con Serverless Framework:**

Se muestra cómo las funciones fueron desplegadas y los endpoints habilitados:

![Despliegue exitoso](https://i.imgur.com/1xLhdhI.png)

---

**2. Interfaz futurista inicial (sin datos):**

Diseño limpio y moderno, listo para comenzar a registrar productos:

![Interfaz vacía](https://i.imgur.com/85HI5RX.png)

---

**3. Formulario llenado para ingreso de productos:**

Aquí se muestra cómo se completan los datos del formulario:

![Ingreso de datos](https://i.imgur.com/SACDqJY.png)

---

**4. Interfaz al actualizar un producto existente:**

El botón cambia a "Actualizar" y los campos se rellenan automáticamente:

![Actualizar producto](https://i.imgur.com/uGznq5A.png)

---

**5. Funcionalidad de eliminación en acción:**

Se activa una confirmación y luego se elimina el producto de la lista:

![Eliminar producto](https://i.imgur.com/KWltckV.png)



**6. POSTMAN- METODO POST**

Metodo POST:

![Agregar producto](https://i.imgur.com/QPhZChQ.png)


**7. POSTMAN- METODO PUT**

Metodo PUT:

![Actualizar producto](https://i.imgur.com/5uKopwf.png)


**8. POSTMAN- METODO GET**

Metodo GET:

![Ver producto](https://i.imgur.com/HDaYBg1.png)





**9. POSTMAN- METODO DELETE**

Metodo DELETE:

![Eliminar producto](https://i.imgur.com/Etx837I.png)




---

## 🚀 Instrucciones de Ejecución

### Ejecución local del frontend
1. Abre el archivo `index.html` con tu navegador preferido.
2. Verifica que las rutas de la API correspondan a tu API Gateway desplegada.

### Despliegue con Serverless Framework
1. Asegúrate de tener Node.js instalado.
2. Instala Serverless Framework:
   ```bash
   npm install -g serverless
