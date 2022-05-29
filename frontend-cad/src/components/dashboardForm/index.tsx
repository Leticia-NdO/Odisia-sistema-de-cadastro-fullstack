import { useNavigate } from "react-router-dom"
import "./styles.css"

function DashboardForm() {
    
    const navigate = useNavigate()

    return (
        <>

            <div className="dashboard-container">
                <h1>Olá fulano</h1>
                <div className='textfield'>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name='nome' placeholder='nome' disabled/>
                </div>

                <div className='textfield'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='email' disabled/>
                </div>


                <div className='textfield'>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" name='cpf' placeholder='cpf' disabled/>
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="pais">País</label>
                        <input type="text" name='pais' placeholder='país' disabled/>
                    </div>
                    <div className='dashboard-textfields'>
                        <label htmlFor="estado">Estado</label>
                        <input type="text" name='estado' placeholder='Estado' disabled/>
                    </div>
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="municipio">Município</label>
                        <input type="text" name='municipio' placeholder='municipio' disabled/>
                    </div>

                    <div className='dashboard-textfields'>
                        <label htmlFor="cep">CEP</label>
                        <input type="text" name='cep' placeholder='cep' disabled/>
                    </div>
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="rua">Rua</label>
                        <input type="text" name='rua' placeholder='rua' disabled/>
                    </div>

                    <div className='dashboard-textfields'>
                        <label htmlFor="numero">Número</label>
                        <input type="type" name='numero' placeholder='numero' disabled/>
                    </div>

                </div>

                <button onClick={()=> navigate("/edit/1")}>Editar</button> <button onClick={() => navigate('/')}>Log out</button>
            </div>
        </>

    )
}

export default DashboardForm