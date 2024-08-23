import { ReactNode } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
