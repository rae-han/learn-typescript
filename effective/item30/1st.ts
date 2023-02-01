/**
 * @param {undefined}
 * @return {string} - standard foreground color
 * @description -Takes zero arguments, returns standard foreground color.
 * @parma {string} page
 * @return {string}
 * @description -Takes one arguments, returns standard foreground color.
 */
function getForegroundColor(page?: string) {
  return page === 'login' ? { r: 127, g: 127, b: 127 } : { r: 0, g: 0, b: 0 };
}

export {};
