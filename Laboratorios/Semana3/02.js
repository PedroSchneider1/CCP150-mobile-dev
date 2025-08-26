//import React from 'react';
//import ReactDOM from 'react-dom';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: this.props.nome
    };
  }

  saudacao = (tipo) => {
    alert(`${tipo} ${this.state.nome}`);
  };

  render() {
    return (
      <>
        {this.props.saudacoes.map((s, index) => (
          <button key={index} onClick={() => this.saudacao(s)}>
            {s}
          </button>
        ))}
      </>
    );
  }
}

ReactDOM.render(
  <App nome="Fulano" saudacoes={["Oi", "Tchau"]} />,
  document.getElementById("root")
);