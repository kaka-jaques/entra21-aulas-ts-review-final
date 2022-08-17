export class Pacotes {
    constructor(codigo, peso, envio, destino) {
        this.codigo = codigo;
        this.peso = peso;
        this.envio = envio;
        this.destino = destino;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    getCodigo(index) {
        return this.codigo.at(index);
    }
    setPeso(peso) {
        this.peso = peso;
    }
    getPeso(index) {
        return this.peso.at(index);
    }
    setEnvio(envio) {
        this.envio = envio;
    }
    getEnvio(index) {
        return this.envio.at(index);
    }
    setDestino(destino) {
        this.destino = destino;
    }
    getDestino(index) {
        return this.destino.at(index);
    }
}
