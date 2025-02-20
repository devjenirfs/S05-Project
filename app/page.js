"use client";

import { useState } from "react";

export default function Home() {
    const [mensagem, setMensagem] = useState("");

    // Objeto do usuário
    const usuario = { nome: "Jeniffer", matricula: "123456", pendencia: false, acessibilidade: true };

    // Lista de armários disponíveis
    const armarios = [
        { id: 1, formato: "padrao", status: true, acessivel: false },
        { id: 2, formato: "padrao", status: true, acessivel: false },
        { id: 3, formato: "padrao", status: true, acessivel: false },
        { id: 4, formato: "padrao", status: false, acessivel: true },
        { id: 5, formato: "padrao", status: false, acessivel: true },
        { id: 6, formato: "duplo", status: true, acessivel: true },
        { id: 7, formato: "duplo", status: false, acessivel: true },
        { id: 8, formato: "duplo", status: false, acessivel: true }
    ];

    function reservarArmario() {
        let tipoSelecionado = document.getElementById("tipoArmario").value;

        // Filtrar armários disponíveis e acessíveis ao usuário
        let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status && usuario.acessibilidade === a.acessivel);

        if (armariosDisponiveis.length === 0) {
            setMensagem(`❌ Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`);
            return;
        }

        // Seleciona um armário aleatório disponível
        let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];

        // Registrar data/hora da reserva
        let dataReserva = new Date();
        armarioSorteado.dataReserva = dataReserva.toLocaleString();

        // Calcular data/hora da entrega (24h depois)
        let dataEntrega = new Date(dataReserva);
        dataEntrega.setHours(dataEntrega.getHours() + 24);
        armarioSorteado.dataEntrega = dataEntrega.toLocaleString();

        // Atualizar status do armário
        armarioSorteado.status = false;

        // Atualizar pendência do usuário
        usuario.pendencia = true;

        // Exibir resultado da reserva
        setMensagem(`
            ✅ Olá, <strong>${usuario.nome}</strong>!<br/>
            📌 O armário <strong>${armarioSorteado.id}</strong> foi reservado com sucesso!<br/>
            📅 <strong>Data/Hora da Reserva:</strong> ${armarioSorteado.dataReserva} <br/>
            ⏳ <strong>Data/Hora da Entrega:</strong> ${armarioSorteado.dataEntrega}
        `);
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-blue-600">Reserva de Armário</h1>
                <p className="text-center text-gray-600 mb-4">Escolha um tipo de armário e clique em reservar.</p>

                <label htmlFor="tipoArmario" className="block text-gray-700 font-semibold mb-2">Selecione o tipo de armário:</label>
                <select id="tipoArmario" className="w-full border p-2 rounded mb-4">
                    <option value="padrao">Padrão</option>
                    <option value="duplo">Duplo</option>
                </select>

                <button 
                    onClick={reservarArmario} 
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                    Reservar
                </button>

                {mensagem && (
                    <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
                        <span dangerouslySetInnerHTML={{ __html: mensagem }} />
                    </div>
                )}
            </div>
        </main>
    );
}
