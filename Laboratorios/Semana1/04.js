const processarMensagem = (mensagem, callback) => callback(mensagem);

const exibirMensagem = (mensagem) => console.log(mensagem);

processarMensagem("Olá, mundo!", exibirMensagem);

const concatenarStrings = (str) => "*** Atenção: " + str + "! ***";

processarMensagem(concatenarStrings("Sistema Instável"), exibirMensagem);

const calculaCaracteres = (mensagem) => console.log(`Resumo: A mensagem contém ${mensagem.length} caracteres.`);

processarMensagem("Mensagem de teste", calculaCaracteres);

const verificaCaixa = (mensagem) => {
    for (let index = 0; index < mensagem.length; index++) {
        const element = mensagem[index];
        if (element === element.toUpperCase()) {
            var maiusculo = true;
        } else if (element === element.toLowerCase()) {
            var minusculo = true;
        }
    }

    if(maiusculo == minusculo && maiusculo == true) {
        console.log("A mensagem contém letras maiúsculas e minúsculas.");
    } else if(maiusculo == true) {
        console.log("Mensagem em caixa alta: tudo em maiúsculas.");
    } else if(minusculo == true) {
        console.log("Mensagem em caixa baixa: tudo em minúsculas.");
    }
}

processarMensagem("mensagem", verificaCaixa);