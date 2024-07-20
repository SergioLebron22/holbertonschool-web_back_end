export default class Airport {
  constructor(name, code) {
    /* eslint-disable no-underscore-dangle */
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
