export default function PremiumFeatures({ premium }) {
  if (!premium) {
    return (
      <div style={{ marginTop: 24, opacity: 0.6 }}>
        <h4>Premium</h4>
        <ul>
          <li>Integração com Google Calendar</li>
          <li>Lembretes por WhatsApp/SMS</li>
          <li>Relatório de Desempenho</li>
        </ul>
        <small>Desbloqueie recursos avançados!</small>
      </div>
    );
  }

  // Exemplo de tela premium desbloqueada
  return (
    <div style={{ marginTop: 24 }}>
      <h4>Premium Ativo</h4>
      <ul>
        <li>✅ Integração com Google Calendar</li>
        <li>✅ Lembretes por WhatsApp/SMS</li>
        <li>✅ Relatório de Desempenho</li>
      </ul>
      <div style={{ background: "#040F27", padding: 8, borderRadius: 4, marginTop: 8 }}>
        <b>Relatório de Desempenho:</b>
        <br />
        - Provas entregues no prazo: 80%
        <br />
        - Faltas: 2
      </div>
    </div>
  );
}
