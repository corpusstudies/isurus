export type Size = {
  size: bigint;
};

export type Value = {
  value: bigint;
};

export type Fin = Size & Value;

export type ExtOrSize = {
  sizes: bigint[];
};

export type ExtOrValue = {
  sizeIndex: number;
  valueAtIndex: bigint;
};

export type ExtOrFin = ExtOrSize & ExtOrValue;

export function validateFin(fin: Fin): void {
  const {size, value} = fin;
  if (size < 0 || value < 0 || value >= size) {
    throw new Error(`Invalid fin: ${fin}`);
  }
}
