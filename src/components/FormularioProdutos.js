import React, { useState, useEffect } from "react";

function FormularioProduto({ onSalvar, produtoEditando, onCancelar }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    if (produtoEditando) {
      setNome(produtoEditando.nome);
      setPreco(produtoEditando.preco);
      setDescricao(produtoEditando.descricao);
      setImagem(produtoEditando.imagem);
    } else {
      setNome("");
      setPreco("");
      setDescricao("");
      setImagem("");
    }
  }, [produtoEditando]);

  function handleSubmit(e) {
    e.preventDefault();
    onSalvar({
      nome,
      preco: parseFloat(preco),
      descricao,
      imagem,
      id: produtoEditando ? produtoEditando.id : undefined,
    });
    if (!produtoEditando) {
      setNome("");
      setPreco("");
      setDescricao("");
      setImagem("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 w-full max-w-md">
      <h3 className="text-lg font-bold mb-2">{produtoEditando ? "Editar Produto" : "Novo Produto"}</h3>
      <input
        type="text"
        placeholder="Nome"
        className="w-full mb-2 p-2 border rounded"
        value={nome}
        onChange={e => setNome(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Preço"
        className="w-full mb-2 p-2 border rounded"
        value={preco}
        onChange={e => setPreco(e.target.value)}
        required
        min="0"
        step="0.01"
      />
      <input
        type="text"
        placeholder="URL da Imagem"
        className="w-full mb-2 p-2 border rounded"
        value={imagem}
        onChange={e => setImagem(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrição"
        className="w-full mb-2 p-2 border rounded"
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
        required
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          {produtoEditando ? "Salvar" : "Adicionar"}
        </button>
        {produtoEditando && (
          <button
            type="button"
            onClick={onCancelar}
            className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default FormularioProduto;