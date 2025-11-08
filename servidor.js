const express = require('express');
const aplicativo = express();
const porta = 3000;

aplicativo.use(express.json());



aplicativo.use((requisicao, resposta, proximo) => {
  console.log('Chegou uma requisicao nova'); // Vai rodar para toda e qualquer requisicao
  proximo(); // Manda a requisicao continuar
});

aplicativo.get('/', (requisicao, resposta) => {
  resposta.send('API de Clientes funcionando');
});

const rotasDeClientes = require('./rotas/clientes.rotas.js');
aplicativo.use('/clientes', rotasDeClientes);

aplicativo.use((erro, requisicao, resposta, proximo) => {
  console.error(erro.stack);
  resposta.status(500).send('Algo deu muito errado kkkk');
});

aplicativo.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta} "http://localhost:3000/"`);
});