/// code pokemon

function isLuck(luck){
    return (luck > Math.random() );
}

function attackPokemon(poke1Att,poke2Def){
    return (poke1Att - poke2Def )
}

class pokemon {
    constructor(name, attack, hp,defense,luck){
        this.name = name;
        this.attack =attack ;
        this.hp =hp ;
        this.defense =defense ;
        this.luck = luck ;
    }

}

let joe = new pokemon ("Joe","200","150","100","0.5")
let obamna = new pokemon ("Obamna","250","200","100","0.7")

while (joe.hp > 0 && obamna.hp > 0) {
    if (isLuck(joe.luck)){
        console.log("pv enlevé à obamna" +attackPokemon(joe.attack,obamna.defense));
        obamna.hp -= attackPokemon(joe.attack,obamna.defense);  
        console.log("pv de obamna "+obamna.hp);     
    }
    if (isLuck (obamna.luck ) && obamna.hp > 0){
        console.log("pv enlevé à joe " + attackPokemon(obamna.attack,obamna.defense))
        joe.hp -= attackPokemon(obamna.attack,joe.defense)
        console.log("pv de joe " + joe.hp)
    }
    if (joe.hp <= 0) {
        console.log("We're barack")
    } else if (obamna.hp <= 0) {
        console.log("It's joever")
    }
   
}

