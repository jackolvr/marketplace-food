import React from "react";
import { useCarrinho } from "../contexts/CarrinhoContext";

function Carrinho() {
  const { itens, removerDoCarrinho, limparCarrinho } = useCarrinho();

  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-2xl font-semibold mb-4">Carrinho de Compras</h2>
      {itens.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="w-full max-w-2xl">
          {itens.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white rounded shadow p-4 mb-2"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-bold">{item.nome}</h3>
                  <p>Qtd: {item.quantidade}</p>
                  <p className="text-green-600">
                    R$ {(item.preco * item.quantidade).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removerDoCarrinho(item.id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Remover
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold text-lg">Total: R$ {total.toFixed(2)}</span>
            <button
              onClick={limparCarrinho}
              className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
            >
              Limpar Carrinho
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrinho;