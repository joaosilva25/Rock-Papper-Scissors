
function game() {
    let submit=document.querySelector(".name")
    let game_name=document.querySelector("h1")
    let nome_player=document.querySelector("input");
    let nome_presentation= document.querySelector("h5");
    let paper=document.querySelector(".paper");
    let scissor=document.querySelector(".scissors");
    let rock=document.querySelector(".rock");

    let player_name= nome_player.value;

    if (player_name !="") {
        nome_player.style.display="none";
        submit.style.display="none";

        game_name.innerHTML="<h1>Choose your Match <h1>";
        nome_presentation.innerHTML=`<h5 class="text-center">Hey ${player_name}</h5>`;
        paper.innerHTML="<button class=btn1><img src=assets/images/papper.png></button>";
        scissor.innerHTML="<button class=btn2><img src=assets/images/Scissor.png></button>";
        rock.innerHTML="<button class=btn3><img src=assets/images/rock.png></button>";
    }
    else {
        nome_presentation.innerHTML=`<h5>Required Name</h5>`;
    }

    let cpu=[1,2,3]
    let random_cpu=Math.floor(Math.random()* cpu.length);
    let cpu_res=cpu[random_cpu];

    console.log(cpu_res);




}