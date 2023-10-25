import Route from '@ioc:Adonis/Core/Route'

Route.post('/signup', 'Auth/AuthController.signup')
Route.post('/signin', 'Auth/AuthController.signin')

