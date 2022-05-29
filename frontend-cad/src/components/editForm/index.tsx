import { useNavigate } from "react-router-dom"

function EditForm() {

    const navigate = useNavigate()

    return (
        <>
            <div className="dashboard-container">
                <h1>Olá fulano</h1>
                <div className='textfield'>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name='nome' placeholder='nome' />
                </div>

                <div className='textfield'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='email' />
                </div>


                <div className='textfield'>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" name='cpf' placeholder='cpf' />
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="pais">País</label>
                        <input type="text" name='pais' placeholder='país' />
                    </div>
                    <div className='dashboard-textfields'>
                        <label htmlFor="estado">Estado</label>
                        <input type="text" name='estado' placeholder='Estado' />
                    </div>
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="municipio">Município</label>
                        <input type="text" name='municipio' placeholder='municipio' />
                    </div>

                    <div className='dashboard-textfields'>
                        <label htmlFor="cep">CEP</label>
                        <input type="text" name='cep' placeholder='cep' />
                    </div>
                </div>

                <div className="sideside">
                    <div className='dashboard-textfields'>
                        <label htmlFor="rua">Rua</label>
                        <input type="text" name='rua' placeholder='rua' />
                    </div>

                    <div className='dashboard-textfields'>
                        <label htmlFor="numero">Número</label>
                        <input type="type" name='numero' placeholder='numero' />
                    </div>

                </div>

                <button>Salvar</button> <button onClick={() => navigate('/dashboard/1')}>Voltar</button>
            </div>
        </>
    )
}

export default EditForm