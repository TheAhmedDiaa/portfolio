# Ahmed's Portfolio

A modern, responsive portfolio website built with **React** and **Vite**.

## Features

- **React** component-based architecture ([src/App.jsx](src/App.jsx))
- **Responsive design** with custom CSS and Tailwind ([src/index.css](src/index.css))
- **Animated gradient text** ([src/TextAnimations/GradientText/GradientText.jsx](src/TextAnimations/GradientText/GradientText.jsx))
- **Header** with navigation and mobile sidebar ([src/Header/Header.jsx](src/Header/Header.jsx))
- **About section** with profile image and loader ([src/About/About.jsx](src/About/About.jsx))
- **Skills section** with categorized skill icons ([src/Skills/Skills.jsx](src/Skills/Skills.jsx), [`Skill`](src/Skills/Skill.jsx))
- **Footer** with contact/social links ([src/Footer/Footer.jsx](src/Footer/Footer.jsx))
- **AOS** scroll animations
- **Dark/light mode** support via CSS variables
- **ESLint** for code quality ([eslint.config.js](eslint.config.js))

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

## Project Structure

```
portfolio/
  src/
    App.jsx
    index.css
    main.jsx
    Header/
    About/
    Skills/
    Footer/
    TextAnimations/
    assets/
  public/
  index.html
  package.json
  vite.config.js
  eslint.config.js
```

## Customization

- Update your profile image in [`src/assets/photo.jpg`](src/assets/photo.jpg)
- Edit skills in [`src/Skills/Skills.jsx`](src/Skills/Skills.jsx)
- Change contact/social links in [`src/Footer/Footer.jsx`](src/Footer/Footer.jsx)

## License

This project is for personal use and inspiration.