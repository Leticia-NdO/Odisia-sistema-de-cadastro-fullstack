import Router, { request } from "express";
import passport from 'passport'
import UserController from "./controllers/UserController.js";
import TokenControler from "./helpers/tokens.js"

const routes = Router()

// Rotas


routes.get('/', TokenControler.teste, (request, response)=>{ response.json({message: 'você está conectado!'})})

routes.post('/registro', UserController.create)
routes.delete('/logout', UserController.logout)
routes.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
}), (request, response) => {
    const user = request.session.passport.user
    response.status(200).json(user)
})
routes.get('/opa', TokenControler.authenticateToken, (request, response)=>{
    response.status(200).send("Tá funfando")
})
routes.put('/atualizar/:id', UserController.atualizar)
routes.get('/deletar/:id', UserController.deletar)
routes.get('/user/:id', TokenControler.authenticateToken, UserController.findOne)


export { routes }