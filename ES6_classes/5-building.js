export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    /* eslint-disable no-underscore-dangle */

    this._sqft = sqft;
  }

  get sqgt() {
    return this._sqft;
  }
}
