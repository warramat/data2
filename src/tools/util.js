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