import React from "react";
import { useDispatch } from "react-redux";
import { addProduto } from "../store/produtosSlice";
import { useNavigate } from "react-router-dom";
import FormularioProduto from "../components/FormularioProduto";
import MenuNavegacao from "../components/MenuNavegacao";

function CadastrarProduto() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSalvar(produto) {
    dispatch(addProduto(produto));
    navigate("/produtos");
  }

  function handleCancelar() {
    navigate("/produtos");
  }

  return (
    <>
      <MenuNavegacao />
      <div className="flex flex-col items-center py-8">
        <FormularioProduto onSalvar={handleSalvar} onCancelar={handleCancelar} />
      </div>
    </>
  );
}

export default CadastrarProduto;