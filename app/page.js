"use client";
import React from "react";
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeToggle from "../components/ThemeToggle";
import ArmarioReserva from "../components/ArmarioReserva";
import Noticias from "../components/Noticias";
import Carrossel from "../components/Carrossel";  // 🆕 Carrossel de notícias
import "./styles.css";

export default function App() {
    return (
        <ThemeProvider>
            <div className="container">
                <div className="header">Bem-vinda, Jeniffer!</div>
                <ThemeToggle />
                <ArmarioReserva />
                <Noticias />
                <Carrossel/>
            </div>
        </ThemeProvider>
    );
}
