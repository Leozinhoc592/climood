import { useState } from "react";
import './Enviar.css';

export default function Enviar() {
  const [email, setEmail] = useState("Leozinhoc592@gmail.com");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      console.log("Email para:", email);
      console.log("Dados do localStorage:", localStorage.getItem('dadosRelatorio'));
    }, 2000);
  };

  return (
    <div className="enviar-container">
      <h2>Enviar Relatório</h2>
      
      <p>
        Digite o email do seu psicólogo para enviar seus relatórios e dados registrados.
        Seus dados serão enviados de forma segura e confidencial.
      </p>

      <form onSubmit={handleSubmit} className="email-form">
        <div className="form-group">
          <label htmlFor="email-psicologo">Email do Psicólogo:</label>
          <input
            type="email"
            id="email-psicologo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@psicologo.com"
            required
            disabled={loading || success}
          />
        </div>

        {loading && (
          <div className="loading">
            ⏳ Enviando dados...
          </div>
        )}

        {success && (
          <div className="success-message">
            ✅ Dados enviados com sucesso para {email}!
          </div>
        )}

        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}

        <button
          type="submit"
          className="btn-enviar"
          disabled={loading || success || !email}
        >
          {loading ? 'Enviando...' : 'Enviar Relatório'}
        </button>
      </form>

      {success && (
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem', color: '#6b7280' }}>
          Seu psicólogo receberá um email com todos os seus dados registrados.
        </p>
      )}
    </div>
  );
}