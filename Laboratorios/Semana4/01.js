const { useState } = React;
 
 function App() {
   const [count, setCount] = useState(0);

   return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
       Aumenta
      </button>
       <button onClick={() => setCount(count - 1)}>
       Diminui
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));