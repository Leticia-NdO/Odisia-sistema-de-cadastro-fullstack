import InputMask from 'react-input-mask'
import './styles.css'


type Props = {
    value: string;
    onChange: any;
    placeholder: string;
}

const MaskedInputCEPEdit = ({ value, onChange, placeholder }: Props) => {
    return <InputMask className='inputMask' mask={"99999-999"} defaultValue={value} placeholder={placeholder} onChange={onChange} name="cep" />
}

export default MaskedInputCEPEdit