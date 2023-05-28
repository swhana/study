class Singleton {
  constructor() {
    if (Singleton.instance) {
      return console.warn("Warning: Singleton class already instantiated");
    }
    Singleton.instance = this;
    this.version = Date.now();
    this.config = "test";
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

//1. 하나의 객체 인스턴스만 존재
// const s1 = new Singleton();
// console.log(s1); //Singleton { version: 1685280769029, config: 'test' }
// const s2 = new Singleton();
// console.log(s2); //Warning: Singleton class already instantiated

//2. 스태틱 함수로 객체 접근
const s1 = Singleton.getInstance();
console.log(s1); //Singleton { version: 1685280769029, config: 'test' }
const s2 = Singleton.getInstance();
console.log(s2); //Singleton { version: 1685280769029, config: 'test' }