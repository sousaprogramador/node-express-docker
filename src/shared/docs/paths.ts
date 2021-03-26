import {
  userPath,
  userResultPath,
  loginPath,
  toolPath,
  toolResultPath,
} from './paths/'

export default {
  '/login': loginPath,
  '/user': userPath,
  '/user/{Id}' : userResultPath,
  '/tool': toolPath,
  '/tool/{Id}' : toolResultPath,
}
