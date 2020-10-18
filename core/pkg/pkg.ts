export class pkg {
  constructor() {
    this.version = require("../../../package.json").version
  }
  version:string;
}
