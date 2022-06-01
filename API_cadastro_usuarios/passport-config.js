// import LocalStrategy from 'passport-local'
import bcrypt from 'bcrypt'
import LocalStrategy from 'passport-local'
import Usuario from './src/models/Usuarios.js'
import Control from "./src/helpers/tokens.js"

const localStrategy = LocalStrategy.Strategy

function initialize(passport) {

    const authenticateUser = (email, senha, done) => {

        Usuario.findOne({ where: { email: email } }).then(async(usuario) => {
            if (!usuario) {
                return done(null, false, { message: "Essa conta não existe" })
            } 

            await bcrypt.compare(senha, usuario.senha, (erro, batem) => {
                if (batem) {

                    const accessToken = Control.generateToken(usuario.dataValues)
                    const newusuario = [{...usuario.dataValues}, accessToken]  // esse array que será enviado ao front
                    return done(null, newusuario)
                    
                } else {
                    return done(null, false, { message: "senha incorreta" })
                }
            })
        })
    }

    passport.use(new localStrategy({ usernameField: 'email', passwordField: 'senha' }, authenticateUser))
    passport.serializeUser((usuario, done) => {
        done(null, usuario)
    })
    passport.deserializeUser((usuario, done) => {
        done(null, usuario)
    })
}



export default initialize
