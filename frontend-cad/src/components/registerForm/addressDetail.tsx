import { FormData } from '../../types/form'

type Props = {
    formData: FormData,
    setFormData: Function,
}

function AddressDetail({ formData, setFormData }: Props) {
    return (
        <>
            <div className='textfield'>
                <label htmlFor="cep">CEP</label>
                <input type="text" name='cep' placeholder='Insira seu CEP' defaultValue={formData.cep} onChange={(event) => setFormData({ ...formData, cep: event.target.value })}/>
            </div>
            <div className='textfield'>
                <label htmlFor="rua">Rua</label>
                <input type="text" name='rua' placeholder='Insira o nome da sua rua' defaultValue={formData.rua} onChange={(event) => setFormData({ ...formData, rua: event.target.value })}/>
            </div>
            <div className='textfield'>
                <label htmlFor="numero">Número</label>
                <input type="text" name='numero' placeholder='Insira o número da sua residência' defaultValue={formData.numero} onChange={(event) => setFormData({ ...formData, numero: event.target.value })}/>
            </div>
        </>
    )
}

export default AddressDetail
