# CrownLoop

A modern React e-commerce site for timeless rings with Vite and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Production Build

```bash
npm run build
```

The optimized production build will be created in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and deploy

The `vercel.json` file contains the build configuration.

## Project Structure

```
src/
├── components/        # React components
│   ├── Navbar
│   ├── Hero
│   ├── Collections
│   ├── Products
│   ├── Testimonials
│   ├── Newsletter
│   └── Footer
├── hooks/            # Custom React hooks
├── App.jsx
└── main.jsx
```

## Technologies

- React 19
- Vite 6
- CSS 3
- HLS.js for video streaming

## Features

- Responsive design
- Smooth scroll animations
- Mobile sidebar navigation
- Newsletter signup
- Product showcase
- Customer testimonials
