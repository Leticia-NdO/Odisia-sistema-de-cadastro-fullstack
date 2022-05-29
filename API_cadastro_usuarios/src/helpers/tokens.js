import jwt from 'jsonwebtoken'

class Control {

    async authenticateToken(request, response, next) {

        const authHeader = response.getHeaders('authorization').authorization // é o valor do headers no campo authorization, que terá o valor: Bearer *token*
        const token = authHeader && authHeader.split(' ')[1] // Se o campo authorization não estiver vazio, a const token será o elemento [1] do valor em authorization, ou seja, o que vem depois de Bearer (o token)
        if (token == null) return response.sendStatus(401) // se o campo authorization estiver vazio, token será null

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {  // se não estiver vazio, ele vai pegar o token e deserializar ele usando a chave.
            if (err) return response.sendStatus(403)  // se a deserialização não funcionar com a chave, dá erro.
            request.user = user // se for possível deserializar com a chave, devolverá o request.user
            next()
        })
    }

    generateToken(user) {
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    }
}

export default new Control()