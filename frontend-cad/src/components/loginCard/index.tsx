import axios, { AxiosRequestConfig } from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utils/requests'
import './styles.css'

function LoginCard() {

    const [loginRequest, setLoginRequest] = useState({
        email: "",
        senha: ""
    })

    const navigate = useNavigate()

    return (
        <>
            <div className="form-container">

                <div className='logintitle'>
                    <h1>BEM-VINDO!</h1>
                    <p>Já tem cadastro? Faça login e cheque seus dados.</p>
                </div>

                <div className='textfield'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Insira seu email' onChange={(event) => setLoginRequest({ ...loginRequest, email: event.target.value })} />
                </div>

                <div className='textfield'>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name='senha' placeholder='Insira sua senha' onChange={(event) => setLoginRequest({ ...loginRequest, senha: event.target.value })}/>
                </div>

                <button className='btn-login' onClick={() => {
                    const config: AxiosRequestConfig = {
                        baseURL: BASE_URL,
                        method: 'POST',
                        url: '/login',
                        data: loginRequest
                    }

                    axios(config).then((response) => {
                        if(response.status === 200){                            
                            navigate(`/dashboard/${response.data[0].id}`)
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
                }}>Login</button>

                <p className='registercall'>Ainda não tem uma conta? <a href="/register">Cadastre-se de graça!</a></p>

            </div>
        </>
    )
}

export default LoginCard
