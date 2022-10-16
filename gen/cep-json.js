const jsonfile = require("jsonfile");
const AVLTree = require("avl");
const fs = require("fs");

//           99999999;
//           50000000
const size = 99999999;

const tree = new AVLTree();
var i = 0;

for (let index = 0; index <= size; index++) {
  i++;
  if (i % 10000 == 0) {
    console.log("a", index);
    i = 0;
  }

  tree.insert(index);
}

const root = tree.at(Math.round(size / 2)).key;
console.log("root", root);

i = 0;
tree.forEach(async (node) => {
  i++;
  if (i % 10000 == 0) {
    console.log("b", i);
  }

  fs.appendFileSync(
    "/tmp/cep.json",
    JSON.stringify({
      node: node.key,
      parent: node.parent ? node.parent.key : root,
      left: node.left ? node.left.key : root,
      right: node.right ? node.right.key : root,
    }) + "\n"
  );
});
