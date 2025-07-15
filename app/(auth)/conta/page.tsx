"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockRegister } from "@/lib/mockAuth";
import { mockLogin } from "@/lib/mockAuth";
import { useUser } from "@/components/UserContext";
import { useRouter, useSearchParams } from "next/navigation";

// Componente para usuários logados - Página de Perfil
function UserProfile() {
  const { user, logout } = useUser();
  const router = useRouter();

  if (!user) return null;

  return (
    <div className="flex items-center justify-center px-2 py-8">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Minha Conta</h1>
          <p className="text-gray-600">
            Bem-vindo de volta,{" "}
            <span className="font-semibold">{user.name}</span>!
          </p>
        </div>

        <div className="space-y-6">
          {/* Informações do Usuário */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Informações Pessoais
            </h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Nome
                </label>
                <p className="text-gray-900">{user.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <p className="text-gray-900">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Ações Rápidas */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Ações Rápidas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                onClick={() => router.push("/loja-secreta")}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Acessar Loja Secreta
              </Button>
              <Button variant="outline" onClick={() => router.push("/")}>
                Continuar Comprando
              </Button>
            </div>
          </div>

          {/* Botão de Logout */}
          <div className="text-center">
            <Button
              variant="outline"
              onClick={logout}
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              Sair da Conta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login: loginUser } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setSucesso(false);
    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }
    setLoading(true);
    const res = await mockLogin({ email, password: senha });
    setLoading(false);
    if (res.success && res.user) {
      setSucesso(true);
      setErro("");
      setEmail("");
      setSenha("");
      loginUser(res.user); // Faz login global
      // Redireciona para loja-secreta se veio de lá, senão vai para home
      const redirect = searchParams.get("redirect");
      if (redirect === "/loja-secreta") {
        router.replace("/loja-secreta");
      } else {
        router.replace("/");
      }
    } else {
      setErro(res.error || "Erro ao fazer login.");
      setSucesso(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-md shadow-sm p-8 w-full flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">Login</h2>
      <label className="text-sm font-medium text-gray-700">
        E-mail ou usuário *
      </label>
      <Input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="rounded border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-yellow-500"
      />
      <label className="text-sm font-medium text-gray-700">Senha *</label>
      <Input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
        className="rounded border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-yellow-500"
      />
      <div className="flex items-center justify-between mt-2 mb-2">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={lembrar}
            onChange={() => setLembrar((v) => !v)}
            className="rounded border-gray-300 focus:ring-yellow-500"
          />
          Lembrar de mim
        </label>
        <a href="#" className="text-xs text-yellow-600 hover:underline">
          Esqueceu a senha?
        </a>
      </div>
      {erro && <div className="text-red-600 text-sm text-center">{erro}</div>}
      {sucesso && (
        <div className="text-green-600 text-sm text-center">
          Login realizado!
        </div>
      )}
      <Button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded py-3 text-base mt-2"
        disabled={loading}
      >
        {loading ? "Entrando..." : "ENTRAR"}
      </Button>
    </form>
  );
}

function CadastroForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirm, setConfirm] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState("");
  const { login: loginUser } = useUser();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setSucesso(false);
    if (!nome || !email || !senha || !confirm) {
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
    setLoading(true);
    const res = await mockRegister({ name: nome, email, password: senha });
    setLoading(false);
    if (res.success && res.user) {
      setSucesso(true);
      setErro("");
      loginUser(res.user); // Faz login automático após cadastro
      setTimeout(() => {
        router.replace("/"); // Redireciona para home após cadastro
      }, 1500);
    } else {
      setErro(res.error || "Erro ao cadastrar.");
      setSucesso(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-md shadow-sm p-8 w-full flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">
        Cadastro
      </h2>
      <label className="text-sm font-medium text-gray-700">Nome *</label>
      <Input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
        className="rounded border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-yellow-500"
      />
      <label className="text-sm font-medium text-gray-700">E-mail *</label>
      <Input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="rounded border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-yellow-500"
      />
      <label className="text-sm font-medium text-gray-700">Senha *</label>
      <Input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
        className="rounded border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-yellow-500"
      />
      <label className="text-sm font-medium text-gray-700">
        Confirme a senha *
      </label>
      <Input
        type="password"
        placeholder="Confirme sua senha"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        required
        className="rounded border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-yellow-500"
      />
      <p className="text-xs text-gray-500 mt-2 mb-2">
        Seus dados pessoais serão usados para criar sua conta e melhorar sua
        experiência no site, conforme nossa política de privacidade.
      </p>
      {erro && <div className="text-red-600 text-sm text-center">{erro}</div>}
      {sucesso && (
        <div className="text-green-600 text-sm text-center">
          Cadastro realizado com sucesso! Redirecionando...
        </div>
      )}
      <Button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded py-3 text-base mt-2"
        disabled={loading}
      >
        {loading ? "Cadastrando..." : "CADASTRAR"}
      </Button>
    </form>
  );
}

export default function ContaPage() {
  const [tab, setTab] = useState<"login" | "cadastro">("login");
  const { user, isLoading } = useUser();
  const router = useRouter();

  // Se está carregando, mostra loading
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  // Se usuário está logado, mostra perfil
  if (user) {
    return <UserProfile />;
  }

  // Se não está logado, mostra formulários de login/cadastro
  return (
    <div className="flex items-center justify-center px-2 py-8">
      <div className="w-full max-w-4xl flex flex-col sm:flex-row gap-8">
        {/* Mobile Tabs */}
        <div className="sm:hidden flex mb-4">
          <button
            className={`flex-1 py-2 font-semibold rounded-l ${
              tab === "login"
                ? "bg-yellow-400 text-black"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => setTab("login")}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 font-semibold rounded-r ${
              tab === "cadastro"
                ? "bg-yellow-400 text-black"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => setTab("cadastro")}
          >
            Cadastro
          </button>
        </div>
        {/* Desktop: lado a lado | Mobile: só a tab ativa */}
        <div className="flex-1">
          <div className="hidden sm:block">
            <LoginForm />
          </div>
          <div className="block sm:hidden">
            {tab === "login" && <LoginForm />}
          </div>
        </div>
        <div className="flex-1">
          <div className="hidden sm:block">
            <CadastroForm />
          </div>
          <div className="block sm:hidden">
            {tab === "cadastro" && <CadastroForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
