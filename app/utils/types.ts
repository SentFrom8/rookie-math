export type Categories = {
  [name: string]: { path: string; subcategories: Categories };
};

