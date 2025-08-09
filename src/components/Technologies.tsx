import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  Brain,
  Cloud,
  Star
} from 'lucide-react';

// Technology Icons Component
const TechIcon = ({ name, className = "w-8 h-8" }: { name: string; className?: string }) => {
  const icons: { [key: string]: JSX.Element } = {
    'React': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
      </svg>
    ),
    'TypeScript': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.213.776.213 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
    'JavaScript': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    ),
    'Node.js': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.26-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
      </svg>
    ),
    'Python': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    ),
    'HTML/CSS': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
    'Tailwind CSS': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    ),
    'Git': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    ),
    'Express': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-7.894-2.75a6.614 6.614 0 01-.913-3.858v.011zm1.024-.872h9.132c.21-2.51-1.683-4.582-4.063-4.44-2.693.23-4.57 2.42-5.069 4.44z"/>
      </svg>
    ),
    'PostgreSQL': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.111 7.793c-.419-.618-1.26-1.163-2.281-1.163-.22 0-.444.022-.662.065-.49-1.703-1.48-3.206-2.936-4.465C15.31.686 13.235.048 10.97.048 8.704.048 6.63.686 4.708 2.23 3.252 3.49 2.262 4.993 1.772 6.695c-.218-.043-.442-.065-.662-.065C.89 6.63.049 7.175-.37 7.793c-.467.688-.467 1.5 0 2.188.419.618 1.26 1.163 2.281 1.163.22 0 .444-.022.662-.065.49 1.703 1.48 3.206 2.936 4.465 1.922 1.544 3.996 2.182 6.262 2.182s4.34-.638 6.262-2.182c1.456-1.26 2.446-2.762 2.936-4.465.218.043.442.065.662.065 1.021 0 1.862-.545 2.281-1.163.467-.688.467-1.5 0-2.188zM1.911 9.144c-.267-.395-.267-.893 0-1.288.267-.395.718-.674 1.208-.674.49 0 .94.28 1.207.674.267.395.267.893 0 1.288-.267.395-.717.674-1.207.674-.49 0-.94-.28-1.208-.674zm18.358 3.83C18.42 16.01 15.21 17.526 11 17.526S3.58 16.01 1.731 12.974c-.05-.082-.1-.164-.149-.247-.44-1.473-.44-3.068 0-4.54.05-.084.099-.166.149-.248C3.58 4.906 6.79 3.39 11 3.39s7.42 1.516 9.269 4.552c.05.082.1.164.149.247.44 1.473.44 3.068 0 4.54-.05.084-.099.166-.149.248z"/>
      </svg>
    ),
    'SQLite': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.93 8.93 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.422 1.093s.017.125-.13.039c-.271-.157-.573-.35-.813-.52-.24-.17-.448-.278-.592-.278-.415 0-.863.334-1.226.69-.364.357-.63.73-.63 1.104 0 .374.256.654.614.924.358.27.83.53 1.297.73.467.2.93.34 1.226.34.296 0 .422-.14.422-.423V12.84c.02-.017.045-.03.066-.047.053-.044.105-.088.158-.133 1.386-1.171 3.129-2.657 5.128-3.863 1-.603 2.022-1.11 3.055-1.382.516-.136 1.04-.2 1.57-.152.264.024.532.08.8.18.268.1.538.245.803.442.53.395.85.916.85 1.538 0 .622-.32 1.143-.85 1.538-.265.197-.535.343-.803.442-.268.1-.536.156-.8.18a5.84 5.84 0 0 1-1.57-.152c-1.033-.272-2.054-.78-3.055-1.382-2-1.206-3.742-2.692-5.128-3.863-.053-.045-.105-.089-.158-.133-.02-.017-.045-.03-.066-.047v1.004c0 .284-.126.424-.422.424-.296 0-.759-.14-1.226-.34a8.403 8.403 0 0 1-1.297-.73c-.358-.27-.614-.55-.614-.924 0-.373.266-.747.63-1.104.363-.356.81-.69 1.226-.69.144 0 .352.109.592.278.24.17.542.363.813.52.147.086.13-.039.13-.039s-.185-.613-.422-1.093c.608-3.164 2.565-7.307 4.674-9.544.19-.202.367-.38.547-.535C19.398-.029 20.646-.399 21.678.52z"/>
      </svg>
    ),
    'FastAPI': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.627 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.185L11.376 21.62z"/>
      </svg>
    ),
    'Vercel': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>
    ),
    'Supabase': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
      </svg>
    ),
    'Machine Learning': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L9.5 8.5 1 6l7.5 2.5L12 0zm0 24l2.5-8.5L23 18l-7.5-2.5L12 24zm-6-6L0 12l6-6-1.5 6L6 18zm12 0L24 12l-6-6 1.5 6L18 18z"/>
      </svg>
    ),
    'NLP': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 3h20v2H2V3zm0 4h20v2H2V7zm0 4h20v2H2v-2zm0 4h20v2H2v-2zm0 4h20v2H2v-2z"/>
      </svg>
    ),
    'C#': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12a5.55 5.55 0 011.985.38 4.65 4.65 0 011.585 1.06 4.82 4.82 0 011.05 1.615 5.3 5.3 0 01.38 1.985 5.417 5.417 0 01-.38 2.015 4.95 4.95 0 01-1.05 1.645 4.76 4.76 0 01-1.585 1.08 5.088 5.088 0 01-1.985.4 5.12 5.12 0 01-2-.4 4.88 4.88 0 01-1.6-1.08 5.043 5.043 0 01-1.08-1.645 5.17 5.17 0 01-.4-2.015 5.3 5.3 0 01.4-1.985 4.82 4.82 0 011.08-1.615A4.65 4.65 0 017.41 7.5a5.55 5.55 0 012.016-.38zm7.974 2.64h.64v.61h.64v.64h-.64v.61h-.64v-.61h-.64v-.64h.64v-.61zm-7.974.72a2.03 2.03 0 00-.765.15 1.89 1.89 0 00-.63.44 2.18 2.18 0 00-.43.675 2.39 2.39 0 00-.16.84 2.39 2.39 0 00.16.84 2.18 2.18 0 00.43.675 1.89 1.89 0 00.63.44 2.03 2.03 0 00.765.15 2.03 2.03 0 00.765-.15 1.89 1.89 0 00.63-.44 2.18 2.18 0 00.43-.675 2.39 2.39 0 00.16-.84 2.39 2.39 0 00-.16-.84 2.18 2.18 0 00-.43-.675 1.89 1.89 0 00-.63-.44 2.03 2.03 0 00-.765-.15zm8.254-.48h.64v.61h.64v.64h-.64v.61h-.64v-.61h-.64v-.64h.64v-.61z"/>
      </svg>
    ),
    'Java': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
      </svg>
    )
  };

  return icons[name] || (
    <div className={`${className} bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
      {name.charAt(0)}
    </div>
  );
};

export default function Technologies() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const technologies = [
    // Frontend
    {
      name: 'React',
      category: 'frontend',
      level: 90,
      color: 'from-blue-400 to-cyan-500',
      description: 'Framework para desarrollo de interfaces modernas y reactivas',
      projects: ['FlowForgeAI', 'Outside Project', 'WebApp Restaurante']
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      level: 85,
      color: 'from-blue-600 to-blue-700',
      description: 'JavaScript con tipado estático para código más robusto',
      projects: ['Todos los proyectos principales']
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      level: 88,
      color: 'from-yellow-400 to-yellow-600',
      description: 'Lenguaje base para desarrollo web dinámico',
      projects: ['All-in-One Fitness App', 'Backend APIs']
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      level: 92,
      color: 'from-cyan-400 to-teal-500',
      description: 'Framework CSS utility-first para diseños modernos',
      projects: ['Outside Project', 'Mercados Mi Punto', 'Portfolio']
    },
    {
      name: 'HTML/CSS',
      category: 'frontend',
      level: 95,
      color: 'from-orange-400 to-red-500',
      description: 'Fundamentos de estructuración y estilización web',
      projects: ['Todos los proyectos web']
    },

    // Backend
    {
      name: 'Node.js',
      category: 'backend',
      level: 85,
      color: 'from-green-400 to-green-600',
      description: 'Runtime de JavaScript para desarrollo de servidores',
      projects: ['FlowForgeAI', 'Outside Project', 'Mercados Mi Punto']
    },
    {
      name: 'Express',
      category: 'backend',
      level: 82,
      color: 'from-gray-600 to-gray-800',
      description: 'Framework web minimalista para Node.js',
      projects: ['Mercados Mi Punto', 'WebApp Restaurante']
    },
    {
      name: 'Python',
      category: 'backend',
      level: 75,
      color: 'from-blue-500 to-yellow-500',
      description: 'Lenguaje versátil para backend y procesamiento de datos',
      projects: ['Translation API', 'Match Cut']
    },
    {
      name: 'FastAPI',
      category: 'backend',
      level: 70,
      color: 'from-teal-400 to-green-500',
      description: 'Framework moderno para construir APIs con Python',
      projects: ['Translation API']
    },
    {
      name: 'SQLite',
      category: 'backend',
      level: 78,
      color: 'from-blue-400 to-blue-600',
      description: 'Base de datos ligera y confiable',
      projects: ['Mercados Mi Punto']
    },
    {
      name: 'PostgreSQL',
      category: 'backend',
      level: 72,
      color: 'from-blue-600 to-indigo-700',
      description: 'Sistema de gestión de base de datos avanzado',
      projects: ['WebApp Restaurante']
    },
    // Tools & Services
    {
      name: 'Git',
      category: 'tools',
      level: 88,
      color: 'from-orange-500 to-red-600',
      description: 'Control de versiones para gestión de código',
      projects: ['Todos los proyectos']
    },
    {
      name: 'Supabase',
      category: 'tools',
      level: 75,
      color: 'from-green-400 to-emerald-500',
      description: 'Backend-as-a-service con autenticación',
      projects: ['Outside Project']
    },
    {
      name: 'Vercel',
      category: 'tools',
      level: 85,
      color: 'from-gray-900 to-black',
      description: 'Plataforma de deployment para aplicaciones modernas',
      projects: ['Portfolio', 'Outside Project']
    },

    // AI/ML & Others
    {
      name: 'Machine Learning',
      category: 'ai',
      level: 70,
      color: 'from-purple-500 to-pink-500',
      description: 'Desarrollo de modelos de IA para análisis de datos',
      projects: ['FlowForgeAI']
    },
    {
      name: 'NLP',
      category: 'ai',
      level: 68,
      color: 'from-indigo-500 to-purple-600',
      description: 'Procesamiento de lenguaje natural',
      projects: ['Translation API', 'FlowForgeAI']
    },
    {
      name: 'C#',
      category: 'ai',
      level: 60,
      color: 'from-purple-600 to-indigo-700',
      description: 'Lenguaje orientado a objetos robusto',
      projects: ['Advanced Task Manager']
    },
    {
      name: 'Java',
      category: 'ai',
      level: 65,
      color: 'from-red-500 to-orange-600',
      description: 'Lenguaje multiplataforma y orientado a objetos',
      projects: ['Poker Exercise']
    }
  ];

  const filters = [
    { id: 'all', label: 'Todas', icon: Star, count: technologies.length },
    { id: 'frontend', label: 'Frontend', icon: Code2, count: technologies.filter(t => t.category === 'frontend').length },
    { id: 'backend', label: 'Backend', icon: Database, count: technologies.filter(t => t.category === 'backend').length },
    { id: 'tools', label: 'Herramientas', icon: Cloud, count: technologies.filter(t => t.category === 'tools').length },
    { id: 'ai', label: 'AI/ML & Otros', icon: Brain, count: technologies.filter(t => t.category === 'ai').length },
  ];

  const filteredTechnologies = selectedFilter === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedFilter);

  return (
    <section id="tecnologías" className="section-container relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-green-500/20 to-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Stack <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Tecnológico</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Tecnologías que domino para crear soluciones innovadoras
          </motion.p>
        </div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = selectedFilter === filter.id;
            
            return (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{filter.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                }`}>
                  {filter.count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>        {/* Technologies grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
              className="group relative"
            >
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/30 backdrop-blur-md">
                {/* Tech header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`relative p-3 rounded-xl bg-gradient-to-br ${tech.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <TechIcon name={tech.name} className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                      {tech.name}
                    </h3>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                          transition={{ duration: 1.2, delay: 1.2 + index * 0.05, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${tech.color} rounded-full shadow-sm`}
                        />
                      </div>
                      <span className={`text-sm font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                        {tech.level}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {tech.description}
                </p>

                {/* Projects */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Proyectos destacados
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.projects.slice(0, 2).map((project, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 font-medium border border-gray-200/50 dark:border-gray-600/50 backdrop-blur-sm"
                      >
                        {project}
                      </span>
                    ))}
                    {tech.projects.length > 2 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-gray-100/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-400 font-medium border border-gray-200/50 dark:border-gray-600/50">
                        +{tech.projects.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}