// import React from "react";
// import Head from "next/head";

// const InvitationCard: React.FC = () => {
//   return (
//     <>
//       <Head>
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css2?family=Playwright+CU&display=swap"
//         />
//       </Head>
//       <div
//         className="flex items-center justify-center min-h-screen"
//         style={{
//           backgroundImage: 'url("/fondo1.jpeg")',
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div>
//           <h1 className="text-9xl font-bold text-gray-800 mb-4 underline">
//             ¡NOS CASAMOS!
//           </h1>
//           <p
//             className="text-stone-800 underline"
//             style={{ fontFamily: "'Playwright CU', cursive" }}
//           >
//             Viviana y Jhon
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InvitationCard;

// Importa los módulos necesarios
import React from "react";
import Head from "next/head";

// Define los estilos en una variable (puedes ajustarlos según tus preferencias)
const styles = {
  h1: {
    fontSize: "6rem",
    fontWeight: "bold",
    color: "#333",
  },
  p: {
    fontFamily: "'Playwright CU', cursive",
    fontSize: "1.5rem",
    color: "#666",
  },
};

const InvitationCard: React.FC = () => {
  return (
    <>
      <Head>
        {/* Agrega la importación de la fuente desde Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playwright+CU&display=swap"
        />
      </Head>
      <div
        className="flex items-center justify-center min-h-screen"
        style={{
          backgroundImage: 'url("/fondo1.jpeg")',
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          {/* Aplica los estilos a las etiquetas */}
          <h1 style={styles.h1}>¡NOS CASAMOS!</h1>
          <p style={styles.p}>Viviana y Jhon</p>
        </div>
      </div>
    </>
  );
};

export default InvitationCard;
