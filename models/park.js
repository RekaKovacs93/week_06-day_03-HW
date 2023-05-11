const Park = function (name, price) {
    this.name = name;
    this.price = price;
    this.dinos = []
}
Park.prototype.addDinosaur = function (dino){
    this.dinos.push(dino)
}

Park.prototype.removeDinosaur = function (dino){
    for (let i = 0; i < this.dinos.length; i++){
        if (this.dinos[i] === dino){
            this.dinos.splice(i, 1)
        }
    }
}
Park.prototype.mostPopularDino = function (){
    let mostPopDino = this.dinos[0]
    for (let dino of this.dinos){
        if (dino.guestsAttractedPerDay > mostPopDino.guestsAttractedPerDay){
            mostPopDino = dino
        }
    }
    return mostPopDino
}

Park.prototype.getBySpecies = function (species){
    const found = []
    for (const dino of this.dinos){
        if (dino.species === species){
            found.push(dino)
        }
    }
    return found 
}

Park.prototype.allVisitors = function (){
    let visitors = 0
    for (const dino of this.dinos){
        visitors += dino.guestsAttractedPerDay
        }
    return visitors
}

module.exports = Park;