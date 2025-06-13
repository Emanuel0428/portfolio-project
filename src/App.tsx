import React, { Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesComponent from './components/Particles';
import { Helmet } from 'react-helmet';

const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Projects = React.lazy(() => import('./components/Projects'));
const Technologies = React.lazy(() => import('./components/Technologies'));
const Experience = React.lazy(() => import('./components/Experience'));
const Contact = React.lazy(() => import('./components/Contact'));

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-white dark:bg-gray-800 transition-colors duration-300 relative">
    <div className="absolute inset-0 z-0">
      <ParticlesComponent />
    </div>
    <div className="relative z-10">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Emanuel Londoño | Desarrollador Web</title>
        <meta name="description" content="Portafolio personal de Emanuel Londoño, especializado en React, TypeScript y Tailwind CSS." />
        <meta property="og:title" content="Emanuel Londoño - Portafolio" />
        <meta property="og:description" content="Explora mis proyectos y habilidades como desarrollador web." />
        <meta property="og:image" content="/images/og-image.webp" />
      </Helmet>
      <Layout>
        <Suspense fallback={<div className="text-center py-10">Cargando...</div>}>
          <Hero />
          <Projects />
          <About />
          <Technologies />
          <Experience />
          <Contact />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;