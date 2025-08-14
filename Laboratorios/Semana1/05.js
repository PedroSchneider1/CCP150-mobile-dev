class Data{
    constructor(dia, mes, ano){
        this._dia = dia;
        this._mes = mes;
        this._ano = ano;
    }

    toString(){
        return `${this._dia}/${this._mes}/${this._ano}`;
    }
}

class Pessoa{
    constructor(nome, cpf, nascimento){
        this._nome = nome;
        this._cpf = cpf;
        this._nascimento = nascimento;
    }

    get nome(){
        return this._nome;
    }

    toString(){
        return `Nome: ${this._nome}, CPF: ${this._cpf}, Nascimento: ${this._nascimento.toString()}`;
    }
}

class Funcionario extends Pessoa{
    constructor(nome, cpf, nascimento, admissao, salario){
        super(nome, cpf, nascimento);
        this._admissao = admissao;
        this._salario = salario;
    }

    get salario(){
        return this._salario;
    }    

    toString(){
        return `${super.toString()}, Admissão: ${this._admissao.toString()}, Salário: ${this._salario}`;
    }
}

class Gerente extends Funcionario{
    constructor(nome, cpf, nascimento, admissao, salario, departamento, promocaoGerente){
        super(nome, cpf, nascimento, admissao, salario);
        this._departamento = departamento;
        this._promocaoGerente = promocaoGerente;
    }

    get departamento(){
        return this._departamento;
    }

    toString(){
        return `${super.toString()}, Departamento: ${this._departamento}, Promoção: ${this._promocaoGerente.toString()}`;
    }
}

var funcionario1 = new Funcionario("Silva", "321.321.321-00", new Data(10,12,1990), new Data(10,12,2020), 3000);
var gerente1 = new Gerente("Antonieta", "321.123.321-12", new Data(1,1,1990), new Data(1,1,2020), 5000, "Vendas", new Data(10,12,2021));

console.log(funcionario1.toString());
console.log(gerente1.toString());