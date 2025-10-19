"use strict";
class newDocument {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    clone() {
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
