import { useState } from "react";
import './Enviar.css';

export default function Enviar() {
  const [email, setEmail] = useState("Leozinhoc592@gmail.com");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  setSuccess(false);

  console.log("Iniciando envio...");

 try {
     
      const dadosRelatorio = JSON.parse(localStorage.getItem('dadosRelatorio') || '[]');
      const registros = JSON.parse(localStorage.getItem('registros') || '[]');

   
      const dadosParaEnviar = {
        relatorio: dadosRelatorio,
        registros: registros
      };

      const response = await fetch('https://email-backend-72f6.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          dados: dadosParaEnviar
        })
      });

    console.log("Status da resposta:", response.status);
    console.log("Resposta OK?", response.ok);

    const result = await response.json();
    console.log("Resultado completo:", result);

    if (result.success) {
      setSuccess(true);
      console.log("Sucesso, email enviado.");
    } else {
      setError(`Erro: ${result.error}`);
      console.log("Erro do servidor:", result.error);
    }
  } catch (error) {
    console.error("Erro de conexão:", error);
    setError("Erro de conexão com o servidor");
  } finally {
    setLoading(false);
  }
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
            Enviando dados...
          </div>
        )}

        {success && (
          <div className="success-message">
            Dados enviados com sucesso para {email}!
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
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