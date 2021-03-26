import {
  LoginSchema,
  loginParamsSchema,
  userSchema,
  userParams,
  userResultSchema,
  errorSchema,
  toolSchema,
  toolParams,
  toolResultSchema,
} from './schemas/'

export default {
  login: LoginSchema,
  loginParams: loginParamsSchema,
  user: userSchema,
  userParams: userParams,
  userResult: userResultSchema,
  error: errorSchema,
  tool:toolSchema,
  toolParams:toolParams,
  toolResult:toolResultSchema
}
