import { FormData } from "../../types/form"
import { validateEmail } from "../../utils/validate"
import MaskedInputCPF from "../maskedInput/MaskedInputCpf"


type Props = {
    formData: FormData,
    setFormData: Function,
}

function SignUpInfo({ formData, setFormData }: Props) {
// [ ]: transformar a função errorMessage em um componenete separado. 
// [ ]: Usar no componente errorMessage o switch/case
    const errorMessage = (field: string, content: any) => {
        if (field === "nome") {
            if (content.length <= 10) {
                return "O nome precisa ter mais de 10 caracteres"
            }
        }

        if (field === "email") {
            if (content === "") {
                return "O email precisa ser válido!"
            }
        }

        if (field === "senha"){
            if (content.length >= 16 || content.length <= 5){
                return "A senha precisa ter entre 5 e 16 caracteres"
            }
        }

        if (field === "cpf"){
            if (content.length < 11){
                return "Insira um CPF válido!"
            }
        }



        return (
            <>
            </>
        )
    }
    return (
        <>
            <div className='textfield'>
                <label htmlFor="nome">Nome</label>
                <input type="text" name='nome' placeholder='Insira seu nome completo' defaultValue={formData.nome} onChange={(event) => setFormData({ ...formData, nome: event.target.value })} />
                {/* event captura as propriedades do elemento
                ...formData pq eu só quero mudar um atributo desse objeto */}
                <span>{errorMessage("nome", formData.nome)}</span>
            </div>
            <div className='textfield'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Insira seu email' defaultValue={formData.email} onChange={(event) => {

                    // se o email for semanticamente válido, vai salvar o email
                    if (event.target.value !== "") {
                        if (validateEmail(event.target.value)) {
                            setFormData({ ...formData, email: event.target.value })
                        }
                    } else {
                        setFormData({ ...formData, email: "" })
                    }


                }} />
                <span>{errorMessage("email", formData.email)}</span>
            </div>

            <div className='textfield'>
                <label htmlFor="senha">Senha</label>
                <input type="password" name='senha' placeholder='Insira sua senha' defaultValue={formData.senha} onChange={(event) => {

                    console.log(event.target.value)
                    
                    if (event.target.value !== ""){
                        setFormData({ ...formData, senha: event.target.value })
                    } else {
                        setFormData({ ...formData, senha: "" })
                    }
                    
                    
                    }} />

                <span>{errorMessage("senha", formData.senha)}</span>
            </div>

            <div className='textfield'>
                <label htmlFor="cpf">CPF</label>
                <MaskedInputCPF value={formData.cpf} onChange={(event: any) => { setFormData({ ...formData, cpf: event.target.value }) }} />
                <span>{errorMessage("cpf", formData.cpf)}</span>
            </div>
        </>
    )
}

export default SignUpInfo