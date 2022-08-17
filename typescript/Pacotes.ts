import { Pacotes } from './PedidoData.js'

export class Pacote extends Pacotes{

    constructor(codigo:Array<string>, peso:Array<number>, envio:Array<string>, destino:Array<string>){
        super(codigo, peso ,envio, destino)
    }

    listarPacotes():string{

        let result = ''

        for (let i = 0; i < Pacotes.length; i++) {
            result += '<span class="input-group-text" style="width: 120px;">'+this.getCodigo(i)+'</span>'+'<span class="input-group-text" style="width: 120px;">'+this.getDestino(i)+'</span>'+'<span class="input-group-text" style="width: 120px;">'+this.getEnvio(i)+'</span>'+'<span class="input-group-text" style="width: 120px;">'+this.getPeso(i)+'</span><br>'    
        }

        return result
    }

}