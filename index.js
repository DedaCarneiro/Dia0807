function benVindo(){
    document.write("Bem Vindo !!!");
}

benVindo();

function calculaIdade(ano, mes){
    let anoAtual = new Date().getFullYear();
    let mesAtual = new Date().getMonth() + 1;
    if(mes >= mesAtual){
        document.write(`A Idade de Thiago é ${anoAtual - ano}<br>`);
    else{
        document.write(``)
    }
    }
}