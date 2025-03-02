"use client";

import { useState } from "react";

export default function Home() {
    const [mensagem, setMensagem] = useState("");
    const [usuario, setUsuario] = useState({
        nome: "Raphael",
        matricula: "123456",
        pendencia: true,
        acessibilidade: true,
        armarioReservado: "8A"
    });

    // Lista de notícias
    const [noticias, setNoticias] = useState([
        { id: 1, titulo: "Evento acadêmico", descricao: "Não perca a semana acadêmica de tecnologia!" },
        { id: 2, titulo: "Matrículas abertas", descricao: "Garanta sua matrícula para o próximo semestre." }
    ]);

    // Simulação de reserva de armário
    function reservarArmario() {
        let tipoSelecionado = document.getElementById("tipoArmario").value;

        // Atualiza o usuário com um armário reservado
        setUsuario(prev => ({
            ...prev,
            armarioReservado: tipoSelecionado === "padrao" ? "12B" : "7C"
        }));

        setMensagem(`
            ✅ Olá, ${usuario.nome}!<br/>
            📌 Seu armário <strong>${tipoSelecionado === "padrao" ? "12B" : "7C"}</strong> foi reservado com sucesso!
        `);
    }

    // Função opcional para adicionar notícias dinamicamente
    function adicionarNoticia() {
        setNoticias(prevNoticias => [
            ...prevNoticias,
            { id: prevNoticias.length + 1, titulo: "Nova Notícia", descricao: "Descrição da nova notícia" }
        ]);
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <header className="bg-blue-600 text-white p-4 rounded mb-4">
                    <h1 className="text-xl font-bold">Olá, {usuario.nome}</h1>
                    <p>
                        {usuario.armarioReservado
                            ? `📦 Armário reservado: ${usuario.armarioReservado}`
                            : "🚪 Nenhum armário reservado"}
                        <br />
                        {usuario.pendencia ? "⚠️ Você possui uma pendência financeira!" : "✅ Nenhuma pendência financeira"}
                    </p>
                </header>

                <section className="mb-4">
                    <h2 className="text-lg font-semibold">Mensagens</h2>
                    <div className="bg-gray-200 p-3 rounded mt-2">📢 Aviso importante da coordenação</div>
                    <div className="bg-gray-200 p-3 rounded mt-2">🎓 Sua matrícula foi confirmada!</div>
                </section>

                <section className="mb-4">
                    <h2 className="text-lg font-semibold">Reservar Armário</h2>
                    <label htmlFor="tipoArmario" className="block text-gray-700 font-semibold mb-2">Selecione o tipo de armário:</label>
                    <select id="tipoArmario" className="w-full border p-2 rounded mb-2">
                        <option value="padrao">Padrão</option>
                        <option value="duplo">Duplo</option>
                    </select>
                    <button onClick={reservarArmario} className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
                        Reservar
                    </button>
                </section>

                <section className="mb-4">
                    <h2 className="text-lg font-semibold">Disciplinas</h2>
                    <div className="bg-green-200 p-3 rounded mt-2">📖 Engenharia de Software - Sala A101</div>
                    <div className="bg-green-200 p-3 rounded mt-2">📖 Design de Interfaces - Sala B202</div>
                    <div className="bg-green-200 p-3 rounded mt-2">📖 Banco de Dados - Sala C303</div>
                </section>

                <section className="mb-4">
                    <h2 className="text-lg font-semibold">Notícias</h2>
                    {noticias.map((noticia) => (
                        <div key={noticia.id} className="bg-yellow-200 p-3 rounded mt-2">
                            <strong>{noticia.titulo}</strong>
                            <p>{noticia.descricao}</p>
                        </div>
                    ))}
                </section>

                <button onClick={adicionarNoticia} className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition">
                    Adicionar Notícia
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
