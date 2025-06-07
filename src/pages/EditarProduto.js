import React from "react";
import { useDispatch } from "react-redux";
import { updateProduto } from "../store/produtosSlice";
import { useLocation, useNavigate } from "react-router-dom";
import FormularioProduto from "../components/FormularioProduto";
import MenuNavegacao from "../components/MenuNavegacao";

function EditarProduto() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const produto = location.state?.produto;

  function handleSalvar(produtoAtualizado) {
    dispatch(updateProduto({ id: produtoAtualizado.id, produto: produtoAtualizado }));
    navigate("/produtos");
  }

  function handleCancelar() {
    navigate("/produtos");
  }

  if (!produto) {
    return (
      <>
        <MenuNavegacao />
        <div className="flex flex-col items-center justify-center h-screen">
          <p>Produto não encontrado.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <MenuNavegacao />
      <div className="flex flex-col items-center py-8">
        <FormularioProduto
          onSalvar={handleSalvar}
          produtoEditando={produto}
          onCancelar={handleCancelar}
        />
      </div>
    </>
  );
}

export default EditarProduto;