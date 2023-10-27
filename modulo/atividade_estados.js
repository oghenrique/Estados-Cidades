/************************************************************************************************
 * Objetivo: Criar uma estrutura de reptição para trazer informações sobre os estados do Brasil. 
 * Autor: Gustavo Henrique
 * Data: 20/10/2023
 * Versão: 1.0
************************************************************************************************/
var estadosBrasil = require('./estados_cidades.js')

const getListaDeEstados = function() {
    let estados = estadosBrasil.estadosCidades.estados
    let siglas = {}
    let uf = []

    estados.forEach(function(estado) {
        uf.push(estado.sigla)
    })

    siglas.uf = uf
    siglas.quantidade = estadosBrasil.estadosCidades.estados.length
    console.log(siglas)

    return siglas
}

const getDadosEstado = function(siglaEstado){
    let sigla = siglaEstado.toUpperCase()
    let estados = estadosBrasil.estadosCidades.estados
    let dadosEstado = {}

    estados.forEach(function(estado){
        if (estado.sigla.includes(sigla)){
            dadosEstado.uf = estado.sigla
            dadosEstado.descricao = estado.nome
            dadosEstado.capital = estado.capital
            dadosEstado.regiao = estado.regiao
        }
    })
     console.log(dadosEstado)
     return dadosEstado
}

const getCapitalEstado = function(siglaEstado){
    let sigla = siglaEstado.toUpperCase()
    let capitais = estadosBrasil.estadosCidades.estados
    let dadosCapital = {}

    capitais.forEach(function (estadosBrasil){
        if(estadosBrasil.sigla.includes(sigla)){
            dadosCapital.uf = estadosBrasil.sigla
            dadosCapital.descricao = estadosBrasil.nome
            dadosCapital.capital = estadosBrasil.capital
        }
    })

    return dadosCapital

}

const getEstadosRegiao




console.log(getCapitalEstado('sp'))
// getDadosEstado('ba')
// getListaDeEstados()