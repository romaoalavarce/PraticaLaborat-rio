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

1- A API Django deverá possuir um Model com pelo menos 4 campos,
sendo que um deles deve ser obrigatoriamente BooleanField.
2- Filtro/pesquisa: a API deve estar preparada para buscas no endpoint
GET, exemplo: /api/jogos/?nome=mario.
3- Deve conter pelo menos os enpoints, GET,
POST E DELETE. Exemplo: /api/jogos/,
/api/jogos/1

FRONTEND
REQUISITOS
OBRIGATÓRIOS

1- listagem dos registros vindos da API Django criada por você
formulário para cadastrar um novo registro
2- botão para excluir
3- atualização da interface após cadastrar ou excluir
pelo menos 3 componentes React, além do App
utilização de useState, useEffect, Fetch para API e Map para lista/array de objetos
alguma renderização condicional. 
4- Filtro/pesquisa: você de criar um campo no React para pesquisar registros.
5- É proibido atualizar a página (window.location.reload()) após cadastrar ou excluir. A
interface deverá ser atualizada utilizando o estado do React.
6- Deve conter pelo menos um Componente.

FRONTEND
REQUISITOS
EXTRAS (BONUS)

1- Mostrar a quantidade total de registros cadastrados
Quando não houver registros, mostrar a mensagem “Nenhum item cadastrado.”
2- Loading: enquanto a requisição estiver acontecendo, exibir “Carregando .”.
3- Tratamento de erro: se a API falhar, mostrar uma mensagem amigável na
interface.
4- Validação: impedir envio de campos obrigatórios vazios e apresentar a
mensagem no frontend.
5- Ordenação: permitir ordenar por pelo menos um campo, como nome, data ou
preço.
6- Confirmação de exclusão: antes do DELETE, perguntar se o usuário realmente
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
