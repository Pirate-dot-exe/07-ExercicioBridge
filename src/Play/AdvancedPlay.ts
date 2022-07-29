import IConsole from "../Consoles/IConsoles";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(console: IConsole){
        super(console);
    }
    challenge() : void{
        console.log("iniciando desafios do jogo");
        console.log("Desafios Semanais");
        console.log("Desafios da Comunidade");
    }
}