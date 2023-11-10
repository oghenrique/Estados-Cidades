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

//Executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
console.log('É NADA, falta só as requisições')
})