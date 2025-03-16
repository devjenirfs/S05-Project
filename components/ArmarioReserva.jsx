'use client'
import React, { useState } from "react";

export default function ArmarioReserva() {
    const [mensagem, setMensagem] = useState("");
    const [tipoArmario, setTipoArmario] = useState("padrao");

    const reservarArmario = () => {
        const numeroArmario = tipoArmario === "padrao" ? "12B" : "7C";
        setMensagem(`✅ Olá, Jeniffer! 📌 Seu armário ${numeroArmario} foi reservado com sucesso!`);
    };

    return (
        <div className="main">
            <label htmlFor="tipoArmario">Escolha o tipo de armário:</label>
            <select value={tipoArmario} onChange={(e) => setTipoArmario(e.target.value)}>
                <option value="padrao">Padrão</option>
                <option value="premium">Premium</option>
            </select>
            <button onClick={reservarArmario}>Reservar Armário</button>

            {mensagem && <p className="mensagem">{mensagem}</p>}
        </div>
    );
}
