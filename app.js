/*************************************************************************
 * Objetivo: Criar uma API para responder dados de Estados e Cidades     *
 * Autor: Gustavo Henrique                                               *
 * Data: 10/11/2023                                                      *
 * Versão: 1.0                                                           *
**************************************************************************/

/**
 * Instalações das dependencias para criação da API
 *  express     -> npm install express --save
 *      Dependencia do node para auxiliar na criação de API
 *  cors        -> npm install cors --save
 *      Dependencia para manipular recursos de acesso, permissões, etc da API
 *  body-parser -> npm install body-parser --save
 *      Dependencia para auxiliar na chegada de dados na API
 */

//Import das bibliotecas do projeto
const express = require('express')
const cors = require('cors')
const bodyParser= require('body-parser')

//Cria um objeto app tendo como referencia a classe do express
const app = express()

//request - Receber dados
//response - Devolve dados

app.use((request, response, next)=>{
    //Configura quem poderá fazer requisições na API (* libera para todos | IP restringe o acesso)
    response.header('Access-Control-Allow-Origin', '*')
    //Configura os metodos que poderão ser utilizados na API (GET, POST, PUT e DELETE)
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

//EndPoints: listar a sigla de todos os Estados
app.get('/estados/sigla', cors(), async(request, response, next) =>{

    let controleListaEstados = require('./modulo/atividade_estados.js')
    let estados = controleListaEstados.getListaDeEstados()
    response.json(estados)
    response.status(200)
})

//EndPoints: retorna os dados do estados filtrando pela sigla
app.get('/estado/sigla/:uf', cors(), async(request, response, next) =>{
    //Recebe uma variavel encaminhada por parametro na URL da requisição
    let siglaEstado = request.params.uf
    
    let controleDadosEstado = require('./modulo/atividade_estados.js')
    let dadosEstado = controleDadosEstado.getDadosEstado(siglaEstado)
    
    if(dadosEstado){
        response.json(dadosEstado)
        response.status(200)
    }else{
        response.status(404)
        response.json({erro: "Não foi possivel encontrar um item"})
    }
    
})

//EndPoint: Retorna os dados da Capital fitrando pela sigla
app.get('/capital/estado', cors(), async(request, response, next) =>{
    //Recebe parametros via query, que são variaveis encaminhadas na URL da requisição (?uf=SP)
    let siglaEstado = request.query.uf

    let controleDadosCapital = require('./modulo/atividade_estados.js')
    let dadosCapital = controleDadosCapital.getCapitalEstado(siglaEstado)

    if(dadosCapital){
        response.json(dadosCapital)
        response.status(200)
    }else{
        response.status(404)
        response.json({erro: "Não foi possivel encontrar um item"})
    }
})

//Executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
console.log('É NADA, falta só as requisições')
})