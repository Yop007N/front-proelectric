# ProElectric Frontend

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.14-CA4245?logo=react-router&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Aplicación web frontend moderna para el sistema de control y gestión ProElectric. Interfaz de usuario responsive construida con React que proporciona herramientas completas para administrar clientes, productos y generar cotizaciones profesionales en PDF.

## Descripción

Frontend empresarial desarrollado con React 18 que implementa una Single Page Application (SPA) para la gestión comercial de ProElectric. La aplicación ofrece una interfaz intuitiva y responsive para el manejo de clientes, catálogo de productos y sistema de cotizaciones con generación automática de documentos PDF profesionales.

El sistema está diseñado con componentes reutilizables, navegación fluida y formularios validados, proporcionando una experiencia de usuario moderna y eficiente para operaciones comerciales diarias.

## Stack Tecnológico

### Frontend
- **React 18.2** - Biblioteca de UI con hooks modernos
- **React Router DOM 6.14** - Enrutamiento declarativo para SPA
- **Bootstrap 5.3** - Framework CSS responsive
- **@react-pdf/renderer 3.1** - Generación de documentos PDF
- **Create React App 5.0** - Tooling y configuración

### Testing
- **Jest** - Framework de testing
- **React Testing Library** - Testing de componentes
- **Web Vitals** - Métricas de rendimiento

## Caracteristicas

- Gestion de clientes con formularios validados
- Catalogo de productos
- Sistema de cotizaciones
- Generacion de documentos PDF para presupuestos
- Interfaz responsive con Bootstrap
- Navegacion fluida con React Router

## Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables
│   ├── ClientForm.js
│   ├── ProductForm.js
│   └── QuoteForm.js
├── pages/             # Paginas principales
│   ├── ClientsPage.js
│   ├── ProductsPage.js
│   └── QuotesPage.js
├── services/          # Servicios de API
├── App.js            # Componente principal con rutas
└── index.js          # Punto de entrada
```

## Requisitos Previos

- Node.js 16+
- npm o yarn
- Backend de Proelectris corriendo (para funcionalidad completa)

## Instalacion

1. Clonar el repositorio:
```bash
git clone https://github.com/Yop007N/front-proelectric.git
cd front-proelectric
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar API endpoint (si es necesario):
Editar `src/services/` para apuntar al backend correcto.

## Uso

### Modo Desarrollo

```bash
npm start
```

La aplicacion se abrira en [http://localhost:3000](http://localhost:3000).

- Hot reload habilitado
- Errores de lint visibles en consola
- Recarga automatica al guardar cambios

### Build de Produccion

```bash
npm run build
```

Genera una build optimizada en la carpeta `build/`:
- Minificacion de codigo
- Optimizacion de assets
- Hashes en nombres de archivos para cache
- Bundle listo para despliegue

### Tests

```bash
npm test
```

Ejecuta tests en modo interactivo con Jest.

## Funcionalidades Principales

### Gestion de Clientes
- Crear, editar y listar clientes
- Formularios validados
- Informacion de contacto completa

### Gestion de Productos
- Catalogo de productos
- Codigo, descripcion y precios
- Formularios de alta/edicion

### Sistema de Cotizaciones
- Crear presupuestos para clientes
- Seleccion de productos
- Generacion de PDF con @react-pdf/renderer
- Calculo automatico de totales

## Tecnologias Destacadas

### Bootstrap 5
Diseño responsive y componentes pre-estilizados:
- Grids responsivos
- Formularios estilizados
- Componentes modales
- Sistema de navegacion

### React Router DOM
Navegacion SPA sin recargas:
- Rutas definidas en App.js
- Navegacion programatica
- Lazy loading (si configurado)

### React PDF
Generacion de documentos profesionales:
- PDFs client-side
- Estilos personalizables
- Descarga directa en navegador

## Scripts Disponibles

| Comando | Descripcion |
|---------|-------------|
| `npm start` | Inicia servidor de desarrollo |
| `npm test` | Ejecuta suite de tests |
| `npm run build` | Build optimizado para produccion |
| `npm run eject` | Expone configuracion (no reversible) |

## Despliegue

### Opciones de Hosting

**Vercel** (Recomendado):
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm run build
# Subir carpeta build/ a Netlify
```

**GitHub Pages**:
```bash
npm install --save-dev gh-pages
# Agregar a package.json: "homepage": "https://usuario.github.io/repo"
npm run deploy
```

**Hosting tradicional**:
- Compilar con `npm run build`
- Subir contenido de `build/` a servidor web
- Configurar servidor para SPA (todas las rutas → index.html)

## Configuracion del Servidor

Para SPA con React Router, configurar servidor para redirigir todas las rutas a index.html:

**Nginx**:
```nginx
location / {
  try_files $uri /index.html;
}
```

**Apache** (.htaccess):
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

## Variables de Entorno

Crear archivo `.env` para configuracion:
```env
REACT_APP_API_URL=http://localhost:3000
REACT_APP_ENV=development
```

Acceder en codigo:
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

## Desarrollo

### Agregar Nuevo Componente
```bash
# Crear archivo en src/components/
touch src/components/NuevoComponente.js
```

### Agregar Nueva Pagina
```bash
# Crear archivo en src/pages/
touch src/pages/NuevaPagina.js

# Agregar ruta en App.js
```

### Estilos
- Estilos globales: `src/index.css` y `src/App.css`
- Estilos de componente: CSS modules o styled-components
- Bootstrap: Ya incluido globalmente

## Integracion con Backend

Asegurar que el backend Proelectris este corriendo y configurar CORS apropiadamente:

Backend debe permitir:
```javascript
app.use(cors({
  origin: 'http://localhost:3000' // URL del frontend
}));
```

## Troubleshooting

**Error de CORS**:
- Verificar configuracion CORS en backend
- Asegurar que API URL sea correcta

**Build falla**:
- Limpiar cache: `rm -rf node_modules package-lock.json`
- Reinstalar: `npm install`

**Puerto ya en uso**:
- Cambiar puerto: `PORT=3001 npm start`

## Recursos

- [Documentacion React](https://react.dev)
- [Create React App](https://create-react-app.dev)
- [Bootstrap 5](https://getbootstrap.com)
- [React Router](https://reactrouter.com)
- [React PDF](https://react-pdf.org)

## Contribuciones

Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit cambios (`git commit -m 'Agregar caracteristica'`)
4. Push a rama (`git push origin feature/NuevaCaracteristica`)
5. Abrir Pull Request

## Licencia

MIT License - ver archivo LICENSE para detalles

## Autor

**Enrique Junior Bobadilla Ruiz Díaz**
Full Stack Developer - Backend Specialist

- LinkedIn: [enriquejbrdyop007n](https://www.linkedin.com/in/enriquejbrdyop007n)
- Email: enribobadill96@gmail.com
- Ubicación: Ciudad del Este, Paraguay

## Soporte

Para problemas o preguntas, abrir un issue en GitHub.

---

Desarrollado con React, Bootstrap y React PDF para sistemas de gestión comercial.
