import IConsoles from "./IConsoles";
export default class XBox implements IConsoles{
    constructor(){
        console.log("Acessando plataforma XBOX");
        this.configureGame();
    }
    configureGame(): void {
        this.authToken();
        console.log("Iniciando configurações XBOX");
    }
    authToken(): void {
        console.log("Conta XBOX vinculada");
    }

}