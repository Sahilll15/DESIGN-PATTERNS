class Computer {
  cpu: string = '';
  gpu: string = '';
  ram: string = '';
  storage: string = '';
  os: string = '';

  describeComputer() {
    console.log(
      'the computer has',
      this.cpu,
      this.gpu,
      this.ram,
      this.storage,
      this.os,
    );
  }
}

interface ComputerBuilder {
  setCpu(cpu: string): this;
  setGpu(gpu: string): this;
  setRam(ram: string): this;

  setStorage(storage: string): this;
  setOs(os: string): this;

  build(): Computer;
}

class myComputer implements ComputerBuilder {
  private computer = new Computer();

  setCpu(cpu: string): this {
    this.computer.cpu = cpu;
    return this;
  }

  setGpu(gpu: string): this {
    this.computer.gpu = gpu;
    return this;
  }

  setOs(os: string): this {
    this.computer.os = os;
    return this;
  }

  setRam(ram: string): this {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): this {
    this.computer.storage = storage;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}

const gamingPC = new myComputer()
  .setCpu('Intel i9')
  .setGpu('RTX 4090')
  .setRam('32GB')
  .setStorage('2TB SSD')
  .setOs('Windows 11')
  .build();

gamingPC.describeComputer();
