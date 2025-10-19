interface Prototype {
  clone(): this;
}

class newDocument implements Prototype {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  clone(): this {
    const clone = Object.create(this);
    return clone;
  }

  print() {
    console.log(`Title: ${this.title}\nContent: ${this.content}`);
  }
}

// usage
const doc1 = new newDocument('Original', 'This is the main content.');
const doc2 = doc1.clone();
doc2.title = 'Copy';

doc1.print();
doc2.print();
