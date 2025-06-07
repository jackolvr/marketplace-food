import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");
    setSucesso("");
    try {
      // Verifica se já existe usuário com o mesmo e-mail
      const res = await axios.get("http://localhost:3001/usuarios", { params: { email } });
      if (res.data.length > 0) {
        setErro("E-mail já cadastrado.");
        return;
      }
      await axios.post("http://localhost:3001/usuarios", { nome, email, senha });
      setSucesso("Cadastro realizado com sucesso! Faça login para continuar.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setErro("Erro ao cadastrar. Tente novamente.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-green-50 to-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-4">Cadastro de Usuário</h2>
        <input
          type="text"
          placeholder="Nome"
          className="w-full mb-3 p-2 border rounded"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />
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
        {sucesso && <p className="text-green-600 mb-2">{sucesso}</p>}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;