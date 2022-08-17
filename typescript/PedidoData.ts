export class Pacotes{

    private codigo:Array<string>
    private peso:Array<number>
    private envio:Array<string>
    private destino:Array<string>

    constructor(codigo:Array<string>, peso:Array<number>, envio:Array<string>, destino:Array<string>){

        this.codigo = codigo
        this.peso = peso
        this.envio = envio
        this.destino = destino

    }

    public setCodigo(codigo:Array<string>){
        this.codigo =codigo
    }

    public getCodigo(index:number):string{
        return this.codigo.at(index)
    }

    public setPeso(peso:Array<number>){
        this.peso = peso
    }

    public getPeso(index:number):number{
        return this.peso.at(index)
    }

    public setEnvio(envio:Array<string>){
        this.envio = envio
    }

    public getEnvio(index:number):string{
        return this.envio.at(index)
    }

    public setDestino(destino:Array<string>){
        this.destino = destino
    }

    public getDestino(index:number):string{
        return this.destino.at(index)
    }

}