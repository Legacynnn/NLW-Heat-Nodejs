import {Router} from 'express'
import { UserController } from './controller/UserController'

const router = Router()

router.post('/authenticate', new UserController().handle)

export {router}