import Usuario from "../models/Usuarios.js";
import { Address } from "../models/Users_Address.js";
import bcrypt from 'bcrypt'
import Control from '../helpers/tokens.js'



class UserController {

    async create(request, response) {

        const hashedSenha = await bcrypt.hash(request.body.senha, 10)
        const requestBody = request.body

        Usuario.create({

            nome: request.body.nome,
            email: request.body.email,
            senha: hashedSenha,
            cpf: request.body.cpf,

        }).then((usuario) => {

            const usuarioDataValues = usuario.dataValues

            Address.create({
                pais: requestBody.pais,
                estado: requestBody.estado,
                municipio: requestBody.municipio,
                cep: requestBody.cep,
                rua: requestBody.rua,
                numero: requestBody.numero,
                user_Id: usuarioDataValues.id
            }).then((address) => {

                response.status(200).json({ usuario: usuario, endereco: address })
            })



        }).catch((err) => {
            response.send('Não foi possível cadastrar o novo usuário. Tente novamente mais tarde.')
            console.log(err)
        })

    }

    async dashboard(request, response, next) {

        const requestUser = request.user.dataValues
        // const accessToken = request.user.accessToken
        // response.setHeader('authorization', `Bearer ${accessToken}`)

        await Address.findOne({
            where: {
                user_Id: requestUser.id
            }
        }).then(async (address) => {

            const userWhole = {        // criar um novo objeto com os dados pessoais e o endereço
                ...requestUser,
                address: address.dataValues
            }

            Control.authenticateToken()
            response.json(userWhole);

            const auth = response.getHeaders('authorization').authorization

        })

    }
    async dashboard2(request, response) {

        await Usuario.findOne({
            where: {
                id: request.params.id
            }
        })
            .then((usuario) => {
                Address.findOne({
                    where: {
                        user_Id: usuario.id
                    }
                }).then((address) => {

                    const userWhole = {
                        ...usuario.dataValues,
                        address: address.dataValues
                    }

                    response.status(200).json(userWhole)

                })

            })
    }

    logout(request, response) {
        request.logOut()
        response.redirect('/')
    }

    async editarRender(request, response) {

        await Usuario.findOne({
            where: {
                id: request.params.id
            }
        })
            .then((usuario) => {
                Address.findOne({
                    where: {
                        user_Id: usuario.id
                    }
                }).then((address) => {

                    const userWhole = {
                        ...usuario.dataValues,
                        address: address.dataValues
                    }

                    console.log(userWhole)
                    response.status(200).json(userWhole)

                })

            })
    }

    async atualizar(request, response) {

        await Usuario.update({
            nome: request.body.nome,
            email: request.body.email,
            cpf: request.body.cpf,
        }, {
            where: {
                id: request.params.id
            }
        }).then((usuario) => {

            Address.update({
                pais: request.body.pais,
                estado: request.body.estado,
                municipio: request.body.municipio,
                cep: request.body.cep,
                rua: request.body.rua,
                numero: request.body.numero,
            }, {
                where: {
                    user_Id: request.params.id
                }
            }).then((address)=>{
                const userWhole = {
                    ...usuario.dataValues,
                    address: address.dataValues
                }

                response.status(200).json(userWhole)
            })

            
        })

    }

    async deletar(request, response) {

        await Address.destroy({
            where: {
                user_Id: request.params.id
            }
        })

        await Usuario.destroy({
            where: {
                id: request.params.id
            }
        }).then(() => {
            response.redirect('/login')
        })

    }

    async findOne(request, response) {
        
        await Usuario.findOne({
            where: {
                id: request.params.id
            }
        })
            .then((usuario) => {
                Address.findOne({
                    where: {
                        user_Id: usuario.id
                    }
                }).then((address) => {

                    const userWhole = {
                        ...usuario.dataValues,
                        address: address.dataValues
                    }

                    console.log(userWhole)
                    response.status(200).json(userWhole)

                })

            })
    }

}


export default new UserController()