import './styles.css'
function LoginCard() {



    return (
        <>
            <div className="form-container">

                <div className='logintitle'>
                    <h1>BEM-VINDO!</h1>
                    <p>Já tem cadastro? Faça login e cheque seus dados.</p>
                </div>

                <div className='textfield'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Insira seu email' />
                </div>

                <div className='textfield'>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name='password' placeholder='Insira sua senha' />
                </div>

                <button className='btn-login'>Login</button>

                <p className='registercall'>Ainda não tem uma conta? <a href="/register">Cadastre-se de graça!</a></p>

            </div>
        </>
    )
}

export default LoginCard
