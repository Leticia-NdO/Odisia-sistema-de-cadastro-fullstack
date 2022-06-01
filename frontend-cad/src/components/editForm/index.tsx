import { useNavigate } from "react-router-dom"
import { User } from "../../types/user"
import { BASE_URL } from "../../utils/requests"
import axios, { AxiosRequestConfig } from "axios"
import { useEffect, useState } from "react"
import { FormData } from "../../types/form"

type Props = {
    userId: string
}

function EditForm({ userId }: Props) {

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

    const [form, setForm] = useState<FormData>({
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

    useEffect(() => {

        axios.get(`${BASE_URL}/user/${userId}`).then((result) => {

            const data = result.data as User
            setForm({
                nome: data.nome,
                email: data.email,
                senha: data.senha,
                cpf: data.cpf,
                pais: data.address.pais,
                estado: data.address.estado,
                municipio: data.address.municipio,
                cep: data.address.cep,
                rua: data.address.rua,
                numero: data.address.numero
            })
            setUser(data)

        }).catch((err) => console.log(err))


    }, [userId])

    return (
        <>
            <div className="dashboard-container">
                <h1>Editar informações</h1>

                <div className='textfield'>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name='nome' defaultValue={user.nome} onChange={(event) => {
                        setForm({ ...form, nome: event.target.value })
                    }} />
                </div>

                <div className='textfield'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' defaultValue={user.email} onChange={(event) => {
                        setForm({ ...form, email: event.target.value })
                    }} />
                </div>


                <div className='textfield'>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" name='cpf' defaultValue={user.cpf} onChange={(event) => {
                        setForm({ ...form, cpf: event.target.value })
                    }} />
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="pais">País</label>
                        <input type="text" name='pais' defaultValue={user.address.pais} onChange={(event) => {
                            setForm({ ...form, pais: event.target.value })
                        }} />
                    </div>
                    <div className='dashboard-textfields'>
                        <label htmlFor="estado">Estado</label>
                        <input type="text" name='estado' defaultValue={user.address.estado} onChange={(event) => {
                            setForm({ ...form, estado: event.target.value })
                        }} />
                    </div>
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="municipio">Município</label>
                        <input type="text" name='municipio' defaultValue={user.address.municipio} onChange={(event) => {
                            setForm({ ...form, municipio: event.target.value })
                        }} />
                    </div>

                    <div className='dashboard-textfields'>
                        <label htmlFor="cep">CEP</label>
                        <input type="text" name='cep' defaultValue={user.address.cep} onChange={(event) => {
                            setForm({ ...form, cep: event.target.value })
                        }} />
                    </div>
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="rua">Rua</label>
                        <input type="text" name='rua' defaultValue={user.address.rua} onChange={(event) => {
                            setForm({ ...form, rua: event.target.value })
                        }} />
                    </div>

                    <div className='dashboard-textfields'>
                        <label htmlFor="numero">Número</label>
                        <input type="type" name='numero' defaultValue={user.address.numero} onChange={(event) => {
                            setForm({ ...form, numero: event.target.value })
                        }} />
                    </div>

                </div>

                <button onClick={() => {
                    const config: AxiosRequestConfig = {
                        baseURL: BASE_URL,
                        method: 'PUT',
                        url: `/atualizar/${user.id}`,
                        data: form
                    }

                    axios(config).then((response) => {
                        window.alert("Informações atualizadas com sucesso!")
                    }).catch((err) => {
                        console.log(err)
                    })
                }}>Salvar</button> <button onClick={() => navigate(`/dashboard/${userId}`)}>Voltar</button>

                <button onClick={() => {
                    if (window.confirm("Você realmente deseja excluir o seu perfil?")) {
                        axios.get(`${BASE_URL}/deletar/${userId}`).then(() => navigate("/"))
                    }
                }}>Excluir perfil</button>
            </div>
        </>
    )
}

export default EditForm