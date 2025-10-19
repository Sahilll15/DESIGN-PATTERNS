"use strict";
class LightButton {
    render() {
        console.log('Render Light Button');
    }
}
class DarkButton {
    render() {
        console.log('Render Dark Button');
    }
}
class LightCheckBox {
    check() {
        console.log('Check light checkbox');
    }
}
class DarkCheckBox {
    check() {
        console.log('Check dark checkbox');
    }
}
class LightFactory {
    createButton() {
        return new LightButton();
    }
    createCheckBox() {
        return new LightCheckBox();
    }
}
class DarkFactory {
    createButton() {
        return new DarkButton();
    }
    createCheckBox() {
        return new DarkCheckBox();
    }
}
function renderUI(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckBox();
    button.render();
    checkbox.check();
}
renderUI(new LightFactory());
renderUI(new DarkFactory());
