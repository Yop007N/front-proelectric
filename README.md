# Front Proelectric

## Descripcion

Aplicacion web frontend para el sistema de control y gestion Proelectric. Interfaz de usuario moderna construida con React para administrar clientes, productos y cotizaciones (presupuestos).

## Stack Tecnologico

- **React 18** - Biblioteca de UI
- **React Router DOM** - Enrutamiento SPA
- **Bootstrap 5** - Framework CSS para diseño responsive
- **@react-pdf/renderer** - Generacion de documentos PDF
- **Create React App** - Configuracion y tooling

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

## Soporte

Para problemas o preguntas, abrir un issue en GitHub.
