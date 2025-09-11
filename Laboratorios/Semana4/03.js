const { useState, useEffect } = React;

function App() {
  const [num_secreto, setNum_secreto] = useState(0);
  const [num_user, setNum_user] = useState("");
  const [acerto, setAcerto] = useState(null);

  useEffect(() => {
    const numero = Math.floor(Math.random() * 99) + 1;
    setNum_secreto(numero);
  }, []);

  const feedback = {
    0: {
      mensagem: "Parabéns! Você acertou!",
      cor: "#4CAF50" // verde
    },
    1: {
      mensagem: "Errou! Número muito grande.",
      cor: "#F44336" // vermelho
    },
    2: {
      mensagem: "Errou! Número muito baixo.",
      cor: "#FF9800" // laranja
    }
  };

  function handleAdivinhar() {
    const tentativa = parseInt(num_user);
    if (tentativa === num_secreto) {
      setAcerto(0);
    } else if (tentativa > num_secreto) {
      setAcerto(1);
    } else {
      setAcerto(2);
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Tente adivinhar (0 a 99)!</h1>

      <input
        type="number"
        onChange={(num) => setNum_user(num.target.value)}
        style={{ marginRight: "10px" }}
      />

      <button type="button" onClick={handleAdivinhar}>
        Adivinhar
      </button>

      {acerto !== null && (
        <p
          style={{
            backgroundColor: feedback[acerto].cor,
            color: "#fff",
            padding: "10px",
            marginTop: "20px",
            borderRadius: "5px"
          }}
        >
          {feedback[acerto].mensagem}
        </p>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));