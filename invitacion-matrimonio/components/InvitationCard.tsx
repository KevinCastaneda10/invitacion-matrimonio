import React from "react";

const InvitationCard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-100">
      <div className="bg-gray-400 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-4">
          ¡Te Invitamos a Nuestro Matrimonio!
        </h1>
        <p className="text-lg text-center mb-4">
          Nos encantaría que nos acompañaras en este día especial.
        </p>
        <div className="text-center mb-6">
          <p className="text-xl font-semibold">Novio: Jhon Sánches</p>
          <p className="text-xl font-semibold">Novia: Viviana Lindarte</p>
        </div>
        <div className="text-center mb-4">
          <p className="text-lg">Fecha: 09 de oviembre de 2024</p>
          <p className="text-lg">Hora: 5:00 PM</p>
          <p className="text-lg">Lugar: Iglesia, Bogotá</p>
        </div>
        <div className="text-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Confirmar Asistencia
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
