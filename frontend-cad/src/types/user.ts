import { Address } from "./address";

export type User = {
    id: number;
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    createdAt: string;
	updatedAt: string;
    address: Address;
}