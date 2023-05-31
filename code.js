
function game() {
    let submit=document.querySelector(".name")
    let game_name=document.querySelector("h1")
    let nome_player=document.querySelector("input");
    let nome_presentation= document.querySelector("h5");
    let player_name= nome_player.value;

    if (player_name !="") {
        nome_player.style.display="none";
        submit.style.display="none";

        game_name.innerHTML="<h1>Chose your Match <h1>";
        nome_presentation.innerHTML=`<h5 class="text-center">Hey ${player_name}</h5>`;
    }
    else {
        nome_presentation.innerHTML=`<h5>Required Name</h5>`;
    }
}