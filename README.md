# 🐾 Pet Shelter API

Uma API Express.js tipada, construída com TypeScript para gerenciar o inventário de um abrigo de animais. Consulte e recupere informações de pets com filtragem integrada, middlewares personalizados e um sistema de requisição/resposta totalmente tipado.

## Sobre Este Projeto

**Pet Shelter API** é um projeto de aprendizado que demonstra a construção de uma API RESTful com Express.js e TypeScript. Ele fornece endpoints para navegar pelos pets disponíveis para adoção, filtrados por espécie, idade, status de adoção e muito mais. A API apresenta conceitos-chave de desenvolvimento backend, incluindo rotas tipadas, middlewares customizados, controllers e gerenciamento de dados.

## Principais Recursos

  - **API Totalmente Tipada**: Construída com TypeScript para segurança de tipos em rotas, controllers e middlewares.
  - **Filtragem Avançada**: Filtre pets por espécie, faixa etária e status de adoção.
  - **Middlewares Customizados**: Validação de requisição (verificação de ID numérico) e middleware de autenticação.
  - **Arquitetura de Roteamento**: Separação clara de responsabilidades usando roteadores e controllers do Express.
  - **Suporte a CORS**: Pré-configurado para requisições de diferentes origens.
  - **Dados Ricos dos Pets**: Inclui registros médicos, histórico de vacinação e rastreamento de adoção.

## Primeiros Passos

### Pré-requisitos

  - Node.js (v18 ou superior recomendado)
  - npm ou seu gerenciador de pacotes preferido

### Instalação

1.  **Clone o repositório**

    ```bash
    git clone https://github.com/obrnocsta/pet-shelter-api.git
    cd pet-shelter-api
    ```

2.  **Instale as dependências**

    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento**

    ```bash
    npm start
    ```

    O servidor iniciará em `http://localhost:8000`

## Uso

### Listar Todos os Pets

Recupere uma lista de todos os pets no abrigo:

```bash
curl http://localhost:8000/pets
```

**Resposta:**

```json
[
  {
    "id": 1,
    "name": "Bella",
    "species": "Dog",
    "breed": "Border Collie",
    "age": 3,
    "adopted": false,
    "intakeDate": "2024-06-15T00:00:00.000Z",
    "medicalRecord": {
      "vaccinations": ["Rabies", "Distemper", "Parvovirus"],
      "weightKg": 18.4,
      "microchipId": null
    },
    "photo": "bella-border-collie.jpg"
  },
  ...
]
```

### Filtrar Pets por Parâmetros de Consulta (Query Params)

**Por Espécie:**

```bash
curl "http://localhost:8000/pets?species=Dog"
```

**Por Status de Adoção:**

```bash
curl "http://localhost:8000/pets?adopted=false"
```

**Por Faixa Etária:**

```bash
curl "http://localhost:8000/pets?minAge=2&maxAge=5"
```

**Combinar Múltiplos Filtros:**

```bash
curl "http://localhost:8000/pets?species=Cat&adopted=false&maxAge=3"
```

### Obter um Pet Específico

Recupere um pet pelo ID (requer autenticação):

```bash
curl "http://localhost:8000/pets/1?password=please"
```

**Nota:** Este endpoint requer um parâmetro de consulta `password` definido como `"please"` e o ID do pet deve ser numérico.

**Resposta:**

```json
{
  "id": 1,
  "name": "Bella",
  "species": "Dog",
  "breed": "Border Collie",
  "age": 3,
  "adopted": false,
  ...
}
```

## Estrutura do Projeto

```
src/
├── index.ts                 # Ponto de entrada do servidor e config. do Express
├── data/
│   └── pets.ts              # Dados dos pets e definições de tipos
├── routes/
│   └── pets.routes.ts       # Definições de rotas
├── controllers/
│   └── pets.controllers.ts   # Manipuladores de requisição e lógica de negócio
└── middlewares/
    └── pets.middleware.ts    # Middlewares customizados (auth, validação)
```

## Endpoints da API

| Método | Endpoint | Parâmetros de Consulta | Descrição |
|--------|----------|------------------------|-------------|
| GET | `/pets` | `species`, `adopted`, `minAge`, `maxAge` | Lista todos os pets com filtros opcionais |
| GET | `/pets/:id` | `password` | Obtém um pet específico (requer password="please") |

## Parâmetros de Consulta

  - **`species`** (string): Filtra pela espécie do pet (ex: "Dog", "Cat", "Rabbit")
  - **`adopted`** (boolean): Filtra pelo status de adoção ("true" ou "false")
  - **`minAge`** (number): Idade mínima do pet em anos
  - **`maxAge`** (number): Idade máxima do pet em anos

## Stack Tecnológica

  - **Express.js**: Framework web
  - **TypeScript**: Linguagem para segurança de tipos
  - **CORS**: Compartilhamento de recursos entre origens
  - **dotenv**: Gerenciamento de variáveis de ambiente
  - **tsx**: Executor TypeScript para desenvolvimento

## Variáveis de Ambiente

Crie um arquivo `.env` no diretório raiz para configurar:

```env
PORT=8000
```

A API usará a porta 8000 por padrão se não for especificada.

## Próximos Passos e Melhorias Futuras

Este projeto fornece uma base sólida para um sistema de gerenciamento de abrigos. Considere estas melhorias:

  - **Integração com Banco de Dados**: Substituir os dados em memória por SQLite, MySQL ou PostgreSQL.
  - **Operações Assíncronas**: Implementar controllers assíncronos e manipuladores de erro para consultas ao banco.
  - **Desenvolvimento Frontend**: Construir uma interface web ou mobile para consumir esta API.
  - **Endpoints Adicionais**: Adicionar operações POST, PUT e DELETE para o gerenciamento de pets.
  - **Validação**: Implementar validação do corpo da requisição para novas entradas de pets.
  - **Tratamento de Erros**: Adicionar um middleware abrangente para tratamento de erros.
  - **Testes**: Escrever testes unitários e de integração para os endpoints.

## Suporte e Recursos

  - **Documentação do Express.js**: [expressjs.com](https://expressjs.com/)
  - **Documentação do TypeScript**: [typescriptlang.org](https://www.typescriptlang.org/)
  - **Melhores Práticas de API REST**: Veja os comentários no código-fonte para entender as decisões de design.

## Contribuição

Contribuições são bem-vindas\! Para começar:

1.  Faça um Fork do repositório
2.  Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3.  Comite suas mudanças (`git commit -m 'Add amazing feature'`)
4.  Dê um Push na branch (`git push origin feature/amazing-feature`)
5.  Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença ISC - veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.

-----

**Mantenedor**: [@obrnocsta](https://github.com/obrnocsta)

Construído como um projeto de aprendizado para os fundamentos de Express.js e TypeScript.
