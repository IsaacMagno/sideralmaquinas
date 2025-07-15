"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CadastroPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirm, setConfirm] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setSucesso(false);
    if (!email || !senha || !confirm) {
      setErro("Preencha todos os campos.");
      return;
    }
    if (senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }
    if (senha !== confirm) {
      setErro("As senhas não coincidem.");
      return;
    }
    setSucesso(true);
  }

  return (
    <div className="flex items-center justify-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6 w-full max-w-sm flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Criar Conta
        </h1>
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirme a senha"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        {erro && <div className="text-red-600 text-sm text-center">{erro}</div>}
        {sucesso && (
          <div className="text-green-600 text-sm text-center">
            Cadastro realizado! (mock)
          </div>
        )}
        <Button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
        >
          Cadastrar
        </Button>
      </form>
    </div>
  );
}
