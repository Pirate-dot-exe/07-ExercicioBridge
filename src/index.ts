import IConsole from "./Consoles/IConsoles";
import Playstation from "./Consoles/Playstation";
import XBox from "./Consoles/XBox";
import AdvancedPlay from "./Play/AdvancedPlay";
import Play from "./Play/Play";

function startGameplay(consoles : IConsole){
    console.log("conectando");
    const gameplay = new Play(consoles);
    gameplay.playing();
    gameplay.result();
}
function startAdvancedGameplay(consoles : IConsole){
    console.log("Iniciando Serviços...");
    console.log("Sincronizando com a comunidade... 1/3");
    console.log("Sincronizando com a comunidade... 2/3");
    console.log("Sincronizando com a comunidade... 3/3");
    console.log("Loggando no servidor");
    const gameplay = new AdvancedPlay(consoles);
    gameplay.playing();
    gameplay.challenge();
    gameplay.result();
}

startGameplay(new XBox());
console.log();
startGameplay(new Playstation());
console.log();
startAdvancedGameplay(new XBox());