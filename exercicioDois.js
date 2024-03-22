
const carro = {
    marca: "Mitsubishi",
    modelo: "Galant",
    ano: 2003,
    cor: "preto",
    numCavalos: 163,
    motor: "V6",
    qtdPortas: 4,
}

const propriedadesCarro = (object) => {
    for (const key in object) {       
        return Object.entries(object);
    }
}

console.log(propriedadesCarro(carro));
