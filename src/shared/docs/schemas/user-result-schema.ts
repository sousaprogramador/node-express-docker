export const userResultSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    email: {
      type: 'string',
    },
    password: {
      type: 'string'
    },
    created_at : {
      type: 'string'
    },
    updated_at: {
      type: 'string'
    },
  },
  required: ['surveyId', 'question', 'answers', 'date']
}
