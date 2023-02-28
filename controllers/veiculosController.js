require('dotenv').config();
const axios = require("axios");
const https = require('https');

// Ignora autorização SSL do axios
const instance = axios.create({ 
    httpsAgent: new https.Agent({ rejectUnauthorized: false  })
});

exports.ListagemVeiculos = async (req, res, next) => {
    try
    {
        var Request = await instance.get(process.env.ENDPOINT+"Veiculo/GetVeiculos")

        var Response = Request.data;

        return Response;

    }
    catch(error){
        console.log(error);
    }
};

exports.CreateVeiculo = async (req, res, next) => {
    try
    {
        // Retorna dados da view do cliente
        var obj = req.body;

        // Modela json pra requisição enviando pro backend
        const model = {
                "id_veiculo": 0,
                "data_cadastro": "2022-10-21T20:12:04.335Z",
                "id_placa": 0,
                "id_cor": 0,
                "km": 0,
                "id_modelo": 0
        }

        // Executa ação 
        var Request = await instance.post(process.env.ENDPOINT+"Veiculo/createVeiculo", model)

        // Retorna valores da Endpoint
        var Response = Request.data;

        // Envia para camada de rotas da aplicação node.js
        return Response;

    }
    catch(error){
        console.log(error);
    }
};


exports.ListagemModelos = async (req, res, next) => {
    try
    {
        var Request = await instance.get(process.env.ENDPOINT+"Modelo/GetModelos")
        
        var Response = Request.data;

        return Response;

    }
    catch(error){
        console.log(error);
    }
};

exports.ListagemCores = async (req, res, next) => {
    try
    {
        var Request = await instance.get(process.env.ENDPOINT+"Cor/GetCores")
        
        var Response = Request.data;

        return Response;

    }
    catch(error){
        console.log(error);
    }
};