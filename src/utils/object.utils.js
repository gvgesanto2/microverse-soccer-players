/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
export const getObjectValueByString = (obj, accessPathString) => {
  if (!accessPathString) {
    return obj;
  }

  const objKeys = accessPathString.split('.');
  let index = 0;

  for (; index < objKeys.length - 1; index += 1) {
    const key = objKeys[index];
    const candidate = obj[key];

    if (candidate !== undefined) {
      obj = candidate;
    } else {
      break;
    }
  }

  return obj[objKeys[index]];
};
