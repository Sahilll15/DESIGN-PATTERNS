interface Button {
  render(): void;
}

interface CheckBox {
  check(): void;
}

class LightButton implements Button {
  render(): void {
    console.log('Render Light Button');
  }
}

class DarkButton implements Button {
  render(): void {
    console.log('Render Dark Button');
  }
}

class LightCheckBox implements CheckBox {
  check(): void {
    console.log('Check light checkbox');
  }
}

class DarkCheckBox implements CheckBox {
  check(): void {
    console.log('Check dark checkbox');
  }
}

interface UIFactory {
  createButton(): Button;
  createCheckBox(): CheckBox;
}

class LightFactory implements UIFactory {
  createButton(): Button {
    return new LightButton();
  }

  createCheckBox(): CheckBox {
    return new LightCheckBox();
  }
}

class DarkFactory implements UIFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createCheckBox(): CheckBox {
    return new DarkCheckBox();
  }
}

function renderUI(factory: UIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckBox();
  button.render();
  checkbox.check();
}

renderUI(new LightFactory());

renderUI(new DarkFactory());
