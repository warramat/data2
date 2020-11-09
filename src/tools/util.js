/* eslint-disable no-useless-escape */
export const _isEmpty = (data) => {
  const obj =
    data === null || data === "undefined" || data === undefined ? [] : data;
  return Object.entries(obj).length === 0;
};

export const _filterObjKeyHasValue = (value) => {
  let myKeys = Object.keys(value).filter((key) => !_isEmpty(value[key]));
  let result = myKeys.reduce((obj, key) => {
    obj[key] = value[key];
    return obj;
  }, {});
  return result;
};

export const NumberRegX = (language = "") => {
  const number = RegExp(/[ก-๙A-Za-z_\-\*\&\%\$\#\!\+\{\}\^\[\];]/);
  const regex = { number };
  return regex[language.toLowerCase()];
};

export const float1Point = (floatValue) => {
  const converted = parseFloat(floatValue).toFixed(2);
  return converted
}


export const ChangeToK = (num) => {
  return Math.abs(num) > 999999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(1)) + 'm' :
    Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' :
      Math.sign(num) * Math.abs(num)
}