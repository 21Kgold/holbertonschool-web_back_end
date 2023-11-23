import Currency from './3-currency';

export default class Pricing {
  constructor(amount = '', currency) {
    this.amount = amount;
    this.currency = currency;
  }

  displayFullPrice() {
    const code = (this.currency._code);
    const name = (this.currency._name);
    const money = `${this.amount} ${name} (${code})`;

    return money;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }
}
