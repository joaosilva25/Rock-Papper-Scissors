let submit=document.querySelector(".name")
let game_name=document.querySelector("h1")
let nome_player=document.querySelector("input");
let nome_presentation= document.querySelector("h5");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissors");
let rock=document.querySelector(".rock");



function game() {

    let player_name= nome_player.value;

    if (player_name !="") {
        nome_player.style.display="none";
        submit.style.display="none";

        game_name.innerHTML="<h1>Choose your Match <h1>";
        nome_presentation.innerHTML=`<h5 class="text-center">Hey ${player_name}</h5>`;
        paper.innerHTML="<button class=btn1 onclick=Paper()><img src=assets/images/papper.png></button>";
        scissor.innerHTML="<button class=btn2 onclick=Scissor()><img src=assets/images/Scissor.png></button>";
        rock.innerHTML="<button class=btn3 onclick=Rock()><img src=assets/images/rock.png></button>";
    }
    else {
        nome_presentation.innerHTML=`<h5>Required Name</h5>`;
    }

    let cpu=[1,2,3]
    let random_cpu=Math.floor(Math.random()* cpu.length);
    let cpu_res=cpu[random_cpu];

    console.log(cpu_res);

}

function Paper() {
    paper.innerHTML =`<img class="imagem"src=assets/images/papper.png></img>`;
    scissor.innerHTML=`<h2>X</h2>`;

    let random1=rock.innerHTML=`<img class="imagem"src='assets/images/papper.png'</img>`;
    let random2=rock.innerHTML=`<img class="imagem"src='assets/images/Scissor.png'</img>`;
    let random3=rock.innerHTML=`<img class="imagem"src='assets/images/rock.png'</img>`;


    let cpu=[`${random1}`,`${random2}`,`${random3}`];
    let random_cpu=Math.floor(Math.random()* cpu.length);
    let cpu_res=cpu[random_cpu];

    rock.innerHTML=cpu_res;

    if (cpu_res==cpu[0]) {
        game_name.innerHTML="<h1>Partida empatada</h1>"
    }
    else if (cpu_res==cpu[1]) {
        game_name.innerHTML="<h1>Você perdeu</h1>"
    }
    else if (cpu_res==cpu[2]) {
        game_name.innerHTML="<h1>Você Ganhou</h1>"
    }

}

function Scissor() {
    paper.innerHTML =`<img class="imagem" src=assets/images/Scissor.png></img>`;
    scissor.innerHTML=`<h2>X</h2>`;

    let random1=rock.innerHTML=`<img class="imagem" src='assets/images/papper.png'</img>`;
    let random2=rock.innerHTML=`<img class="imagem" src='assets/images/Scissor.png'</img>`;
    let random3=rock.innerHTML=`<img class="imagem" src='assets/images/rock.png'</img>`;


    let cpu=[`${random1}`,`${random2}`,`${random3}`];
    let random_cpu=Math.floor(Math.random()* cpu.length);
    let cpu_res=cpu[random_cpu];

    rock.innerHTML=cpu_res;

    if (cpu_res==cpu[0]) {
        game_name.innerHTML="<h1>Você Ganhou</h1>"
    }
    else if (cpu_res==cpu[1]) {
        game_name.innerHTML="<h1>Partida Empatada</h1>"
    }
    else if (cpu_res==cpu[2]) {
        game_name.innerHTML="<h1>Você Perdeu</h1>"
    }

}


function Rock() {
    paper.innerHTML =`<img class="imagem" src=assets/images/rock.png></img>`;
    scissor.innerHTML=`<h2>X</h2>`;


    let random1=rock.innerHTML=`<img class="imagem" src='assets/images/papper.png'</img>`;
    let random2=rock.innerHTML=`<img class="imagem" src='assets/images/Scissor.png'</img>`;
    let random3=rock.innerHTML=`<img class="imagem" src='assets/images/rock.png'</img>`;


    let cpu=[`${random1}`,`${random2}`,`${random3}`];
    let random_cpu=Math.floor(Math.random()* cpu.length);
    let cpu_res=cpu[random_cpu];

    rock.innerHTML=cpu_res;

    if (cpu_res==cpu[0]) {
        game_name.innerHTML="<h1>Você Perdeu</h1>"
    }
    else if (cpu_res==cpu[1]) {
        game_name.innerHTML="<h1>Você Ganhou</h1>"
    }
    else if (cpu_res==cpu[2]) {
        game_name.innerHTML="<h1>Partida Empatada</h1>"
    }

}