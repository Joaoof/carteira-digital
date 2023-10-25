import Route from '@ioc:Adonis/Core/Route'
import { connectDb } from 'Config/database'

Route.post('/signup', 'Auth/AuthController.signup')

connectDb()