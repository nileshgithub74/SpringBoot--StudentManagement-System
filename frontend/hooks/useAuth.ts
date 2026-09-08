"use client";

import { logout as logoutService } from "@/services/authService";

export const useAuth = () => {
    return {
        isAuthenticated: true,
        isReady: true,
        userName: "Administrator",
        logout: logoutService,
    };
};
