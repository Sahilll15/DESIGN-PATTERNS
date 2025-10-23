class TreeType {
  constructor(
    public type: string,
    public color: string,
    public texture: string,
  ) {}
  draw(x: number, y: number) {
    console.log(
      `Drawing ${this.type} tree at (${x},${y}) with ${this.color} color`,
    );
  }
}
class TreeFactory {
  private static treeTypes: Map<string, TreeType> = new Map();
  static getTreeType(type: string, color: string, texture: string): TreeType {
    const key = `${type}_${color}_${texture}`;
    if (!this.treeTypes.has(key)) {
      this.treeTypes.set(key, new TreeType(type, color, texture));
    }
    return this.treeTypes.get(key)!;
  }
}
class Tree {
  constructor(
    private x: number,
    private y: number,
    private type: TreeType,
  ) {}
  draw() {
    this.type.draw(this.x, this.y);
  }
}
class Forest {
  private trees: Tree[] = [];
  plantTree(
    x: number,
    y: number,
    type: string,
    color: string,
    texture: string,
  ) {
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
