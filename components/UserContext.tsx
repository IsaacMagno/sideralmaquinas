// UserContext.tsx
// Contexto React para autenticação mock (login/logout e usuário atual)
// Permite proteger rotas e acessar o usuário logado em qualquer parte do app.
//
// ATENÇÃO: O uso de localStorage aqui é apenas para simulação de sessão no mock.
// NÃO utilize localStorage para armazenar dados sensíveis ou autenticação real em produção!
//
// Exemplo de uso:
// const { user, login, logout } = useUser();

"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { MockUser } from "@/lib/mockAuth";

interface UserContextType {
  user: MockUser | null;
  isLoading: boolean;
  login: (user: MockUser) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // ATENÇÃO: Persistência em localStorage é apenas para mock!
  // Em produção, use cookies httpOnly e nunca armazene dados sensíveis no localStorage.
  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? localStorage.getItem("sideral_user")
        : null;
    if (stored) setUser(JSON.parse(stored));
    setIsLoading(false);
  }, []);
  useEffect(() => {
    if (user) localStorage.setItem("sideral_user", JSON.stringify(user));
    else localStorage.removeItem("sideral_user");
  }, [user]);

  function login(u: MockUser) {
    setUser(u);
  }
  function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within a UserProvider");
  return ctx;
}
