const Size = {
  XS: { label: 'XS', value: 85 },
  S: { label: 'S', value: 90 },
  M: { label: 'M', value: 95 },
  L: { label: 'L', value: 100 },
} as const;

type SizeKey = keyof typeof Size;
type Size = (typeof Size)[SizeKey];

const useSize = (selected: Size) => selected;
useSize(Size.S);
