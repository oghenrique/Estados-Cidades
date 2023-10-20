/************************************************************************************************
 * Objetivo: Criar uma estrutura de reptição para trazer informações sobre os estados do Brasil. 
 * Autor: Gustavo Henrique
 * Data: 20/10/2023
 * Versão: 1.0
************************************************************************************************/
var pais = require('./estados_cidades.js')

const getListaDeEstados = () => {
    let estados = pais.estadoCidades.estados
    let siglas = {}
    let uf = []

    estados.forEach(function(estado) {
        uf.push(estado.sigla)
    })

    siglas.uf = uf
    siglas.quantidade = pais.estadoCidades.estados.length
    console.log(siglas)

    return siglas
}
