import { useState } from "react";
import './Enviar.css';

export default function Enviar() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const dadosRelatorio = JSON.parse(localStorage.getItem('dadosRelatorio') || '[]');
      const registros = JSON.parse(localStorage.getItem('registros') || '[]');

      if ((!dadosRelatorio || dadosRelatorio.length === 0) && (!registros || registros.length === 0)) {
        setError("Não há dados para enviar.");
        setLoading(false);
        return;
      }

      const corpoParaEnviar = {
        to: email,
        relatorio: dadosRelatorio,
        registros: registros
      };

      const response = await fetch('https://email-backend-72f6.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corpoParaEnviar),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
      } else {
        setError(`Erro do servidor: ${result.error}`);
      }
    } catch (err) {
      setError("Erro de conexão com o servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="enviar-container">
      <h2>Enviar Relatório</h2>
      <p>Digite o email do seu psicólogo para enviar seus relatórios e respostas das perguntas diárias.</p>

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

        {loading && <div className="loading">Enviando dados...</div>}

        {success && (
          <div className="success-message">
            Relatório e respostas diárias enviados com sucesso para {email}!
          </div>
        )}

        {error && <div className="error-message">{error}</div>}

        <button
          type="submit"
          className="btn-enviar"
          disabled={loading || success || !email}
        >
          {loading ? 'Enviando...' : 'Enviar Relatório'}
        </button>
      </form>
    </div>
  );
}
  