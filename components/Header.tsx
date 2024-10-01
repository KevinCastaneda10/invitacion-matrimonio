// Importa los módulos necesarios
import React from "react";
import Head from "next/head";

const Header: React.FC = () => {
  // Define los estilos para cada elemento directamente
  const h1Style: React.CSSProperties = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    fontFamily: "'Great Vibes', cursive", // Cambia la fuente aquí
  };

  const pStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    color: "#666",
    textAlign: "center",
    fontFamily: "'Great Vibes', cursive", // Cambia la fuente aquí
  };

  return (
    <>
      {/* Asegúrate de incluir la fuente en el Head */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="flex items-center justify-center min-h-screen"
        style={{
          backgroundImage: 'url("/fondo1.jpeg")',
          backgroundSize: "cover", // Cambiado a cover
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          {/* Aplica los estilos a las etiquetas */}
          <h1 style={h1Style}>
            ¡NOS <br /> CASAMOS!
          </h1>
          <p style={pStyle}>Viviana y Jhon</p>
        </div>
      </div>
    </>
  );
};

export default Header;
