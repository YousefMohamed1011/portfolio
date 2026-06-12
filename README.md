# Front-End Developer Portfolio

A modern, responsive, and animated portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Dark Theme**: Elegant dark color scheme with accent colors
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations throughout
- **Modern UI**: Clean, minimal, and professional design
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Built with Vite for fast development and production builds

## Sections

1. **Hero**: Profile introduction with animated background
2. **About**: Personal bio with highlights and stats
3. **Skills**: Technical skills with progress bars and tech stack
4. **Projects**: Filterable project showcase with GitHub links
5. **Experience**: Timeline-style work history
6. **Education**: Academic background and certifications
7. **Contact**: Working form with validation

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionHeading.jsx
│   │   └── AnimatedCard.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Customization

### Personal Information

Update the following files with your personal information:

- `src/sections/Hero.jsx` - Name, title, description, social links
- `src/sections/About.jsx` - Bio text and stats
- `src/sections/Skills.jsx` - Technical skills and proficiency levels
- `src/sections/Projects.jsx` - Project details, images, and links
- `src/sections/Experience.jsx` - Work history
- `src/sections/Education.jsx` - Academic background
- `src/sections/Contact.jsx` - Contact information

### Colors & Theme

Modify the color scheme in `tailwind.config.js`:

```js
colors: {
  dark: { ... },    // Background colors
  accent: { ... },  // Primary accent colors
  text: { ... },    // Text colors
}
```

### Images

Replace placeholder images in each section with your own:
- Hero profile image
- Project screenshots
- About section images

## Deployment

### Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` folder to Netlify

### GitHub Pages

1. Update `vite.config.js` with base path:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',
   })
   ```
2. Build and deploy using GitHub Actions or manual deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this portfolio template for your own projects.

## Credits

- Icons: [Lucide React](https://lucide.dev/)
- Fonts: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- Images: [Unsplash](https://unsplash.com/)
