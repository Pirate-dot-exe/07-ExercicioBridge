import IConsole from "../Consoles/IConsoles";
import IPlay from "./IPlay";

export default class Play implements IPlay{
    constructor(private _console : IConsole){}
    playing(): void {
        console.log("Contatando servidor...");
        console.log("Vinculando dados...");
        console.log("Entrando na partida!");
    }
    result(): void {
        console.log("running game at (xxxx)fps");
    }

}