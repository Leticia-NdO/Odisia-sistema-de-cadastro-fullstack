import InputMask from 'react-input-mask'


type Props = {
    value: string;
    onChange: any;
}

const MaskedInputCPF = ({ value, onChange }: Props) => {
    return <InputMask mask={"999.999.999-99"} defaultValue={value} placeholder="Insira seu CPF" onChange={onChange} name="cpf" />
}

export default MaskedInputCPF