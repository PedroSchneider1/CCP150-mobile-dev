class VideoGame{
    constructor(marca, nControles, tipoMidia, ligado, jogando){
        this._marca = marca;
        this._nControles = nControles;
        this._tipoMidia = tipoMidia;
        this._ligado = ligado;
        this._jogando = jogando;
    }

    ligar(ligado){
        if (ligado) {
            console.log("O console já está ligado.");
        } else {
            this._ligado = true;
            console.log("O console foi ligado.");
        }
    }

    desligar(ligado){
        if (!ligado) {
            console.log("O console já está desligado.");
        } else {
            this._ligado = false;
            console.log("O console foi desligado.");
        }
    }

    jogar(){
        if(this._ligado == false){
            console.log("O console está desligado. Não é possível jogar.");
            return;
        }
        if(this._jogando) {
            console.log("Já está jogando.");
        } else {
            this._jogando = true;
            console.log("Iniciando o jogo.");
        }
    }

    salvar(){
        if(this._ligado == false || !this._jogando){
            console.log("Não é possível salvar o jogo.");
            return;
        }
        console.log("Jogo salvo.");
    }

    get marca(){
        return this._marca;
    }

    get nControles(){
        return this._nControles;
    }

    get tipoMidia(){
        return this._tipoMidia;
    }

    get ligado(){
        return this._ligado;
    }

    get jogando(){
        return this._jogando;
    }

    set marca(marca){
        this._marca = marca;
    }

    set nControles(nControles){
        this._nControles = nControles;
    }

    set tipoMidia(tipoMidia){
        this._tipoMidia = tipoMidia;
    }

    set ligado(ligado){
        this._ligado = ligado;
    }

    set jogando(jogando){
        this._jogando = jogando;
    }
}

var playstation = new VideoGame('sony', '2', 'dvd', false, false);
console.log(playstation);

playstation.ligar(playstation.ligado);
playstation.ligar(playstation.ligado);
playstation.jogar();
playstation.salvar();
playstation.jogar();

playstation.desligar(playstation.ligado);
playstation.salvar();