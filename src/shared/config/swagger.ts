import swaggerConfig from '@shared/docs'
import { noCache } from '@shared/middlewares'

import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/api-docs', noCache, serve, setup(swaggerConfig))
}
