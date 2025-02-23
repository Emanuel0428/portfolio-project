import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 
import { useTheme } from "../context/ThemeContext";

export default function ParticlesComponent() {
  const { theme } = useTheme();
  const [init, setInit] = useState(false); // Estado para verificar si el motor está inicializado

  // Inicializa el motor de tsParticles solo una vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Carga el motor Slim
      await loadSlim(engine);
    }).then(() => {
      setInit(true); // Marca como inicializado
    });
  }, []);

  // Función que se ejecuta cuando las partículas están cargadas
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Partículas cargadas:", container);
  };

  // Configuración de las partículas usando `useMemo` para evitar recalculaciones innecesarias
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      background: {
        color: {
          value: "transparent", // Fondo transparente
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Agrega partículas al hacer clic
          },
          onHover: {
            enable: true,
            mode: "repulse", // Repulsión de partículas al pasar el ratón
          },
          resize: {
            enable: true, // Habilita la redimensión automática
          },
        },
        modes: {
          push: {
            quantity: 4, // Número de partículas agregadas al hacer clic
          },
          repulse: {
            distance: 200, // Distancia de repulsión
            duration: 0.4, // Duración de la repulsión
          },
        },
      },
      particles: {
        color: {
          value: theme === "dark" ? "#a855f7" : "#7e22ce", // Color dependiendo del tema
        },
        links: {
          color: theme === "dark" ? "#a855f7" : "#7e22ce", // Color de los enlaces
          distance: 150, // Distancia entre partículas para formar enlaces
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Las partículas rebotan en los bordes
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true, // Habilita la densidad
          },
          value: 80, // Número de partículas
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle", // Forma de las partículas
        },
        size: {
          value: { min: 1, max: 5 }, // Tamaño de las partículas
        },
      },
      detectRetina: true, // Mejora la calidad en pantallas Retina
    }),
    [theme] // Dependencia: se recalcula si cambia el tema
  );

  // Si el motor no está inicializado, no renderizamos nada
  if (!init) return <></>;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 -z-10" // Borde rojo para depuración
    />
  );
}