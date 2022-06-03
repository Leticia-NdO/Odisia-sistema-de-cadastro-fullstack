import jwt from 'jsonwebtoken'
import Usuario from '../models/Usuarios.js'
import Bundle from './bundle.js'
import { Address } from '../models/Users_Address.js'

class Control {


    async teste(request, response, next) {
        const token2 = request.headers.authorization
        console.log(token2)
        next()
    }

    async authenticateToken(request, response, next) {

        const token = request.headers.authorization

        if (!token) return response.status(403).send("Forbidden acess")

        if (token === undefined || null) return response.status(401)

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, result) => {
            if (err) {
                console.log(err)
                return response.status(403)
            }

            Bundle.setBundle(request, result, null)
            next()
        })
    }

    generateToken(user) {
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: 43200  // 12 hours
        })
    }
}

export default new Control()