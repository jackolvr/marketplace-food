import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAutenticacao } from "../contexts/AutenticacaoContext";
import { useCarrinho } from "../contexts/CarrinhoContext";

function MenuNavegacao() {
  const { usuario, logout } = useAutenticacao();
  const { itens } = useCarrinho();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/"); // Agora redireciona para Home
  }

  return (
    <nav className="bg-white shadow flex items-center justify-between px-6 py-3 mb-6">
      <div className="flex items-center gap-4">
        <Link to="/produtos" className="text-green-700 font-bold hover:underline">
          Produtos
        </Link>
        <Link to="/carrinho" className="text-green-700 font-bold hover:underline">
          Carrinho
          {itens.length > 0 && (
            <span className="ml-1 bg-green-600 text-white rounded-full px-2 text-xs">
              {itens.length}
            </span>
          )}
        </Link>
        <Link to="/perfil" className="text-green-700 font-bold hover:underline">
          Perfil
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-700 text-sm">{usuario?.nome}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Sair
        </button>
      </div>
    </nav>
  );
}

export default MenuNavegacao;