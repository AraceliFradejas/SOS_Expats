# SOS Expats - Plataforma para conectar expatriados con profesionales locales

<div align="center">
  <img src="./public/assets/logos/logo_sos_expats.png" alt="SOS Expats Logo" width="300"/>
</div>

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

[🌐 Demo en Vivo](https://sos-expats.vercel.app) · [📄 Documentación](#documentación) · [🚀 Instalación](#instalación)

**Español** | [English](./README_EN.md)

</div>

---

## 📖 Descripción

**SOS Expats** es una plataforma web innovadora diseñada para facilitar la adaptación de expatriados en España, conectándolos con profesionales locales especializados en brindar servicios adaptados a sus necesidades específicas.

### 🎯 Objetivos Principales

- **Para Profesionales**: Directorio especializado donde pueden registrarse y ofrecer servicios a la comunidad internacional
- **Para Expatriados**: Portal centralizado para encontrar servicios especializados e información útil para su adaptación

### 🌟 Características Destacadas

- 🌍 **Sistema bilingüe** (Español/Inglés)
- 📱 **Diseño responsive** optimizado para todos los dispositivos
- 🔍 **Búsqueda inteligente** de servicios por categorías
- 📋 **Formularios interactivos** con validación en tiempo real
- 👥 **Gestión de perfiles** para profesionales y expatriados
- 🎨 **Interfaz moderna** con DaisyUI y Tailwind CSS

## 🏗️ Arquitectura del Proyecto

```
SOS_Expats/
├── 🏠 HOME (Página Principal)
├── 👨‍💼 PROFESIONALES
│   ├── Únete al Directorio
│   ├── Planes y Precios
│   └── Beneficios
├── 🌍 EXPATRIADOS
│   ├── Buscar Servicios
│   ├── Información para Estudiantes
│   └── Información para Profesionales
└── 📄 PÁGINAS TRANSVERSALES
    ├── Blog
    ├── Contacto
    ├── Sobre Nosotros
    ├── FAQ
    └── Políticas Legales
```

## 🛠️ Tecnologías Utilizadas

<div align="center">

| Frontend | Styling | Backend | Deploy |
|----------|---------|---------|--------|
| Next.js 15 | Tailwind CSS | Node.js | Vercel |
| React 19 | DaisyUI | TypeScript | Git |
| TypeScript | Framer Motion | - | GitHub |

</div>

### 🔧 Dependencias Principales

```json
{
  "next": "15.3.3",
  "react": "^19.0.0",
  "typescript": "^5",
  "tailwindcss": "^4",
  "daisyui": "^5.0.43",
  "framer-motion": "^12.18.1"
}
```

## 🚀 Instalación

### Prerrequisitos

- Node.js 18.0 o superior
- npm o yarn
- Git

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/sos-expats.git
cd sos-expats
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**

```
http://localhost:3000
```

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | 🔥 Servidor de desarrollo |
| `npm run build` | 🏗️ Build de producción |
| `npm run start` | ⚡ Servidor de producción |
| `npm run lint` | 🔍 Análisis de código |

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conectar repositorio**
   - Ir a [vercel.com](https://vercel.com)
   - Importar proyecto desde GitHub

2. **Configuración automática**
   - Detección automática de Next.js
   - Build automático con `npm run build`
   - Deploy instantáneo

### Otras Plataformas

- ✅ Netlify
- ✅ AWS Amplify  
- ✅ Railway
- ✅ Render

## 📱 Capturas de Pantalla

<div align="center">
  <img src="./docs/screenshot-home.png" alt="Página Principal" width="45%"/>
  <img src="./docs/screenshot-services.png" alt="Servicios" width="45%"/>
</div>

## 🎓 Información Académica

Este proyecto ha sido desarrollado como **Trabajo Final** de la asignatura de **Marketing Analytics** del:

**Máster en Marketing Digital y Analytics + Máster en IA Empresarial**  
🏫 **Escuela ENEB**  
📅 **Junio 2025**

### 📚 Competencias Desarrolladas

- ✅ Desarrollo web con tecnologías modernas
- ✅ Diseño UX/UI centrado en el usuario
- ✅ Implementación de analytics y métricas
- ✅ Estrategias de marketing digital
- ✅ Aplicación de IA en el desarrollo web

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crear una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit los cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Araceli Fradejas Muñoz**
- 📧 Email: araceli.fradejas@gmail.com
- 💼 LinkedIn: [araceli-fradejas-munoz-transformaciondigital](https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/)
- 🐙 GitHub: [AraceliFradejas](https://github.com/AraceliFradejas)

---

<div align="center">
  <p>⭐ ¡Dale una estrella si te gustó el proyecto! ⭐</p>
  <p>Desarrollado con ❤️ para la comunidad de expatriados</p>
</div>

---

<div align="center">
  <a href="README.md">🇪🇸 Español</a> • 
  <a href="README-EN.md">🇺🇸 English</a>
</div>

