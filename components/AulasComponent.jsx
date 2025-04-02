import { useState, useEffect } from "react";

export default function AulasReactComponent() {
  const [aulas, setAulas] = useState([]);
  const hoje = "ter";
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dados = [
      {
        "id": 1,
        "disciplina": "S05 - Interface Homem-máquina",
        "data": "ter",
        "horario": "10:00",
        "local": "P1-S17",
        "prova_alert": false,
        "prova": "12/05",
        "frequencia": "10/25",
        "nota": "9"
      },
      {
        "id": 2,
        "disciplina": "E01 - Circuitos Elétricos em Corrente Contínua",
        "data": "ter",
        "horario": "10:00",
        "local": "P1-S17",
        "prova_alert": true,
        "prova": "12/05",
        "frequencia": "10/25",
        "nota": "5"
      },
      {
        "id": 3,
        "disciplina": "M02 - Álgebra e Geometria Analítica",
        "data": "ter",
        "horario": "10:00",
        "local": "P1-S17",
        "prova_alert": true,
        "prova": "12/05",
        "frequencia": "10/25",
        "nota": "7"
      }
    ];

    const filtradas = dados.filter((a) => a.data === hoje);
    setAulas(filtradas);

    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark"));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.body.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ padding: "16px" }}>
      {aulas.map((aula) => {
        const nota = parseFloat(aula.nota);
        const corNota = nota < 6 ? "vermelho" : nota < 8 ? "laranja" : "verde";
        const provaStyle = aula.prova_alert ? {} : { display: "none" };

        return (
          <div
            key={aula.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "12px",
              backgroundColor: isDark ? "#333" : "#fff",
              color: isDark ? "#fff" : "#000",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                ...provaStyle,
                color: "white",
                background: "#126ae2",
                padding: "4px 10px",
                borderRadius: "500px",
                marginBottom: "10px",
                display: "inline-block",
              }}
            >
              PROVA: <b>{aula.prova}</b>
            </div>
            <div
              style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "6px" }}
            >
              {aula.disciplina}
            </div>
            <p style={{ margin: 0 }}>
              Local e Horário: <b>{aula.local} - {aula.horario}</b>
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <div
                style={{
                  background: "#126ae2",
                  color: "white",
                  padding: "6px 10px",
                  borderRadius: "500px",
                }}
              >
                FALTAS: <b>{aula.frequencia}</b>
              </div>
              <div
                style={{
                  background:
                    corNota === "vermelho"
                      ? "red"
                      : corNota === "laranja"
                      ? "orange"
                      : "green",
                  color: "white",
                  padding: "6px 10px",
                  borderRadius: "500px",
                }}
              >
                CR: <b>{aula.nota}</b>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}