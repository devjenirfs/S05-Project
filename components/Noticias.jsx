'use client'
import React, { useState } from "react";

export default function Noticias() {
    const [noticias, setNoticias] = useState([]);

    const adicionarNoticia = () => {
        setNoticias([...noticias, "📢 Nova Notícia: Descrição da nova notícia."]);
    };

    return (
        <div className="noticias">
            <h3>Últimas Notícias</h3>
            <div>
                {noticias.map((noticia, index) => (
                    <div key={index} className="noticia">{noticia}</div>
                ))}
            </div>
            <button onClick={adicionarNoticia}>Adicionar Notícia</button>
        </div>
    );
}
