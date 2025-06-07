import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Produtos from "./pages/Produtos";
import Perfil from "./pages/Perfil";
import { AutenticacaoProvider } from "./contexts/AutenticacaoContext";
import RotaProtegida from "./routes/RotaProtegida";

function App() {
  return (
    <AutenticacaoProvider>
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
          </Routes>
        </div>
      </Router>
    </AutenticacaoProvider>
  );
}

export default App;