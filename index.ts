import { core } from './core/core'
import { env } from 'process';

class main {
  constructor(argv:string[]){

  }
  _core:core = new core();
}

const m:main = new main(process.argv.slice(2));
