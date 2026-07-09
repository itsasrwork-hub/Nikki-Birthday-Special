// Password
const PASSWORD = "10072000";

// Loading Screen
setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("passwordScreen").classList.remove("hidden");
}, 2500);

// Password Check
function checkPassword(){

    const input = document.getElementById("pass").value;

    if(input === PASSWORD){

        document.getElementById("passwordScreen").classList.add("hidden");

        document.getElementById("hero").classList.remove("hidden");

    }else{

        alert("Oops ❤️\n\nOnly Nikki can open this surprise.");

    }

}

// Hero Button
function openStory(){

    alert("❤️ Story page is coming in the next step ❤️");

}

// Stars
for(let i=0;i<120;i++){

    let star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=(1+Math.random()*3)+"s";

    document.body.appendChild(star);

}
