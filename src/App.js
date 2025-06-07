import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Produtos from "./pages/Produtos";
import Perfil from "./pages/Perfil";
import DetalhesProduto from "./pages/DetalhesProduto";
import Carrinho from "./pages/Carrinho";
import CadastrarProduto from "./pages/CadastrarProduto";
import EditarProduto from "./pages/EditarProduto";
import { AutenticacaoProvider } from "./contexts/AutenticacaoContext";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";
import RotaProtegida from "./routes/RotaProtegida";

function App() {
  return (
    <AutenticacaoProvider>
      <CarrinhoProvider>
        <Router>
          <div className="min-h-screen bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route
                path="/produtos"
                element={
                  <RotaProtegida>
                    <Produtos />
                  </RotaProtegida>
                }
              />
              <Route
                path="/perfil"
                element={
                  <RotaProtegida>
                    <Perfil />
                  </RotaProtegida>
                }
              />
              <Route
                path="/detalhes-produto"
                element={
                  <RotaProtegida>
                    <DetalhesProduto />
                  </RotaProtegida>
                }
              />
              <Route
                path="/carrinho"
                element={
                  <RotaProtegida>
                    <Carrinho />
                  </RotaProtegida>
                }
              />
              <Route
                path="/cadastrar-produto"
                element={
                  <RotaProtegida>
                    <CadastrarProduto />
                  </RotaProtegida>
                }
              />
              <Route
                path="/editar-produto"
                element={
                  <RotaProtegida>
                    <EditarProduto />
                  </RotaProtegida>
                }
              />
            </Routes>
          </div>
        </Router>
      </CarrinhoProvider>
    </AutenticacaoProvider>
  );
}

export default App;