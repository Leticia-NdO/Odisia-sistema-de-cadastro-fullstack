import { useNavigate } from "react-router-dom"
import "./styles.css"
import { User } from "../../types/user"
import { BASE_URL } from "../../utils/requests"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function DashboardForm() {

    const navigate = useNavigate()
    const params = useParams()
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

        axios.get(`${BASE_URL}/user/${params.id}`).then((result) => {

            const data = result.data as User
            console.log(params.id)
            console.log(data)
            console.log("olá")
            setUser(data)

        }).catch((err) => console.log(err))


    }, [params.id])

    return (
        <>

            <div className="dashboard-container">
                <h1>Olá {user.nome}!</h1>

                <div className='textfield'>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name='nome' placeholder={user.nome} disabled />
                </div>

                <div className='textfield'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder={user.email} disabled />
                </div>


                <div className='textfield'>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" name='cpf' placeholder={user.cpf} disabled />
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="pais">País</label>
                        <input type="text" name='pais' placeholder={user.address.pais} disabled />
                    </div>
                    <div className='dashboard-textfields'>
                        <label htmlFor="estado">Estado</label>
                        <input type="text" name='estado' placeholder={user.address.estado} disabled />
                    </div>
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="municipio">Município</label>
                        <input type="text" name='municipio' placeholder={user.address.municipio} disabled />
                    </div>

                    <div className='dashboard-textfields'>
                        <label htmlFor="cep">CEP</label>
                        <input type="text" name='cep' placeholder={user.address.cep} disabled />
                    </div>
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="rua">Rua</label>
                        <input type="text" name='rua' placeholder={user.address.rua} disabled />
                    </div>

                    <div className='dashboard-textfields'>
                        <label htmlFor="numero">Número</label>
                        <input type="type" name='numero' placeholder={user.address.numero} disabled />
                    </div>

                </div>

                <button onClick={() => navigate("/edit/1")}>Editar</button> <button onClick={() => navigate('/')}>Log out</button>
            </div>
        </>

    )
}

export default DashboardForm