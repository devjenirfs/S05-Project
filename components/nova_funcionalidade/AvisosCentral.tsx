// AvisosCentral.jsx
import { useState } from "react";
import NotificacaoConfig from "./NotificacaoConfig";
import PremiumFeatures from "./PremiumFeatures";

export default function AvisosCentral() {
  const [premium, setPremium] = useState(false);
  const [avisos] = useState([
    { id: 1, tipo: "Prova", mensagem: "Prova de Matemática amanhã!", data: "2024-06-10" },
    { id: 2, tipo: "Atividade", mensagem: "Entrega de trabalho hoje!", data: "2024-06-09" },
  ]);

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 16, border: "1px solid #ccc", borderRadius: 8, marginTop: 32 }}>
      <h2>Central de Avisos Inteligentes</h2>
      <NotificacaoConfig />
      <h3>Avisos</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {avisos.map(aviso => (
          <div key={aviso.id} style={{ margin: 8, padding: 8, border: "1px solid #eee", borderRadius: 4 }}>
            <b>🔔 {aviso.tipo}</b>: {aviso.mensagem}
            <br />
            <small>{aviso.data}</small>
          </div>
        ))}
      </div>
      <PremiumFeatures premium={premium} />
      {!premium && (
        <button onClick={() => setPremium(true)} style={{ marginTop: 16, background: "#126ae2", color: "#fff", border: "none", padding: 10, borderRadius: 4 }}>
          Assinar Premium
        </button>
      )}
    </div>
  );
}