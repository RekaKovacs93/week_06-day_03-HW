const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
      park = new Park("Jurassic Park", 50)
      steg = new Dinosaur("Stegosaurus", "herbivore", 40040)
      trex = new Dinosaur("T-Rex", "carnivore", 88040)
      raps = new Dinosaur("Raptor", "carnivore", 60040)
  })

  it("should have a name", function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
});
  it("should have a ticket price", function(){
    const actual = park.price;
    assert.strictEqual(actual, 50);
  });

  it("should have a collection of dinosaurs", function(){
    const actual = park.dinos;
    assert.deepStrictEqual(actual, []);
  });

  it("should be able to add dinosaurs", function(){
    park.addDinosaur(steg)
    const actual = park.dinos
    assert.deepStrictEqual(actual, [steg])
  });
  it("should be able to remove dinosaurs", function(){
    park.dinos = [steg, trex, raps]
    park.removeDinosaur(trex)
    const actual = park.dinos
    assert.deepStrictEqual(actual, [steg, raps])
  });

  it("should be able to find the dinosaur that attracts the most visitors", function(){
    park.dinos = [steg, trex, raps]
    const actual = park.mostPopularDino()
    console.log(actual)
    assert.deepStrictEqual(actual, trex)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.dinos = [steg, trex, raps]
    const actual = park.getBySpecies("Raptor")
    assert.deepStrictEqual(actual, [raps])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.dinos = [steg, trex, raps]
    const actual = park.allVisitors()
    assert.deepStrictEqual(actual, 188120)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.dinos = [steg, trex, raps]
    const actual = park.allVisitors() * 365
    assert.deepStrictEqual(actual, 68663800)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.dinos = [steg, trex, raps]
    const actual = park.allVisitors() * 365 * park.price
    assert.deepStrictEqual(actual, 3433190000)
  });

  it('should be able to calculate all diets', function(){
    park.dinos = [steg, trex, raps]
    const actual = park.dinoDiets()
    assert.deepStrictEqual(actual, {carnivore: 2, herbivore: 1})
  });

});
