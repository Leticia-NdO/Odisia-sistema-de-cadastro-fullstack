import { useState } from "react"
import Address from "./address"
import AddressDetail from "./addressDetail"
import SignUpInfo from "./signup"
import './styles.css'
import { FormData } from "../../types/form"
import { useNavigate } from 'react-router-dom';
import axios, { AxiosRequestConfig } from "axios"
import { BASE_URL } from "../../utils/requests"


function RegisterForm() {

    const [page, setPage] = useState(0)
    const [filledIn, setFilledIn] = useState("")
    const [formData, setFormData] = useState<FormData>({
        nome: "",
        email: "",
        senha: "",
        cpf: "",
        pais: "default",
        estado: "default",
        municipio: "",
        cep: "",
        rua: "",
        numero: ""
    })


    const FormTitles = ['Informações pessoais', 'Endereço', 'Detalhes de endereço']
    const navigate = useNavigate();


    const StepDisplay = () => {
        if (page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData} />

        } else if (page === 1) {
            return <Address formData={formData} setFormData={setFormData} />
        }

        return <AddressDetail formData={formData} setFormData={setFormData} />
    }

    return (
        <div className="registercard">

            <div className="form-container">

                <div className="progressbar">


                    <div style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}>
                        <p style={{ color: "white", fontWeight: 800 }}>{page === 0 ? "1" : page === 1 ? "2" : "3"}</p>
                    </div>



                </div>

                <div className="card-header">
                    <h1>{FormTitles[page]}</h1>
                </div>

                <div className="card-body">
                    {StepDisplay()}  {/* dependendo da página, essa função vai retornar um componente diferente */}
                </div>

                <div className="card-footer">

                    <button onClick={() => {

                        if (page === 0) {
                            navigate('/')
                        } else {
                            setPage((currPage => currPage - 1))
                        }

                    }}
                    >Voltar</button>

                    <button onClick={() => {
                        if (page === 2) {

                            const config: AxiosRequestConfig = {
                                baseURL: BASE_URL,
                                method: 'POST',
                                url: '/registro',
                                data: formData
                            }

                            axios(config).then((response) => {
                            
                                // [ ]: mostar mensagem de erro se o email já existir no banco de dados
                                console.log(response.data.usuario)
                                if (response.data.usuario) {
                                    navigate(`/dashboard/${response.data.usuario.id}`)
                                }
                            })



                        } else {
                            if (page === 0 && (formData.nome === "" || formData.email === "" || formData.cpf === "" || formData.senha === "")) {
                                return setFilledIn("Por favor, preencha todos os campos")
                            }
                            if (page === 1 && (formData.pais === "default" || formData.estado === "default" || formData.municipio === "")) {
                                return setFilledIn("Por favor, preencha todos os campos")
                            }
                            if (page === 2 && (formData.cep === "" || formData.rua === "" || formData.numero === "")) {
                                return setFilledIn("Por favor, preencha todos os campos")
                            }
                            else {
                                setFilledIn("")
                            }
                            return setPage((currPage => currPage + 1))
                        }
                    }}
                    >{page === 2 ? "Enviar" : "Próximo"}</button>
                </div>
                <span>{filledIn}</span>
            </div>
        </div>
    )
}

export default RegisterForm