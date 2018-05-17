
function isUndefined(value: any): boolean {
  return typeof value === 'undefined';
}

function isFunction(value: Function): boolean {
  return typeof value === 'function';
}

function isNumber(value: number): boolean {
  return typeof value === 'number';
}

function isString(value: string): boolean {
  return typeof value === 'string';
}

function isBoolean(value: boolean): boolean {
  return typeof value === 'boolean';
}

function isObject(value: any): boolean {
  return value != null && typeof value === 'object';
}

export {
  isUndefined,
  isFunction,
  isNumber,
  isString,
  isBoolean,
  isObject
};

