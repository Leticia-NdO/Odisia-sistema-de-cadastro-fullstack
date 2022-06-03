import InputMask from 'react-input-mask'


type Props = {
    value: string;
    onChange: any
}

const MaskedInputCEP = ({ value, onChange }: Props) => {
    return <InputMask mask={"99999-999"} defaultValue={value} placeholder='Insira seu CEP' onChange={onChange} name="cep" />
}

export default MaskedInputCEP