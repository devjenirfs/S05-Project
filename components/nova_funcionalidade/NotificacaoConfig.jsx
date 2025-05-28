// NotificacaoConfig.jsx
import { useState } from "react";

export default function NotificacaoConfig() {
  const [dias, setDias] = useState(1);

  return (
    <div style={{ marginBottom: 16 }}>
      <label>
        Avisar quantos dias antes?
        <input
          type="number"
          min="0"
          max="7"
          value={dias}
          onChange={e => setDias(e.target.value)}
          style={{ marginLeft: 8, width: 40 }}
        />
      </label>
    </div>
  );
}