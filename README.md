# <h1 align= center>  Shimbalaiê PUB

  <img src= "https://cdn.pixabay.com/photo/2013/11/12/01/29/bar-209148_1280.jpg">
</h1>

<h3 align= center>

[Sobre](#-Sobre) ♦
[Tecnologias](#tecnologias) ♦
[Baixar Projeto](#como-instalar-o-projeto) ♦
[Rotas](#rotas-do-projeto) ♦
[Integrantes](#grupo-5)

</h3>



##  Sobre 
Projeto realizado com o intuito de aprimorar habilidades em construção de API's e finalização do Módulo 4, do curso de Desenvolvimento Web FullStack da Resilia Educação. 
Foram criadas 5 API's com entidade diferentes de um PUB. Para construção do projeto seguimos o padrão MVC e utilização dos verbos HTTP. 



## Tecnologias


| Node.js | SQLite |  Insomnia|


## Como instalar o projeto
``` bash 
git clone https://github.com/CarolVilarino/Pub-do-Calvo-e-Petiscaria

code . 

npm install
(no terminal vscode)

npm start
```
# Rotas do Projeto 
#### Entidades:
- Fornecedor
- Produto
- Funcionarios
- Pedido
- Cliente
           
### Exemplo de rotas

| Verbo HTTP | Rota  | Funcionalidade |
| ---------- | ----- | -------------- |
| **GET** | `http://localhost:3200/produto` | Pega todos os produtos|
| **GET** | `http://localhost:3200/produto/{id}` | Pega os produtos por por {id} |
| **POST** | `http://localhost:3030/fornecedor` | Cadrastra novo Fornecedor |
| **PUT** | `http://localhost:3030/fornecedor/{id}` | Altera fornecedor  por {id} |
| **DELETE** | `http://localhost:---/funcionario/{id}` | Deleta funcionario por {id} |

### Resultados:

``` bash
//Produto
		{
		"ID": 3,
		"NOME": "Tequila",
		"MARCA": "paris",
		"FORNECEDOR": "cavalheirosDistribuidora",
		"ESTOQUE": "100L",
		"VALOR": "R$15"
	}

```



### Grupo 5

- [Lorrane Rocha](https://github.com/LorraneRochaS)
- [Sabrina Szemberg](https://github.com/SabrinaSzemberg)
- [Carol Vilarino](https://github.com/CarolVilarino)
- [Matheus Ocihara](https://github.com/mathocihara)
- [Isaque Rodrigues](https://github.com/isaquerodrigues00)









