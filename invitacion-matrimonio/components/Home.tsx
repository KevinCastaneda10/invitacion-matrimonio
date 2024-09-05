import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-100">
      <Link href="/invitation" className="flex items-center justify-center bg-gray-800 p-2 rounded-2xl shadow-lg max-w-sm w-full hover:bg-gray-500">
        Ver invitación
      </Link>
    </div>
  );
};

export default Home;
