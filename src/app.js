'use strict';

import _ from "lodash";
import { greet, split } from "./utils/utils.js";

const colorString = "blue, black, red, green, purple, yellow";
const colorArray = split(colorString, ", ");
console.log(colorArray);

console.log(greet("Jason"));

console.log(_.reverse(colorArray));