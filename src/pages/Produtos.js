import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProdutos } from "../store/produtosSlice";

function Produtos() {
  const dispatch = useDispatch();
  const { lista, status, erro } = useSelector(state => state.produtos);

  useEffect(() => {
    dispatch(fetchProdutos());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-2xl font-semibold mb-4">Produtos</h2>
      {status === "loading" && <p>Carregando...</p>}
      {erro && <p className="text-red-500">{erro}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lista.map(produto => (
          <div key={produto.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
            <img src={produto.imagem} alt={produto.nome} className="w-32 h-32 object-cover mb-2 rounded" />
            <h3 className="text-lg font-bold">{produto.nome}</h3>
            <p className="text-green-600 font-semibold">R$ {produto.preco}</p>
            <p className="text-gray-600 text-sm">{produto.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;