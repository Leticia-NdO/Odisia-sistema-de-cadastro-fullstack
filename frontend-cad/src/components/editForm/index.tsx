import { useNavigate } from "react-router-dom"
import { User } from "../../types/user"
import { BASE_URL } from "../../utils/requests"
import axios from "axios"
import { useEffect, useState } from "react"

type Props = {
    userId: string
}

function EditForm({userId}: Props) {

    const navigate = useNavigate()

    
    const [user, setUser] = useState<User>({
        id: 0,
        nome: "",
        email: "",
        senha: "",
        cpf: "",
        createdAt: "",
        updatedAt: "",
        address: {
            id: 0,
            pais: "",
            estado: "",
            municipio: "",
            cep: "",
            rua: "",
            numero: "",
            user_Id: 0
        },
    })

    useEffect(() => {

        axios.get(`${BASE_URL}/user/${userId}`).then((result) => {

            const data = result.data as User
            console.log(userId)
            console.log(data)
            console.log("olá")
            setUser(data)

        }).catch((err) => console.log(err))


    }, [userId])

    return (
        <>
            <div className="dashboard-container">
                <h1>Olá {user.nome}!</h1>

                <div className='textfield'>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name='nome' placeholder={user.nome} />
                </div>

                <div className='textfield'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder={user.email} />
                </div>


                <div className='textfield'>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" name='cpf' placeholder={user.cpf} />
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="pais">País</label>
                        <input type="text" name='pais' placeholder={user.address.pais} />
                    </div>
                    <div className='dashboard-textfields'>
                        <label htmlFor="estado">Estado</label>
                        <input type="text" name='estado' placeholder={user.address.estado} />
                    </div>
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="municipio">Município</label>
                        <input type="text" name='municipio' placeholder={user.address.municipio} />
                    </div>

                    <div className='dashboard-textfields'>
                        <label htmlFor="cep">CEP</label>
                        <input type="text" name='cep' placeholder={user.address.cep} />
                    </div>
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="rua">Rua</label>
                        <input type="text" name='rua' placeholder={user.address.rua} />
                    </div>

                    <div className='dashboard-textfields'>
                        <label htmlFor="numero">Número</label>
                        <input type="type" name='numero' placeholder={user.address.numero} />
                    </div>

                </div>

                <button>Salvar</button> <button onClick={() => navigate(`/dashboard/${userId}`)}>Voltar</button>
            </div>
        </>
    )
}

export default EditForm