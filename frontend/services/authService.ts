import api from "@/services/api";
import type {AuthResponse, LoginRequest, RegisterRequest} from "@/types/auth";
import {TOKEN_KEY, USER_KEY} from "@/utils/constants";

export async function login(credentials: LoginRequest): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/login", credentials);
  const token = data.token ?? data.accessToken;
  if (token && typeof window !== "undefined") {
    localStorage.setItem(TOKEN_KEY, token);
    if (data.user) localStorage.setItem(USER_KEY, JSON.stringify(data.user));
  }
  return data;
}

export async function register(values: RegisterRequest): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/register", values);
  return data;
}

export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    window.location.assign("/login");
  }
}
