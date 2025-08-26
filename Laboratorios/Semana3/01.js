// import React from 'react';
// import ReactDOM from 'react-dom/client';

function Card(props) {
  return <h1>{props.name} tem {props.idade} e sua profissão é {props.profissao}!</h1>;
}

function App() {
  return (
    <div>
      <Card name="Fulano" idade="18" profissao="pedreiro"/>
      <Card name="Sicrano" idade="20" profissao="marceneiro" />
      <Card name="Beltrano" idade="25" profissao="secretário"/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));