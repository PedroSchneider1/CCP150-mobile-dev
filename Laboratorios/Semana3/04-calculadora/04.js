// import React from 'react';
// import ReactDOM from 'react-dom/client';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };
  }

  handleButtonClick = (value) => {
    if (value === 'C') {
      this.setState({ display: '' });
    } else if (value === '=') {
      try {
        let result = eval(this.state.display);
        if (!isFinite(result)) {
          this.setState({ display: 'Expressão inválida' });
        } else {
          this.setState({ display: result.toString() });
        }
      } catch {
        this.setState({ display: 'Expressão inválida' });
      }
    } else {
      this.setState((prevState) => {
        let newDisplay = prevState.display + value;

        // Evita que um número comece com 0 seguido de outro dígito (ex: 01, 002)
        if (/(\b0\d+)/.test(newDisplay) || this.state.display === 'Expressão inválida') {
          return { display: value };
        }

        return { display: newDisplay };
    });
  };
}

  render() {
    const { botoes, operacoes } = this.props;
    const todosBotoes = [...botoes, ...operacoes];

    return (
      <div id="calculadora">
        <div className="display">
          <input type="text" value={this.state.display} readOnly />
        </div>

        <div id="botoes">
          {todosBotoes.map((btn, index) => (
            <button key={index} onClick={() => this.handleButtonClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App
    botoes={["1","2","3","4","5","6","7","8","9","0","C","="]}
    operacoes={["+", "-", "*", "/"]}
   />, 
  document.getElementById('root')
);