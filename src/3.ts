import { random } from 'lodash';

const generateRandomTsCode = () => {
  const code = `
    ${random(100, 200)} = ${random(100, 200)}.${random(100, 200)};
    ${random(100, 200)}.${random(100, 200)} = ${random(100, 200)}.${random(100, 200)};
    ${random(100, 200)}();
  `;
  return code;
}
