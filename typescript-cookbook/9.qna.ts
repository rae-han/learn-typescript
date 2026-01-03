const colors = ['RED', 'GREEN', 'BLUE'] as const;
const colorMap: Record<(typeof colors)[number], string> = {
  RED: '불타는',
  GREEN: '차분함',
  BLUE: '차가운',
};

function includes<T extends U, U>(coll: ReadonlyArray<T>, el: U): el is T {
  return coll.includes(el as T);
}

function matchColor(color: string) {
  if (includes(colors, color)) {
    return colorMap[color];
  } else {
    return '기타';
  }
}
matchColor('RED');
