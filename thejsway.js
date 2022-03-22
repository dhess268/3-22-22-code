const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
  
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength, and ${this.xp} experience points`;
    }
  };
  
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());


const dog = {
    name: 'doggo',
    species: 'pupperdoge',
    size: 'heckin huge',
    
    bark() {
        return 'BORK BORK MOTHERFUCKER'
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

const r = Number(prompt("Enter the circle radius:"));

const circle = {
    circumference(){
        return 2*Math.PI * r 
    },
    area(){
        return Math.PI * Math.pow(r, 2)
    }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);