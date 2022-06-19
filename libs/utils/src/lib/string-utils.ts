export const DASH = '-';
export const UNDERSCORE = '_';
export const SPACE = ' ';
export const EMPTY = '';

////////////////////////////////////////////////////////////
//
//   Functions to alter the whole string casing
//
////////////////////////////////////////////////////////////
export const lowercase = (s: string) => s.toLowerCase();
export const uppercase = (s: string) => s.toUpperCase();
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const decapitalize = (s: string) =>
  s.charAt(0).toLowerCase() + s.slice(1);
export const capitalizeWords = (s: string) =>
  s.split(SPACE).map(capitalize).join(SPACE);

////////////////////////////////////////////////////////////
//
//   Functions to replace characters
//
////////////////////////////////////////////////////////////
export const replace = (s: string, target: string, substitute: string) =>
  s.split(target).join(substitute);
export const stripDashes = (s: string) => replace(s, DASH, SPACE);
export const stripUnderscores = (s: string) => replace(s, UNDERSCORE, SPACE);
export const stripSpaces = (s: string) => replace(s, SPACE, EMPTY);
export const addDashes = (s: string) => replace(s, SPACE, DASH);
export const addUnderscores = (s: string) => replace(s, SPACE, UNDERSCORE);

////////////////////////////////////////////////////////////
//
//   Functions to apply common string case patterns
//
////////////////////////////////////////////////////////////
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const _pipe = (a, b) => (arg) => b(a(arg));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const transformPipe = (...ops) => ops.reduce(_pipe);

export const strip = transformPipe(stripDashes, stripUnderscores);
export const startCase = transformPipe(strip, capitalizeWords);
export const pascalCase = transformPipe(startCase, stripSpaces);
export const camelCase = transformPipe(pascalCase, decapitalize);
export const kebabCase = transformPipe(strip, addDashes, lowercase);
export const snakeCase = transformPipe(strip, addUnderscores, lowercase);
export const constantCase = transformPipe(strip, addUnderscores, uppercase);
