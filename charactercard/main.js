const characters = [
    {
        name: "Snortleblat",
        class: 1,
        level: 1,
        health: 100,
        deathMessage: "blurb. You dead",
        imgUrl: "snortleblat.webp",
        attacked: function(){
            this.health = Math.max(0, this.health - 20);
        },

        levelUp: function(){
            this.level += 1;
        }
    },

    {
        name: "Judy Hopps",
        class: 2,
        level: 1,
        health: 100,
        deathMessage: "You're dead fluffy bunny",
        imgUrl: "character_zootopia_judy.jpeg",
        attacked: function(){
            this.health = Math.max(0, this.health - 20);
        },

        levelUp: function(){
            this.level += 1;
        }
    },
]

const card = document.querySelector(".card");

characters.forEach((item, index) => {
    let articleDiv = `
    <div class="character-card" id="char-${index}">
        <img src="${item.imgUrl}" width="400" height="400" alt="Profile image of ${item.name}" loading="${index === 0 ? 'eager' : 'lazy'}" fetchpriority="${index === 0 ? 'high' : 'auto'}">
        <h1 class="name">${item.name}</h1>
        <div class="stats">
            <p class="class">Class: ${item.class}</p>
            <p class="level">Level: ${item.level}</p>
            <p class="health">Health: ${item.health}</p>
        </div>
        <div class="buttons">
            <button class="attacked" type="button">Attacked</button>
            <button class="lvlup" type="button">Level Up</button>
        </div>
    </div>
    `;
    card.innerHTML += articleDiv;
})

characters.forEach((item, index) => {
    const cardEl = document.getElementById(`char-${index}`);
    const attackButton = cardEl.querySelector(".attacked");
    const lvlupButton = cardEl.querySelector(".lvlup");

    attackButton.addEventListener("click", () => {

        const healthChange = cardEl.querySelector(".health");
        item.attacked();

        healthChange.textContent = `Health: ${item.health}`;
        if(item.health == 0){
            setTimeout(() => {
                alert(item.deathMessage);
            }, 0);
        }
    });

    lvlupButton.addEventListener("click", () => {
        const lvlChange = cardEl.querySelector(".level");
        item.levelUp();

        lvlChange.textContent = `Level: ${item.level}`;
    });
})
