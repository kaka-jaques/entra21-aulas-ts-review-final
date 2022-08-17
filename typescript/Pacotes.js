import { Pacotes } from './PedidoData.js';
export class Pacote extends Pacotes {
    constructor(codigo, peso, envio, destino) {
        super(codigo, peso, envio, destino);
    }
    listarPacotes() {
        let result = '';
        for (let i = 0; i < Pacotes.length; i++) {
            result += '<span class="input-group-text" style="width: 120px;">' + this.getCodigo(i) + '</span>' + '<span class="input-group-text" style="width: 120px;">' + this.getDestino(i) + '</span>' + '<span class="input-group-text" style="width: 120px;">' + this.getEnvio(i) + '</span>' + '<span class="input-group-text" style="width: 120px;">' + this.getPeso(i) + '</span><br>';
        }
        return result;
    }
}
