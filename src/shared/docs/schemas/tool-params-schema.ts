export const toolParams = {
  type: 'object',
  properties: {
    title: {
      type: 'string'
    },
    link: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    tags: {
      type: 'string'
    }
  },
  required: ['accessToken', 'name']
}
