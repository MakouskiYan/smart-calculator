class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue.toString();//
  }

  add(number) {
    this.value += ` + ${number.toString()}`;
    return this;//we should always return object if we want like chaining thing!
  }

  subtract(number) {
    this.value += ` - ${number.toString()}`;
    return this;

  }

  multiply(number) {
    this.value += ` * ${number.toString()}` ;
    return this;

  }

  devide(number) {
    this.value += ` / ${number.toString()}`;
    return this;

  }

  pow(number) {
    this.value += ` ** ${number.toString()}`; //in es6 ** is equal to Math.pow()
    return this;
  }
  // this needs to represent our obj to primitive in some cases!;
  valueOf() {
    return eval(this.value); //eval doing some magic with our string!
  }
}

module.exports = SmartCalculator;
