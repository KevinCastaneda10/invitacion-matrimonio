// Importa los módulos necesarios
import React from "react";
import Head from "next/head";

// Define los estilos en una variable (ajusta los estilos según prefieras)
const styles = {
  h1: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    fontFamily: "'Great Vibes', cursive", // Cambia la fuente aquí
  },
  p: {
    fontSize: "1.5rem",
    color: "#666",
    textAlign: "center",
    fontFamily: "'Great Vibes', cursive", // Cambia la fuente aquí
  },
};

const Header: React.FC = () => {
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
          backgroundPosition: "center", // Puedes dejar esto
          backgroundRepeat: "no-repeat", // Puedes dejar esto
        }}
      >
        <div>
          {/* Aplica los estilos a las etiquetas */}
          <h1 style={styles.h1}>
            ¡NOS <br /> CASAMOS!
          </h1>
          <p style={styles.p}>Viviana y Jhon</p>
        </div>
      </div>
    </>
  );
};

export default Header;
