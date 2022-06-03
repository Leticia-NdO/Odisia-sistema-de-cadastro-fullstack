import InputMask from 'react-input-mask'


type Props = {
    value: string;
    onChange: any;
    placeholder: any
}

const MaskedInputCPFEdit = ({ value, onChange, placeholder }: Props) => {
    return <InputMask className='inputMask' mask={"999.999.999-99"} defaultValue={value} placeholder={placeholder} onChange={onChange} name="cpf" />
}

export default MaskedInputCPFEdit