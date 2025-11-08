const express = require('express');
const roteador = express.Router(); // Roteador "modular"

let clientes = [// simular uma array de  "banco de dados" de clientes
  { id: 1, nome: "Pedro", cidade: "Bombinhas" },
  { id: 2, nome: "Augusto", cidade: "Itajai" },
  { id: 3, nome: "Santos", cidade: "Blumenau" }
  ];
let proximoId = 4;

const validaDadosCliente = (requisicao, resposta, proximo) => {
    if (!requisicao.body.nome || !requisicao.body.cidade) {
    return resposta.status(400).send({ message: 'Nome e cidade sao obrigatorios' });
  }
  proximo();
  };

  roteador.post('/', validaDadosCliente, (requisicao, resposta) => {
  const novoCliente = {
    id: proximoId++,
    nome: requisicao.body.nome,
    cidade: requisicao.body.cidade
  };
  clientes.push(novoCliente);
  resposta.status(201).json(novoCliente);
});

roteador.get('/', (requisicao, resposta) => {

  const { cidade } = requisicao.query;

  if (cidade) {
    const clientesFiltrados = clientes.filter(c => c.cidade.toLowerCase() === cidade.toLowerCase());
    return resposta.json(clientesFiltrados);
  }

  resposta.json(clientes); // Se nao tiver filtro, manda todos

});

roteador.get('/:id', (requisicao, resposta) => {

  const { id } = requisicao.params;
  const cliente = clientes.find(c => c.id === parseInt(id));

  if (!cliente) {
    return resposta.status(404).send({ message: 'Cliente nao encontrado' });
  }

  resposta.json(cliente);
});

roteador.delete('/:id', (requisicao, resposta) => {
  const { id } = requisicao.params;
  const indice = clientes.findIndex(c => c.id === parseInt(id));

  if (indice === -1) {
    return resposta.status(404).send({ message: 'Cliente nao encontrado' });
  }

  clientes.splice(indice, 1);
  resposta.status(204).send();
});

module.exports = roteador;
