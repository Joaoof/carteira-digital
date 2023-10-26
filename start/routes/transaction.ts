import Route from '@ioc:Adonis/Core/Route'


Route.post('/transaction', 'Auth/TransactionController.create')