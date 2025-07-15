// mockAuth.ts
// Utilitário para simular autenticação de usuário (cadastro e login) no frontend.
// As funções retornam Promises simulando o delay e o formato de resposta de uma API real.

export interface MockUser {
  id: string;
  name: string;
  email: string;
}

export interface MockAuthResponse {
  success: boolean;
  user?: MockUser;
  error?: string;
}

// Simula um cadastro de usuário
export function mockRegister({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): Promise<MockAuthResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!email.includes("@")) {
        resolve({ success: false, error: "E-mail inválido." });
      } else if (password.length < 6) {
        resolve({
          success: false,
          error: "A senha deve ter pelo menos 6 caracteres.",
        });
      } else {
        resolve({
          success: true,
          user: {
            id: Math.random().toString(36).substring(2, 10),
            name,
            email,
          },
        });
      }
    }, 800); // Simula delay de rede
  });
}

// Simula um login de usuário
export function mockLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<MockAuthResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "user@sideral.com" && password === "123456") {
        resolve({
          success: true,
          user: {
            id: "mockid123",
            name: "Usuário Sideral",
            email,
          },
        });
      } else {
        resolve({ success: false, error: "E-mail ou senha inválidos." });
      }
    }, 800);
  });
}
