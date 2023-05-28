class Shoe {
  constructor(attrs) {
    this._attrs = attrs || {};
  }

  getName() {
    return this._attrs?.name;
  }

  getSize() {
    return this._attrs?.size;
  }

  getBrand() {
    return this.constructor.name;
  }
}

class Nike extends Shoe { };
class NewBalance extends Shoe { };
class Adidas extends Shoe { };

const data = [
  { type: "Nike", attrs: { name: "SB", size: 300 } },
  { type: "NewBalance", attrs: { name: "745", size: 260 } },
  { type: "Adidas", attrs: { name: "Super Star", size: 270 } },
  { type: "Nike", attrs: { name: "Airmax95", size: 245 } }
]

class ShoeFactory {
  typeMap = {
    nike: Nike,
    newbalance: NewBalance,
    adidas: Adidas,
  }

  create(props) {
    try {
      const Brand = this.typeMap[props?.type?.toLowerCase()];
      return new Brand(props.attrs);
    } catch (e) {
      console.error("Error creating new shoes", e);
    }
  }
}

//test
const shoeFactory = new ShoeFactory();

// const nike = shoeFactory.create({ type: "Nike", attrs: { name: "SB", size: 300 } });
// const newBalance = shoeFactory.create({ type: "New Balance", attrs: { name: "745", size: 260 } });
// const adidas = shoeFactory.create({ type: "Adidas", attrs: { name: "Super Star", size: 270 } });

// console.log(nike);
// console.log(nike.getBrand());
// console.log(nike.getName());

const items = data.map((item) => shoeFactory.create(item));
console.log(items);
