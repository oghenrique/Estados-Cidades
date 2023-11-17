/************************************************************************************************
 * Objetivo: Criar uma estrutura de reptição para trazer informações sobre os estados do Brasil. 
 * Autor: Gustavo Henrique
 * Data: 20/10/2023
 * Versão: 1.0
************************************************************************************************/
var estadosBrasil = require('./estados_cidades.js')

const getListaDeEstados = function () {
    let estados = estadosBrasil.estadosCidades.estados
    let siglas = {}
    let uf = []

    estados.forEach(function (estado) {
        uf.push(estado.sigla)
    })

    siglas.uf = uf
    siglas.quantidade = estadosBrasil.estadosCidades.estados.length

    return siglas
}

const getDadosEstado = function (siglaEstado) {
    let sigla = siglaEstado.toUpperCase()
    let estados = estadosBrasil.estadosCidades.estados
    let dadosEstado = {}
    let status = false

    estados.forEach(function (estado) {
        if (estado.sigla.includes(sigla)) {
            dadosEstado.uf = estado.sigla
            dadosEstado.descricao = estado.nome
            dadosEstado.capital = estado.capital
            dadosEstado.regiao = estado.regiao
            status = true
        }
    })

    if (status)
        return dadosEstado
    else
        return false

}

const getCapitalEstado = function (siglaEstado) {
    let sigla = siglaEstado.toUpperCase()
    let capitais = estadosBrasil.estadosCidades.estados
    let dadosCapital = {}
    let status = false

    capitais.forEach(function (estadosBrasil) {
        if (estadosBrasil.sigla.includes(sigla)) {
            dadosCapital.uf = estadosBrasil.sigla
            dadosCapital.descricao = estadosBrasil.nome
            dadosCapital.capital = estadosBrasil.capital
            status = true
        }
    })

    if (status)
        return dadosCapital
    else
        return false

}

const getEstadosRegiao = function (regiaoSelecionada) {
    const regiao = regiaoSelecionada.toUpperCase()

    const estados = estadosBrasil.estadosCidades.estados

    let infoRegiao = {}
    infoRegiao.regiao = regiao

    let estadosDaRegiao = []

    estados.forEach(function (estado) {
        if (estado.regiao.toUpperCase().includes(regiao)) {
            let infoEstado = {
                uf: estado.sigla,
                descricao: estado.nome,
            };

            estadosDaRegiao.push(infoEstado)
        }
    })

    infoRegiao.estados = estadosDaRegiao

    return infoRegiao
}

const getCapitalPais = function () {

    const estados = estadosBrasil.estadosCidades.estados

    let informacoesCapitaisPais = {}
    let listaCapitais = []

    estados.forEach(function (estado) {
        if (estado.capital_pais !== undefined) {
            let infoEstado = {
                capital_atual: estado.capital_pais.capital,
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
                ano_inicio_capital_pais: estado.capital_pais.ano_inicio,
                ano_termino_capital_pais: estado.capital_pais.ano_fim
            }

            listaCapitais.push(infoEstado)
        }
    })

    informacoesCapitaisPais.capitais = listaCapitais

    return informacoesCapitaisPais
}


const getCidades = function (siglaEstado) {

    let estados = estadosBrasil.estadosCidades.estados

    let uf = siglaEstado.toUpperCase()

    let estadoCidades = {}
    let cidades = []

    estados.forEach(function (estado) {
        if (estado.sigla.toUpperCase().includes(uf)) {
            estadoCidades.uf = estado.sigla
            estadoCidades.descricao = estado.nome
            estadoCidades.quantidade_cidades = estado.cidades.length

            estado.cidades.forEach(function (cidade) {
                cidades.push(cidade.nome)
            })
        }
    })

    estadoCidades.cidades = cidades
    return estadoCidades
}

module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}