"use client";
import React from "react";
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeToggle from "../components/ThemeToggle";
import ArmarioReserva from "../components/ArmarioReserva";
import Noticias from "../components/Noticias";
import Carrossel from "../components/Carrossel";  // 🆕 Carrossel de notícias
import AulasReactComponent from "../components/AulasComponent";
import "./styles.css";
import AvisosCentral from "@/components/nova_funcionalidade/AvisosCentral";

export default function App() {
    return (
        <ThemeProvider>
            <div className="container">
                <div className="header">Bem-vinda, Jeniffer!</div>
                <ThemeToggle />
                <ArmarioReserva />
                <Noticias />
                <AvisosCentral/>
                <AulasReactComponent/>
                <Carrossel/>

            </div>
        </ThemeProvider>
    );
}
