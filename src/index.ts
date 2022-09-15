const SPACE = ' ';

interface Options {
  separator?: string;
  isUppercaseAll?: boolean;
}

export const capitalizeWord = (str: string, letter = 0): string => {
  if (str[letter] === SPACE) {
    return capitalizeWord(str, letter + 1);
  }

  return `${SPACE.repeat(letter)}${str[letter].toUpperCase()}${str.slice(letter + 1)}`;
};

export const capitalizeString: (str: string, options?: Options) => string = (
  str,
  { separator, isUppercaseAll } = { separator: SPACE, isUppercaseAll: false },
) => {
  if (typeof str !== 'string') {
    throw new Error('value is not the string');
  }

  const splitedStr = str.split(separator ?? SPACE);

  if (isUppercaseAll) {
    return splitedStr.map((word) => capitalizeWord(word)).join(separator ?? SPACE);
  }

  return `${capitalizeWord(splitedStr[0])} ${splitedStr.slice(1)}`;
};
