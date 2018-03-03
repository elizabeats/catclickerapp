import { Cat, Controller } from './src/index.js';
import cats from './cats.js';

cats.forEach(c => Cat.insert(c));
new Controller();
