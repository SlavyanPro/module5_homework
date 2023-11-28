let things = new Map();
things.set("table", "brown");
things.set("TV", "black");
things.set("piano", "white");
things.set("fridge", "white");
  
for (let things_s of things.keys()) {
    console.log(things_s + " is " + things.get(things_s));
  }
  