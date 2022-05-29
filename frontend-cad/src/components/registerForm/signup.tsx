import { FormData } from "../../types/form"


type Props = {
    formData: FormData,
    setFormData: Function,
}

function SignUpInfo({ formData, setFormData }: Props) {
    return (
        <>
            <div className='textfield'>
                <label htmlFor="nome">Nome</label>
                <input type="text" name='nome' placeholder='Insira seu nome completo' defaultValue={formData.nome} onChange={(event)=> setFormData({...formData, nome: event.target.value})}/> 
                {/* event captura as propriedades do elemento
                ...formData pq eu só quero mudar um atributo desse objeto */}
            </div>
            <div className='textfield'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Insira seu email' defaultValue={formData.email} onChange={(event)=> setFormData({...formData, email: event.target.value})}/>
            </div>

            <div className='textfield'>
                <label htmlFor="senha">Senha</label>
                <input type="password" name='senha' placeholder='Insira sua senha' defaultValue={formData.senha} onChange={(event)=> setFormData({...formData, senha: event.target.value})}/>
            </div>

            <div className='textfield'>
                <label htmlFor="cpf">CPF</label>
                <input type="text" name='cpf' placeholder='Insira seu CPF' defaultValue={formData.cpf} onChange={(event)=> setFormData({...formData, cpf: event.target.value})}/>
            </div>
        </>
    )
}

export default SignUpInfo