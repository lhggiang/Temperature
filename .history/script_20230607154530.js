class Temperature {
  constructor(Temp) {
    this.temperature = Temp;
  }
  changeF() {
    return this.temperature * 1.8 + 32;
  }
  changeKenvin() {
    return this.temperature + 273;
  }
}
let temperature = new Temperature(25);
console.log(temperature.changeF());
console.log(temperature.changeKenvin());
