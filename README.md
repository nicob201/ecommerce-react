# E-commerce - Tecno-Store

Bienvenido al repositorio de **Tecno-Store**, una tienda online donde puedes encontrar productos tecnológicos como notebooks, teléfonos, televisores y teclados. Este proyecto fue desarrollado con **React**, utilizando **Material-UI** para la interfaz y **Firebase** para la base de datos.

## 🌐 Demo en Vivo

Puedes visitar la aplicación en el siguiente enlace:  
➡️ [Tecno-Store - Demo en Vercel](https://ecommerce-nico-boscasso.vercel.app/)

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React** (con React Router para la navegación)
- **Material-UI** (MUI v5) para el diseño
- **Sonner** para notificaciones
- **Vite** como bundler para el desarrollo

### Backend

- **Firebase** para:
  - Base de datos Firestore
  - Gestión de pedidos y productos
- **Vercel** para el despliegue

---

## ✨ Funcionalidades

1. **Página de Inicio:** Visualización de categorías de productos destacados.
2. **Lista de Productos:** Filtrado por categorías (e.j: notebooks, teléfonos).
3. **Detalle de Productos:** Información completa del producto, como precio y descripción.
4. **Carrito de Compras:**
   - Agregar y eliminar productos.
   - Ver subtotal por producto y precio total.
5. **Checkout:** Formulario para completar la compra y generar una orden con un ID único.
6. **Gestión del Stock:** Actualización automática del stock en la base de datos después de una compra.
7. **Página de Error 404:** Redirección en caso de rutas no existentes.
8. **Productos Sin Stock:** Hay un producto sin stock disponible en cada categoria para ver que no se puede agregar al carrito.

---

## 🚀 Instalación Local

Si deseas ejecutar este proyecto localmente, sigue estos pasos:

### 1. Clona el repositorio

```bash
git clone https://github.com/nicob201/ecommerce-react.git
```

### 2. Instalacion

```bash
npm install
```

### 3. Configura Firebase

Crea un proyecto en Firebase.
Copia tu configuración de Firebase y agrégala al archivo firebaseConfig.js en la carpeta src/firebaseConfig.

### 4. Ejecuta el servidor de desarrollo

```bash
npm run dev
```

El proyecto estará disponible en http://localhost:5173

## 📂 Estructura del Proyecto

```bash
src
├── components
│   ├── layout         # Navbar y Footer
│   ├── pages          # Páginas principales (Home, Cart, Checkout, etc.)
│   ├── common         # Componentes
├── context            # Context API (Cart y Productos)
├── hooks              # Custom Hooks (usePaginate)
├── routes             # Configuración de rutas
├── firebaseConfig.js  # Configuración de Firebase
└── App.jsx            # Componente principal

```

## 👤 Autor

Nicolás Boscasso

* [Github](https://github.com/nicob201)

* [LinkedIn](https://www.linkedin.com/in/nicolas-boscasso/)

¡Gracias por visitar este proyecto! Si tienes sugerencias o mejoras, no dudes en contribuir o abrir un issue.
