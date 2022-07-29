import IConsole from "./IConsoles";

export default class Playstation implements IConsole{
    constructor(){
        console.log("Acessando Plataforma Playstation");
        this.configureGame();
    }
    configureGame(): void {
        this.authToken();
        console.log("jogo configurado");
    }
    authToken(): void {
        console.log("Conta playstation logada com sucesso!");
    }

}