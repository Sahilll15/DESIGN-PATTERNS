"use strict";
class TreeType {
    constructor(type, color, texture) {
        this.type = type;
        this.color = color;
        this.texture = texture;
    }
    draw(x, y) {
        console.log(`Drawing ${this.type} tree at (${x},${y}) with ${this.color} color`);
    }
}
class TreeFactory {
    static getTreeType(type, color, texture) {
        const key = `${type}_${color}_${texture}`;
        if (!this.treeTypes.has(key)) {
            this.treeTypes.set(key, new TreeType(type, color, texture));
        }
        return this.treeTypes.get(key);
    }
}
TreeFactory.treeTypes = new Map();
class Tree {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    draw() {
        this.type.draw(this.x, this.y);
    }
}
class Forest {
    constructor() {
        this.trees = [];
    }
    plantTree(x, y, type, color, texture) {
        const treeType = TreeFactory.getTreeType(type, color, texture);
        this.trees.push(new Tree(x, y, treeType));
    }
    draw() {
        this.trees.forEach((tree) => tree.draw());
    }
}
const forest = new Forest();
for (let i = 0; i < 100000; i++) {
    forest.plantTree(i, i, 'oak', 'green', 'rough');
}
forest.draw();
