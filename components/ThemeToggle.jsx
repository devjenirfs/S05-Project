'use client'
import React from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Alternar Tema ({theme === "dark" ? "🌙 Modo Escuro" : "☀️ Modo Claro"})
        </button>
    );
}
