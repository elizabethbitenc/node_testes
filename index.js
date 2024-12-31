import assert from 'node:assert/strict'

const somaHorasExtras = (salario, valorHorasExtras) => {
    return salario + valorHorasExtras
}

const calculaDescontos = (salario, descontos) => {
    return salario - descontos
}

export{
    somaHorasExtras,
    calculaDescontos,
}

const verifiqueSe = (valor) => {
    const assercoes = {
        igual(esperado){
            assert.strictEqual(valor, esperado);
        }
    } 
    return assercoes
}

const teste = (titulo, funcaoDeTeste) => {
    try{
        funcaoDeTeste()
        console.log(`${titulo} passou!`)
    }
    catch{
        console.error(`${titulo} não passou!`)
    }
}

teste('somaHorasExtras', () => {
    const esperado = 2500
    const retornado = somaHorasExtras(2000, 500)

    verifiqueSe(retornado).igual(esperado)
})

teste('calculaDesconto', () => {
    const esperado = 2300
    const retornado = calculaDescontos(2500, 300)

    assert.strictEqual(retornado, esperado)
})