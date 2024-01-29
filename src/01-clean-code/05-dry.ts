type Size = '' | 'S' | 'M' | 'XL';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ) {}

  get isProductReady(): boolean {
    // No Dry
    // if (this.name.length <= 0) throw Error('name is empty');
    // if (this.price <= 0) throw Error('price is zero');
    // if (this.size.length <= 0) throw Error('size is empty');

    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((this[key] as string).length <= 0) throw Error(`${key} is empty`);
          break;
        case 'number':
          if ((this[key] as number) <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid`);
      }
    }

    return true;
  }

  otherMethod() {
    if (!this.isProductReady) return;
    // ...
  }

  toString() {
    if (!this.isProductReady) return;

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product('Blue large pants', 10, 'M');
  console.log(bluePants.toString());
})();
