import { Pacote } from "../typescript/Pacotes.js";

let pacotes:Pacote = new Pacote(['BR12312312'], [200], ['Brusque'], ['São Paulo'])

$('#show').append(pacotes.listarPacotes())

