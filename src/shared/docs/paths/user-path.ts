export const userPath = {
  get: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['User'],
    summary: 'API para listar todas os users',
    description: 'Essa rota só pode ser executada por **usuários autenticados**',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/user'
            }
          }
        }
      },
      204: {
        description: 'Sucesso, mas sem dados para exibir'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },
  post : {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['User'],
    summary: 'API para criar usuarios',
    description: 'Essa rota pode ser executada por **usuario autenticado**',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/userParams'
          }
        }
      }
    },
    responses: {
      201: {
        description: 'created'
      },
      400: {
        $ref: '#/components/badRequest'
      },
      401: {
        $ref: '#/components/unauthorized'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
