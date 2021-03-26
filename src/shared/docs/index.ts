import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'TNM - TESTE',
    description: 'Essa é a documentação da API feita pelo Desenvoledor Mateus Sousa usando Typescript, TDD, Clean Architecture e seguindo os princípios do SOLID',
    version: '1.0.0',
    contact: {
      name: 'Mateus Sousa',
      email: 'sousa.programador@gmail.com',
      url: 'github'
    },
    license: {
      name: '****',
      url: '****'
    }
  },
  externalDocs: {
    description: '##',
    url: '###'
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Login',
    description: 'APIs relacionadas a Login'
  },
  {
    name: 'Tool',
    description: 'APIs relacionadas a Ferramentas'
  },
  {
    name: 'User',
    description: 'APIs para manipulacao de usuarios'
  }
  ],
  paths,
  schemas,
  components
}
