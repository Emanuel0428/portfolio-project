import React, { Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesComponent from './components/Particles';
import { Helmet } from 'react-helmet-async';

const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Projects = React.lazy(() => import('./components/Projects'));
const Technologies = React.lazy(() => import('./components/Technologies'));
const Experience = React.lazy(() => import('./components/Experience'));
const Contact = React.lazy(() => import('./components/Contact'));

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-slate-300 dark:bg-gray-800 transition-colors duration-300 relative overflow-x-hidden">
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
        <title>Emanuel Londoño | Desarrollador Full Stack</title>
        <meta name="description" content="Portafolio de Emanuel Londoño, Desarrollador Full Stack especializado en TypeScript y arquitecturas escalables. React, Next.js, Node.js, PostgreSQL y AWS." />
        <meta property="og:title" content="Emanuel Londoño | Desarrollador Full Stack" />
        <meta property="og:description" content="Desarrollador Full Stack especializado en TypeScript y arquitecturas escalables. Explora mi experiencia y proyectos." />
        <meta property="og:image" content="/images/og-image.webp" />
      </Helmet>
      <Layout>
        <Suspense fallback={<div className="text-center py-10">Cargando...</div>}>
          <Hero />
          <Experience />
          <Projects />
          <Technologies />
          <About />
          <Contact />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;