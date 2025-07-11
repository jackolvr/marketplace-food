import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchProdutos,
  removeProduto,
} from "../store/produtosSlice";
import MenuNavegacao from "../components/MenuNavegacao";

function Produtos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { lista, status, erro } = useSelector((state) => state.produtos);

  useEffect(() => {
    dispatch(fetchProdutos());
  }, [dispatch]);

  function handleExcluir(id) {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      dispatch(removeProduto(id));
    }
  }

  return (
    <>
      <MenuNavegacao />
      <div className="flex flex-col items-center py-8">
        <h2 className="text-2xl font-semibold mb-4">Produtos</h2>
        <button
          onClick={() => navigate("/cadastrar-produto")}
          className="mb-6 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 font-semibold"
        >
          Cadastrar Produto
        </button>
        {status === "loading" && <p>Carregando...</p>}
        {erro && <p className="text-red-500">{erro}</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {lista.map((produto) => (
            <div
              key={produto.id}
              className="bg-white rounded shadow p-4 flex flex-col items-center"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-32 h-32 object-cover mb-2 rounded"
              />
              <h3 className="text-lg font-bold">{produto.nome}</h3>
              <p className="text-green-600 font-semibold">R$ {produto.preco}</p>
              <p className="text-gray-600 text-sm mb-2">{produto.descricao}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => navigate("/detalhes-produto", { state: { produto } })}
                  className="bg-purple-500 text-white py-1 px-3 rounded hover:bg-purple-600"
                >
                  Detalhes
                </button>
                <button
                  onClick={() => navigate("/editar-produto", { state: { produto } })}
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleExcluir(produto.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Produtos;