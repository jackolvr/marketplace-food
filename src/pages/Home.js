import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-green-50 to-white">
      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-10 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4 text-center drop-shadow">
          Marketplace de Comida
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
          Bem-vindo ao melhor marketplace de comida! Descubra, compre e aproveite os melhores pratos da sua região.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/cadastro")}
            className="bg-white border border-green-600 text-green-700 font-semibold py-2 px-6 rounded-lg shadow hover:bg-green-50 transition"
          >
            Cadastro
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;