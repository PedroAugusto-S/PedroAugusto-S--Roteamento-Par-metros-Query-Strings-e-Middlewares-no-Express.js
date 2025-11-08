Opa professor, esse aqui é o trabalho de programacao web sobre express:

Eu fiz um pequeno projeto que cadastra clientes, usando o que foi pedido ( e bastante do que o professor fez na aula de hoje) na atividade

Para rodar o projeto, é só ter o node js instalado, abrir o terminal na pasta e digitar npm install, e depois digitar npm start

O servidor vai começar a rodar na porta 3000

Sobre os conceitos que o senhor pediu pra explicar:

Roteamento
A diferenca de fazer as rotas no servidor js e usar o Roteador e mais sobre organizacao. Se a gente faz tudo no servidor js, ele fica gigante e confuso. Quando a gente usa o Roteador, a gente pode criar um arquivo so pras rotas de clientes, outro so pras de produtos, e ai o servidor js fica limpo, so chamando os arquivos de rotas.

Parametros de Rota
O parametro de rota é quando a gente quer pegar um valor que vem no proprio endereco, tipo o id do cliente. Por exemplo, na rota clientes barra um, esse um e o parametro. A gente usa ele pra buscar ou apagar um cliente especifico. No codigo a gente pega ele usando o requisicao ponto params.

Filtros de Busca ou Query Strings
O filtro de busca e o que vem depois do ponto de interrogacao no endereco, e serve pra filtrar coisas. Por exemplo, em clientes?cidade=blumenau. A gente usa pra filtrar a lista de clientes. No codigo a gente pega usando o requisicao ponto query. A diferenca é que o parâmetro de rota é para pegar um item específico, e o filtro e pra filtrar uma lista.

Middlewares: O middleware é basicamente uma função que roda no meio do caminho de uma requisicao.
Eu fiz os tres tipos que o professor pediu.
Um global, que roda em todas as requisicoes, so pra avisar no console que chegou uma requisição nova.
Um de rota, que só roda na hora de criar um cliente novo, pra ver se a pessoa mandou o nome e a cidade no corpo da requisicao.
E o de erro, que fica la no final, e se alguma coisa quebrar, ele que manda a resposta de erro.

Rotas da API
Eu criei as rotas de clientes
POST em barra clientes, para criar um cliente novo, tem que mandar o nome e a cidade
GET em barra clientes, para listar todos os clientes
GET em barra clientes com filtro, tipo barra clientes interrogação cidade igual blumenau, pra filtrar por cidade
GET em barra clientes barra id, tipo barra clientes barra um, pra buscar o cliente com id um
DELETE em barra clientes/id, pra apagar um cliente.
