# SOS Expats - Plataforma para conectar expatriados con profesionales locales

## Descripción del Proyecto

SOS Expats es una plataforma web diseñada para facilitar la adaptación de expatriados en España, conectándolos con profesionales locales que pueden brindarles los servicios que necesitan. El proyecto tiene dos enfoques principales:

1. **Para Profesionales**: Ofrece un directorio donde los profesionales locales pueden registrarse y ofrecer sus servicios a la comunidad de expatriados.

2. **Para Expatriados**: Proporciona un punto central donde pueden encontrar servicios adaptados a sus necesidades específicas, así como información útil para su adaptación en España.

## Estructura del Sitio

El sitio está organizado en tres niveles:

### NIVEL 1: HOME
- **Página de Inicio**: Con propuesta de valor clara y CTA dividido para profesionales y expats.

### NIVEL 2: TARGETS, RAMAS PRINCIPALES
- **RAMA A: SOY UN PROFESIONAL**: Únete al Directorio, Planes y Precios, Beneficios para Profesionales
- **RAMA B: SOY UN EXPAT**: Buscar Servicios, Información para Estudiantes, Información para Profesionales

### NIVEL 3: PÁGINAS DE DETALLE
- **Para Profesionales**: Registro al Directorio, Planes, Beneficios
- **Para Expats**: Servicios disponibles, Guías específicas
- **Páginas Transversales**: Blog, Contacto, Sobre Nosotros, Términos y Condiciones, Política de Privacidad

## Tecnologías Utilizadas

- **Next.js**: Framework de React para el frontend
- **TypeScript**: Para tipado estático y mejor desarrollo
- **Tailwind CSS**: Para el diseño de la interfaz de usuario
- **React**: Biblioteca principal para construir la interfaz de usuario

## Instrucciones de Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm install   # Instalar dependencias
npm run dev   # Iniciar servidor de desarrollo
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del Código

- `/src/app`: Contiene las rutas y páginas de la aplicación
- `/src/app/page.tsx`: Página principal (Home)
- `/src/app/profesionales`: Sección para profesionales
- `/src/app/expats`: Sección para expatriados
- `/src/components`: Componentes reutilizables (Navbar, Footer, etc.)

## Estructura de Assets

El proyecto cuenta con una estructura organizada para los activos estáticos:

- `/public/assets/images`: Imágenes del sitio organizadas por secciones
  - `/hero`: Imágenes principales para la página de inicio
  - `/profesionales`: Imágenes específicas para la sección de profesionales
  - `/expats`: Imágenes específicas para la sección de expatriados
  - `/testimonios`: Fotos de personas que dan testimonios
  - `/blog`: Imágenes para artículos del blog
  - `/servicios`: Imágenes relacionadas con los servicios ofrecidos
  - `/equipo`: Fotos del equipo para la sección "Sobre Nosotros"

- `/public/assets/logos`: Logotipos de la empresa y partners
- `/public/assets/icons`: Iconografía del sitio
  - `/social`: Iconos de redes sociales
  - `/servicios`: Iconos para las categorías de servicios
  - `/ui`: Iconos para la interfaz de usuario

## Cómo Usar los Assets

Para utilizar las imágenes en los componentes de React, utiliza la siguiente sintaxis:

```jsx
import Image from 'next/image';

// En tu componente
<Image 
  src="/assets/images/hero/main-image.jpg" 
  alt="Descripción de la imagen" 
  width={800} 
  height={600} 
/>
```

## Aspectos Técnicos

- Este proyecto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para optimizar automáticamente y cargar [Geist](https://vercel.com/font), una nueva familia de fuentes de Vercel.
- Se utiliza Tailwind CSS para un diseño responsivo y optimizado para todos los dispositivos.

## Autor

Este proyecto fue desarrollado como ejercicio final del Máster en Desarrollo Web.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

