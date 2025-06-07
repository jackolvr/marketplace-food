import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCarrinho } from "../contexts/CarrinhoContext";
import MenuNavegacao from "../components/MenuNavegacao";

function DetalhesProduto() {
  const location = useLocation();
  const navigate = useNavigate();
  const { adicionarAoCarrinho } = useCarrinho();
  const produto = location.state?.produto;

  if (!produto) {
    return (
      <>
        <MenuNavegacao />
        <div className="flex flex-col items-center justify-center h-screen">
          <p>Produto não encontrado.</p>
          <button
            onClick={() => navigate("/produtos")}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Voltar para Produtos
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <MenuNavegacao />
      <div className="flex flex-col items-center py-8">
        <div className="bg-white rounded shadow p-6 flex flex-col items-center max-w-md">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="w-48 h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-2xl font-bold mb-2">{produto.nome}</h2>
          <p className="text-green-600 font-semibold text-lg mb-2">
            R$ {produto.preco}
          </p>
          <p className="text-gray-700 mb-4">{produto.descricao}</p>
          <button
            onClick={() => {
              adicionarAoCarrinho(produto);
              navigate("/carrinho");
            }}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </>
  );
}

export default DetalhesProduto;