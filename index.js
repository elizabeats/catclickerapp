import { Cat, Controller } from './src/index.js';
import cats from './data.js';

cats.forEach(c => Cat.insert(c));
new Controller();
