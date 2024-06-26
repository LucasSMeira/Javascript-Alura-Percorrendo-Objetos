const carro = {
    marca: "Mitsubishi",
    modelo: "Galant",
    ano: 2003,
    cor: "preto",
    numCavalos: 163,
    motor: "V6",
    qtdPortas: 4,
    ligado: false,
    ligar: function () {
        if (!this.ligado) {
            this.ligado = true;
            console.log("O carro está ligado");
        }
        else{
            console.log("O carro já está ligado");
        }
    },
    desligar: function () {
        if (this.ligado) {
            this.ligado = false;
            console.log("O carro está desligado");
        }
        else{
            console.log("O carro já está desligado");
        }
    },
    obterDetalhes: function () {
        let detalhes = '';
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                detalhes += `${key}: ${this[key]}\n`;
            }
        }
        return detalhes.trim();
    }
}

console.log(carro.obterDetalhes(carro));
carro.ligar();
carro.desligar();
console.log(carro.obterDetalhes(carro));

Object.defineProperty(carro,'placa',{
    value: "4714ABC",
    enumerable: true, 
});

for (let key in carro) {
    console.log(key);
}

console.log(Object.keys(carro));
console.log(carro.placa);

const carroNovo = {
    marca: "Mitsubishi",
    modelo: "Galant",
    ano: 2003,
    cor: "preto",
}

const carroComNovosDetalhes = {
    ...carroNovo,
    ...carro,
    offroad: false,
    combustivel: "gasolina",
}

console.log(carroComNovosDetalhes);