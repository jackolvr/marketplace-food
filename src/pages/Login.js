import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAutenticacao } from "../contexts/AutenticacaoContext";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const { login } = useAutenticacao();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const sucesso = login(email, senha);
    if (sucesso) {
      navigate("/produtos");
    } else {
      setErro("E-mail ou senha inválidos");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <input
          type="email"
          placeholder="E-mail"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-3 p-2 border rounded"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
        />
        {erro && <p className="text-red-500 mb-2">{erro}</p>}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;