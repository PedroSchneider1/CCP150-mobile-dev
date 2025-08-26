// import React from 'react';
// import ReactDOM from 'react-dom/client';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      n1: 0,
      n2: 0,
      resultado: 0
    }
  }
  
  operacoes = (tipo) => {
    let r = 0;

    switch (tipo) {
      case 0: // Somar
        r = this.state.n1 + this.state.n2;
        break;
      case 1: // Subtrair
        r = this.state.n1 - this.state.n2;
        break;
      case 2: // Multiplicar
        r = this.state.n1 * this.state.n2;
        break;
      case 3: // Dividir
        r = this.state.n2 !== 0 ? this.state.n1 / this.state.n2 : 'Erro: divisão por zero';
        break;
      default:
        r = 'Operação inválida';
    }

    this.setState({ resultado: r });
  };
  
  render(){
    return(
      <div>
        <p><b>N1</b>: {this.state.n1}</p>
        <input type="number" onChange={(event) => {this.setState({
            n1: parseFloat(event.target.value)
          })}} />
        <p><b>N2</b>: {this.state.n2}</p>
        <input type="number" onChange={(event) => {this.setState({
            n2: parseFloat(event.target.value)
          })}} />
        <h2>Resultado: {this.state.resultado}</h2>
        {this.props.operacoes.map((s, index) => (
          <button key={index} onClick={() => this.operacoes(index)}>
            {s}
          </button>
        ))}
    </div>
    );
  }
}

ReactDOM.render(
  <App operacoes={["Somar", "Subtrair", "Multiplicar", "Dividir"]}/>, 
  document.getElementById('root')
);