![Banner Anime](./src/assets/gif/HeroHome.gif)

# AnimeVerse – Tu App de Anime Definitiva

Bienvenido a **AnimeVerse**, tu aplicación **frontend en React** para explorar animes, personajes, noticias y contenido destacado de manera interactiva. Inspirada en experiencias de sitios top de anime, con un diseño **mobile-first**, interactividad y datos organizados para una navegación fluida y atractiva.  

---

## Funcionalidades Destacadas

- **Catálogo de Animes:** Explora animes por popularidad, géneros y temporadas.  
- **Detalles de Anime:** Información completa de cada anime: sinopsis, episodios, puntuaciones y más.  
- **Galerías & Imágenes:** Visualiza posters, screenshots y escenas destacadas.  
- **Gameplay y Trailers:** Reproduce videos o clips de tus animes favoritos.  
- **Diseño Responsive:** Funciona en móvil, tablet y desktop sin problemas.  
- **Rendimiento Óptimo:** Construido con **React + Vite** para recargas instantáneas.  
- **Estilo Modular:** SCSS con metodología BEM, variables y mixins para fácil mantenimiento.  

---

## Guía de Inicio Rápido

### Requisitos Previos
- Node.js v18+  
- npm (incluido con Node.js)  

### Instalación

1️⃣ Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/animeverse-frontend.git
cd animeverse-frontend
```

2️⃣ Instala dependencias:

```bash
npm install
```

3️⃣ Inicia el servidor de desarrollo:

```bash
npm run dev
```

4️⃣ Abrir en el navegador:

```bash
http://localhost:5173
```
---

### Estructura del proyecto

```bash
PROYECTO-FINAL/
├── public/
├── src/
│   ├── assets/
│   │   ├── gif/
│   │   ├── image/
│   │   ├── video/
│   ├── components/
│   │   ├── AnimeCard/
│   │   ├── BlogCard/
│   │   ├── Search/
│   │   ├── Spinner/
│   │   ├── Theme/
│   ├── css/
│   ├── data/
│   ├── layouts/
│   │   ├── Footer/
│   │   ├── Header/
│   ├── modules/
│   │   ├── BannerAnime/
│   │   ├── BestAnimes/
│   │   ├── HeroGeneric/
│   │   ├── HeroHome/
│   │   ├── Slider/
│   ├── pages/
│   │   ├── Blog/
│   │   ├── Catalog/
│   │   ├── Home/
│   ├── routes/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Dependencias & Herramientas

| Librería          | Propósito |
|-------------------|-----------|
| react             | Construcción de componentes UI y manejo de estado |
| react-dom         | Renderizado en el DOM |
| react-router-dom  | Navegación entre páginas |

Construido para velocidad, confiabilidad y mantenimiento

---

## Consejos de Desarrollo

- Usa **React Developer Tools** para inspeccionar props y estado  
- DevTools (F12 o Cmd+Option+I) para revisar la consola y componentes  
- Usa `npm run dev` para recarga en vivo durante desarrollo  

---

## Próximos Retos y Mejoras

1️⃣ **Filtro de Animes por Género o Temporada**  
2️⃣ **Sección de Animes Destacados con “Ver Ahora”**  
3️⃣ **Búsqueda rápida de Animes por título o palabra clave**  
4️⃣ **Comentarios de usuarios y valoraciones**

---

## Buenas Prácticas

- Componentes con **responsabilidad única y reutilizables**  
- Separar lógica de datos de la UI  
- CCSS modular con **BEM y variables**
- Diseño responsive  

---

## Recursos Útiles

- [Documentación React](https://reactjs.org/)  
- [React Router Docs](https://reactrouter.com/)  
- API de animes (TMDB o similar)  
- [BEM CSS](https://en.bem.info/method/)