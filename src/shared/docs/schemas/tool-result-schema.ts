export const toolResultSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    link: {
      type: 'string',
    },
    description: {
      type: 'string'
    },
    tags: {
      type: 'string'
    },
    created_at : {
      type: 'string'
    },
    updated_at: {
      type: 'string'
    },
  },
}
