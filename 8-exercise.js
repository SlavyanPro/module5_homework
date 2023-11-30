let box = new Map();
box.set("Box_1", "red");
box.set("Box_2", "orange");
box.set("Box_3", "yellow");
box.set("Box_4", "green");
box.set("Box_5", "blue");
box.set("Box_6", "purple");
box.set("Box_7", "pink");
box.set("Box_8", "white");
  
for (let boxes of box.keys()) {
  console.log(boxes + " - X");
}
for (let boxes of box.values()) {
  console.log(boxes + " - Y");
}
for (let boxes of box.keys()) {
console.log(boxes + " - X , " + box.get(boxes) + " - Y" );
}
  
