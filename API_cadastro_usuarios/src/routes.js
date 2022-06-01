import Router from "express";
import passport from 'passport'
import UserController from "./controllers/UserController.js";
import Control from "./helpers/tokens.js"

const routes = Router()

// Rotas


routes.get('/', (request, response)=>{ response.json({message: 'você está conectado!'})})

routes.get('/dashboard/:id', UserController.dashboard2)
routes.post('/registro', UserController.create)
routes.delete('/logout', UserController.logout)
routes.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
}), (request, response) => {
    const user = request.session.passport.user
    response.status(200).json(user)
})
routes.get('/editar/:id', UserController.editarRender)
routes.put('/atualizar/:id', UserController.atualizar)
routes.get('/deletar/:id', UserController.deletar)
routes.get('/user/:id', UserController.findOne)


export { routes }