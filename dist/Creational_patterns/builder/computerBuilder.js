"use strict";
class Computer {
    constructor() {
        this.cpu = '';
        this.gpu = '';
        this.ram = '';
        this.storage = '';
        this.os = '';
    }
    describeComputer() {
        console.log('the computer has', this.cpu, this.gpu, this.ram, this.storage, this.os);
    }
}
class myComputer {
    constructor() {
        this.computer = new Computer();
    }
    setCpu(cpu) {
        this.computer.cpu = cpu;
        return this;
    }
    setGpu(gpu) {
        this.computer.gpu = gpu;
        return this;
    }
    setOs(os) {
        this.computer.os = os;
        return this;
    }
    setRam(ram) {
        this.computer.ram = ram;
        return this;
    }
    setStorage(storage) {
        this.computer.storage = storage;
        return this;
    }
    build() {
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
