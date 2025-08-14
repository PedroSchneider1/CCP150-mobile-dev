class FuncionariosDoHospital{
    constructor(nome, numeroRestantesDeFerias){
        this._nome = nome;
        this._numeroRestantesDeFerias = 20;
    }

    get nome(){
        return this._nome;
    }

    get numeroRestantesDeFerias(){
        return this._numeroRestantesDeFerias;
    }

    set nome(nome){
        this._nome = nome;
    }

    set numeroRestantesDeFerias(numeroRestantesDeFerias){
        this._numeroRestantesDeFerias = numeroRestantesDeFerias;
    }
}

class Medico extends FuncionariosDoHospital{
    constructor(nome, cpf){
        super(nome);
        this._cpf = cpf;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }

    tirarFerias(diasDeFerias){
        if(diasDeFerias <= this._numeroRestantesDeFerias){
            this._numeroRestantesDeFerias -= diasDeFerias;
            console.log(`Férias aprovadas! Você ainda tem ${this._numeroRestantesDeFerias} dias de férias restantes.`);
        } else {
            console.log(`Férias não aprovadas! Você só tem ${this._numeroRestantesDeFerias} dias de férias restantes.`);
        }
    }
}

class Enfermeira extends FuncionariosDoHospital{
    constructor(nome, certificados){
        super(nome);
        this._certificados = certificados;
    }

    get certificados(){
        return this._certificados;
    }

    set certificados(certificados){
        this._certificados = certificados;
    }

    tirarFerias(diasDeFerias){
        if(diasDeFerias <= this._numeroRestantesDeFerias){
            this._numeroRestantesDeFerias -= diasDeFerias;
            console.log(`Férias aprovadas! Você ainda tem ${this._numeroRestantesDeFerias} dias de férias restantes.`);
        } else {
            console.log(`Férias não aprovadas! Você só tem ${this._numeroRestantesDeFerias} dias de férias restantes.`);
        }
    }

    adicionarCertificado(certificado){
        this._certificados.push(certificado);
        console.log(`Certificado ${certificado} adicionado!`);
    }
}

var medico1 = new Medico("Dr. João", "123.456.789-00");
medico1.tirarFerias(5);

var enfermeira1 = new Enfermeira("Enf. Maria", ["Primeiros Socorros"]);
enfermeira1.tirarFerias(22);
enfermeira1.adicionarCertificado("Cuidados Intensivos");
console.log(enfermeira1.certificados);