function mensagem(nome, sobrenome){
    console.log(`Olá ${nome} ${sobrenome}, eu sou uma função!`);
}

mensagem("João", "Silva");

const mensagem2 = (nome, sobrenome) => {
    console.log(`Olá ${nome} ${sobrenome}, eu sou uma arrow function!`);
}

mensagem2("João", "Silva");
