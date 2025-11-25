# Lagunitas Landing Page - React + Tailwind

Refactorización de la landing page de Lagunitas IPA utilizando React, Tailwind CSS, GSAP y Locomotive Scroll.

## 🚀 Características

- ⚛️ **React 19** - Framework moderno de UI
- 🎨 **Tailwind CSS** - Estilos utilitarios
- ✨ **GSAP** - Animaciones avanzadas
- 🎢 **Locomotive Scroll** - Scroll suave y controlado
- 📦 **Vite** - Build tool rápido

## 📋 Requisitos

- Node.js 16+
- npm o yarn

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

## 🎯 Estructura del Proyecto

```
landing-beer/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Navegación superior y lateral
│   │   ├── Hero.jsx             # Sección hero con título principal
│   │   ├── ProductInfo.jsx      # Información del producto (ABV, IBU)
│   │   ├── Mouthfeels.jsx       # Sección de sensaciones
│   │   ├── FlavorProfile.jsx    # Perfil de sabores
│   │   ├── Availability.jsx     # Disponibilidad y formatos
│   │   └── Recipes.jsx          # Sección de recetas
│   ├── assets/
│   │   └── images/              # Todas las imágenes del proyecto
│   ├── App.jsx                  # Componente principal con animaciones
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales y Tailwind
├── tailwind.config.js           # Configuración de Tailwind
├── postcss.config.js            # Configuración de PostCSS
└── vite.config.js               # Configuración de Vite
```

## 🎨 Componentes Principales

### App.jsx
- Configuración de Locomotive Scroll
- Integración con GSAP ScrollTrigger
- Animaciones de la botella principal
- Timeline de animaciones iniciales

### Animaciones Destacadas

1. **Botella Rotante**: Rotación continua de -15° durante el scroll
2. **Escala de Botella**: Reducción a 50% en la sección de disponibilidad
3. **Aparición de Elementos**: Fade in y scale para elementos iniciales
4. **Botones Deslizantes**: Animaciones de entrada desde los lados
5. **Scroll Suave**: Integración Locomotive Scroll + GSAP

## 🎭 Tecnologías de Animación

### GSAP (GreenSock)
- Timeline para secuencias
- ScrollTrigger para animaciones basadas en scroll
- Scrub para sincronización con scroll
- Pin para elementos fijos

### Locomotive Scroll
- Scroll suave nativo
- Proxy con ScrollTrigger
- Data attributes para control

## 🎨 Estilos Personalizados

### Clases Tailwind Extendidas
- `texture-text`: Efecto de textura en texto
- `texture-text-top`: Textura alineada arriba
- `btn-lagunitas`: Botón rojo estilo Lagunitas
- `btn-lagunitas-black`: Botón negro

### Fuentes
- **Anton**: Títulos grandes
- **Dancing Script**: Texto cursivo/decorativo
- **Dosis**: Cuerpo de texto

## 🌐 Despliegue

```bash
# Build de producción
npm run build

# Preview del build
npm run preview
```

## 📝 Notas de Desarrollo

- Las imágenes deben estar en `src/assets/images/`
- Locomotive Scroll requiere `data-scroll-section` en contenedores
- ScrollTrigger usa el contenedor de Locomotive como scroller
- Todas las animaciones se limpian en el cleanup de useEffect

## 🐛 Troubleshooting

### El scroll no funciona
- Verifica que Locomotive Scroll esté inicializado
- Asegúrate de que `data-scroll-container` esté en el contenedor principal

### Las animaciones no se disparan
- Revisa los triggers de ScrollTrigger
- Confirma que el scroller apunta al contenedor de Locomotive

### Tailwind no aplica estilos
- Ejecuta `npm run dev` para recompilar
- Verifica que los paths en `tailwind.config.js` sean correctos

## 📄 Licencia

Este proyecto es una refactorización educativa de la landing page de Lagunitas.

---

Desarrollado con ❤️ usando React + Tailwind + GSAP

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
