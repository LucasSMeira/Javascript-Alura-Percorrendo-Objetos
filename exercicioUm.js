
const pessoa = {
    nome: "Fax",
    notas:[9,6,7,8,7.5],
    mediaNotas: function () {
        let soma = 0;
        this.notas.forEach(element => {
            soma+= element;
        });

        return soma/this.notas.length;
    },
    classificarDesempenho: function () {
        const valor = this.mediaNotas;
        if (valor >= 9) {
            console.log("Desempenho excelente");
        } else if (valor => 7.5 && valor <= 8.9) {
            console.log("Bom desempenho");
        } else if (valor >=6 && valor <= 7.5) {
            console.log("Desempenho regular");
        } else {
            console.log("Desempenho insuficiente");
        }
    },

}

console.log(pessoa.mediaNotas(pessoa.notas));
pessoa.classificarDesempenho(pessoa.mediaNotas(pessoa.notas));
