/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import { getObjectValueByString } from './object.utils';

const partitionObjectsArray = (
  objsArray,
  left,
  right,
  objAccessPathStr,
  descendingOrder = false,
) => {
  const pivotIndex = Math.floor((right + left) / 2);
  const pivot = getObjectValueByString(objsArray[pivotIndex], objAccessPathStr);
  let i = left;
  let j = right;

  while (i <= j) {
    if (descendingOrder) {
      while (getObjectValueByString(objsArray[i], objAccessPathStr) > pivot) {
        i += 1;
      }
      while (getObjectValueByString(objsArray[j], objAccessPathStr) < pivot) {
        j -= 1;
      }
    } else {
      while (getObjectValueByString(objsArray[i], objAccessPathStr) < pivot) {
        i += 1;
      }
      while (getObjectValueByString(objsArray[j], objAccessPathStr) > pivot) {
        j -= 1;
      }
    }

    if (i <= j) {
      [objsArray[i], objsArray[j]] = [objsArray[j], objsArray[i]];
      i += 1;
      j -= 1;
    }
  }

  return i;
};

const quickSortObjectsArray = (
  objsArray,
  left,
  right,
  objAccessPathStr,
  descendingOrder = false,
) => {
  let index;

  if (objsArray.length > 1) {
    index = partitionObjectsArray(
      objsArray,
      left,
      right,
      objAccessPathStr,
      descendingOrder,
    );

    if (left < index - 1) {
      quickSortObjectsArray(
        objsArray,
        left,
        index - 1,
        objAccessPathStr,
        descendingOrder,
      );
    }

    if (index < right) {
      quickSortObjectsArray(
        objsArray,
        index,
        right,
        objAccessPathStr,
        descendingOrder,
      );
    }
  }

  return objsArray;
};

export const sortObjectsArray = (
  objsArray,
  objAccessPathStr,
  descendingOrder = false,
) => quickSortObjectsArray(
  objsArray,
  0,
  objsArray.length - 1,
  objAccessPathStr,
  descendingOrder,
);
