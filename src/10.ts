import {random} from "lodash";

function getRandomTsCode() {
  const code = `${random(1000, 9999)}`;
  return code;
}
