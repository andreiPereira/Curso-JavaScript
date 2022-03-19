import { Cliente } from "./Cliente.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(agencia, cliente) {
  
        ContaCorrente.numeroDeContas += 1;
    }


}