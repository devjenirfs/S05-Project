'use client'
import React, { useState, useEffect, useRef } from "react";
import "../app/styles.css";

const eventos = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '12/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '12/01',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '18/05',
        time: '19:00',
        location: 'Área Esportiva do Inatel',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '04/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

export default function Carrossel() {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);
    const carouselRef = useRef(null);
    const startXRef = useRef(0); // posição inicial do toque

    const nextSlide = () => setIndex((prev) => (prev + 1) % eventos.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + eventos.length) % eventos.length);

    // ▶️ Inicia o slide automático
    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 5000);
    };

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, []);

    const handleMouseEnter = () => clearInterval(intervalRef.current);
    const handleMouseLeave = () => startAutoSlide();

    // 👇 TOQUE - início
    const handleTouchStart = (e) => {
        startXRef.current = e.touches[0].clientX;
    };

    // 👉 TOQUE - fim
    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startXRef.current - endX;

        if (diff > 50) {
            nextSlide(); // arrastou para a esquerda
        } else if (diff < -50) {
            prevSlide(); // arrastou para a direita
        }
    };

    return (
        <div 
            className="carousel-container"
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div 
                className="carousel" 
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {eventos.map((evento) => (
                    <div className="card" key={evento.id}>
                        <img src={evento.image} alt={evento.title} />
                        <div className="info">
                            <h3>{evento.title}</h3>
                            <p>{evento.description}</p>
                            <p>{evento.date} às {evento.time} | {evento.location}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button id="prevBtn" onClick={prevSlide}>❮</button>
            <button id="nextBtn" onClick={nextSlide}>❯</button>
        </div>
    );
}