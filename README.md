# PraticaLaborat-rio
PRÁTICA
LABORATÓRIO
3,0 PONTOS
Desenvolva uma aplicação web
de tema livre utilizando React
no frontend e Django no
backend. 
O Django deverá disponibilizar
uma API REST responsável pela
persistência dos dados,
enquanto o React deverá
consumir essa API.
Exemplos:
Biblioteca - Livros 
Games - Jogos 
Cinema - Filmes 
Academia- Exercícios 
Restaurante - Pratos 
Pet Shop - Animais 
Loja - Produtos 
Escola - Cursos 
Música - Músicas 
Eventos - Eventos
Frontend (React)
Utilizar 
Componentes e State
API (Django)
GET POST DELETE 
Banco de Dados
ESPERADA ARQUITETURA
HTTP/JSON
API
REQUISITOS
OBRIGATÓRIOS
A API Django deverá possuir um Model com pelo menos 4 campos,
sendo que um deles deve ser obrigatoriamente BooleanField.
Filtro/pesquisa: a API deve estar preparada para buscas no endpoint
GET, exemplo: /api/jogos/?nome=mario. 
Deve conter pelo menos os enpoints, GET,
POST E DELETE. Exemplo: /api/jogos/,
/api/jogos/1
FRONTEND
REQUISITOS
OBRIGATÓRIOS
listagem dos registros vindos da API Django criada por você
formulário para cadastrar um novo registro
botão para excluir
atualização da interface após cadastrar ou excluir
pelo menos 3 componentes React, além do App
utilização de useState, useEffect, Fetch para API e Map para lista/array de objetos
alguma renderização condicional. 
Filtro/pesquisa: você de criar um campo no React para pesquisar registros.
É proibido atualizar a página (window.location.reload()) após cadastrar ou excluir. A
interface deverá ser atualizada utilizando o estado do React.
Deve conter pelo menos um Componente.
FRONTEND
REQUISITOS
EXTRAS (BONUS)
Mostrar a quantidade total de registros cadastrados
Quando não houver registros, mostrar a mensagem “Nenhum item cadastrado.”
Loading: enquanto a requisição estiver acontecendo, exibir “Carregando .”.
Tratamento de erro: se a API falhar, mostrar uma mensagem amigável na
interface.
Validação: impedir envio de campos obrigatórios vazios e apresentar a
mensagem no frontend.
Ordenação: permitir ordenar por pelo menos um campo, como nome, data ou
preço.
Confirmação de exclusão: antes do DELETE, perguntar se o usuário realmente
deseja excluir.
AVALIAÇÃO
API Django funcionando e persistindo os dados
React consumindo e listando os dados da API
Cadastro pelo React utilizando POST
Exclusão pelo React utilizando DELETE
Componentização adequada + useState + useEffect
Interface, organização e funcionamento geral
Códigos no GitHub e link no NEAD
Ao final, você será solicitado a realizar uma alteração na hora, e terá 7
minutos para executa-la e mostrar funcionando. Obs: sem consultas
